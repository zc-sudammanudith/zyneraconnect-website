import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY, site } from '../config.js';

// Sends form data through Web3Forms when an access key is configured,
// otherwise opens the visitor's email client with the message prefilled.
export default function useFormSubmit({ subject, to = site.email }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  async function submit(fields) {
    if (fields.botcheck) return; // honeypot filled, silently ignore spam bots

    const { botcheck, ...data } = fields;
    const subjectLine = typeof subject === 'function' ? subject(data) : subject;

    if (!WEB3FORMS_ACCESS_KEY) {
      const body = Object.entries(data).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: subjectLine, from_name: 'Zynera Connect website', ...data }),
      });
      const json = await res.json();
      if (json.success) setStatus('sent');
      else throw new Error(json.message || 'Something went wrong.');
    } catch (e) {
      setStatus('error');
      setError(e.message || 'Something went wrong.');
    }
  }

  return { status, error, submit, reset: () => setStatus('idle') };
}

export function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}
