import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, area, service } = req.body ?? {};
  if (!name || !phone || !email || !area || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  const message = [
    'New Matrosov Cool Roof inspection request',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Area: ${area}`,
    `Service: ${service}`,
  ].join('\\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: ['Jogothedemon@gmail.com'],
      subject: `New roof inspection request — ${name}`,
      text: message,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    return res.status(502).json({ error: 'Email provider rejected the request' });
  }

  return res.status(200).json({ ok: true });
}
