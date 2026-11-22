# AmaxTech commercial landing

Next.js landing page for AmaxTech.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commercial configuration

Plan names, prices, descriptions and feature lists are centralized in `lib/pricing.ts`.

The demonstration request form sends an SMTP email through `POST /api/demo-request`.

Configure these server-only environment variables in `.env.local` or in the hosting provider:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-smtp-user@example.com
SMTP_PASS=your-smtp-app-password
SMTP_FROM=your-verified-sender@example.com
SMTP_SECURE=1
CONTACT_TO_EMAIL=alexbk09@hotmail.com
```

Use a Gmail app password rather than the account password. The SMTP password must not be committed to Git.
