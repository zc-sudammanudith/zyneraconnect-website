# Deploying zyneraconnect.com on AWS at $0/month

Architecture: **private S3 bucket → CloudFront (Free flat rate plan) → zyneraconnect.com**, HTTPS via a free ACM certificate, automatic deploys from GitHub Actions.

```
Visitor ──HTTPS──▶ CloudFront (CDN, TLS, WAF/DDoS) ──OAC──▶ S3 bucket (private, holds /dist)
                         ▲
GitHub push ─▶ Actions builds the site ─▶ uploads to S3 ─▶ refreshes CloudFront
```

## Read this first: what is actually free

| Item | Cost |
|---|---|
| CloudFront **Free** flat rate plan (CDN, WAF, DDoS, DNS, 5 GB S3 storage credit per month) | $0, no overage charges |
| ACM SSL certificate | $0 |
| S3 storage for this site (under 1 MB) | covered by the plan's S3 credit |
| GitHub repo + Actions | $0 |
| Web3Forms (contact and careers forms) | $0 up to 250 submissions per month |

Two AWS account rules matter:

1. New AWS accounts choose a **Free plan** or a **Paid plan** at signup. The Free account plan closes the account after 6 months or when credits run out. For a permanent website, **choose the Paid plan** (or upgrade later). That is not a monthly fee; it means pay as you go, and the CloudFront Free flat rate plan keeps this site at $0.
2. The flat rate Free plan covers **one distribution and one apex domain**. That is exactly what this site needs.

Set a safety net either way: **Billing > Budgets > Create budget > Zero spend budget** so you get an email if anything ever costs money.

> If the CloudFront console does not offer DNS for your domain under the Free plan, a Route 53 hosted zone costs $0.50 per month. Option B in step 5 avoids it by keeping DNS at your registrar.

---

## Step 1. Build locally (optional check)

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs /dist
```

## Step 2. Create the S3 bucket

1. S3 > **Create bucket**
2. Name: `zyneraconnect-site` (any unique name), Region: **Asia Pacific (Singapore) ap-southeast-1**
3. Keep **Block all public access ON**. CloudFront reads it privately.
4. Create.

## Step 3. Request the SSL certificate

1. Switch the console region to **US East (N. Virginia) us-east-1**. CloudFront only accepts certificates from this region.
2. Certificate Manager > **Request** > Public certificate
3. Domain names: `zyneraconnect.com` and `www.zyneraconnect.com`
4. Validation: **DNS**. ACM shows two CNAME records; add them in your DNS (step 5) and wait for status **Issued**.

## Step 4. Create the CloudFront distribution

1. CloudFront > **Create distribution**, choose the **Free** plan.
2. Origin: select your S3 bucket. Origin access: **Origin access control (OAC)**, create a new OAC. When CloudFront offers to update the bucket policy, accept (or copy the policy into S3 > bucket > Permissions > Bucket policy).
3. Viewer protocol policy: **Redirect HTTP to HTTPS**
4. Alternate domain names: `zyneraconnect.com`, `www.zyneraconnect.com`; Custom SSL certificate: the one from step 3.
5. Default root object: `index.html`
6. After creation, open the distribution > **Error pages** and add two custom error responses (required so links like /careers work on refresh):

| HTTP error code | Response page path | HTTP response code |
|---|---|---|
| 403 | `/index.html` | 200 |
| 404 | `/index.html` | 200 |

7. Note the **Distribution ID** (E...) and the domain (`dxxxx.cloudfront.net`).

## Step 5. Point the domain to CloudFront

**Option A (recommended): DNS managed in AWS.** If the Free plan offers DNS for your domain, accept it (otherwise create a Route 53 hosted zone at $0.50 per month). Then at your domain registrar, replace the nameservers with the four AWS nameservers shown. Add:
* `zyneraconnect.com` A record, **Alias** to the CloudFront distribution
* `www.zyneraconnect.com` A record, **Alias** to the CloudFront distribution
* the two ACM validation CNAMEs from step 3

**Option B: keep DNS at your registrar (always $0).**
* `www` CNAME → `dxxxx.cloudfront.net`
* Apex `zyneraconnect.com`: use an **ALIAS / ANAME / CNAME flattening** record to `dxxxx.cloudfront.net` if your registrar supports it. If not, use the registrar's URL forwarding to send `zyneraconnect.com` to `https://www.zyneraconnect.com`.
* the two ACM validation CNAMEs from step 3

DNS changes take minutes to a few hours.

## Step 6. First upload (manual)

Create an IAM user with an access key (step 7), then from the project folder:

```bash
npm run build
aws s3 sync dist s3://zyneraconnect-site --delete
aws cloudfront create-invalidation --distribution-id E_YOUR_ID --paths "/*"
```

Or simply upload the **contents** of `/dist` in the S3 console (drag and drop), then create an invalidation for `/*` in CloudFront.

## Step 7. Automatic deploys with GitHub Actions

1. IAM > Users > **Create user** `zynera-deployer` (no console access). Attach this inline policy (replace bucket name, account id, distribution id):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::zyneraconnect-site" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"], "Resource": "arn:aws:s3:::zyneraconnect-site/*" },
    { "Effect": "Allow", "Action": "cloudfront:CreateInvalidation", "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/E_YOUR_ID" }
  ]
}
```

2. Create an **access key** for that user (use case: application running outside AWS).
3. Push this project to a GitHub repo. Under Settings > Secrets and variables > Actions, add: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` (`ap-southeast-1`), `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.
4. Every push to `main` now builds and publishes the site in about a minute.

## Step 8. Turn on the forms

1. Go to https://web3forms.com, enter `people@zyneraconnect.com`, and copy the access key from the email.
2. Paste it into `src/config.js` as `WEB3FORMS_ACCESS_KEY` and push.

Until then, both forms open the visitor's email app with the message prefilled, so nothing is lost.

## Checklist before going live

- [ ] Replace sample job openings in `src/data/content.js`
- [ ] Add the LinkedIn URL in `src/config.js`
- [ ] Web3Forms key added and a test enquiry received
- [ ] `https://zyneraconnect.com/careers` loads on refresh (proves the error page rule works)
- [ ] Zero spend budget alert created
