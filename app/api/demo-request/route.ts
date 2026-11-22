import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type DemoRequest = {
  name: string
  company: string
  email: string
  country: string
  business: string
  products: string
  need: string
  website?: string
  captchaLeft: number
  captchaRight: number
  captchaAnswer: number
  lang: 'es' | 'en'
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  let body: DemoRequest

  try {
    body = await request.json() as DemoRequest
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  if (body.website?.trim()) {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const requiredFields = ['name', 'company', 'email', 'country', 'business', 'products', 'need'] as const
  if (requiredFields.some((field) => !String(body[field] ?? '').trim())) {
    return NextResponse.json({ error: 'Completa todos los campos requeridos.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email.trim())) {
    return NextResponse.json({ error: 'Ingresa un correo electrónico válido.' }, { status: 400 })
  }

  if (
    !Number.isInteger(body.captchaLeft) ||
    !Number.isInteger(body.captchaRight) ||
    Number(body.captchaAnswer) !== Number(body.captchaLeft) + Number(body.captchaRight)
  ) {
    return NextResponse.json({ error: 'Resuelve correctamente la verificación.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || user
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_FROM || user

  if (!host || !user || !pass || !from || !to) {
    return NextResponse.json(
      { error: 'El envío por correo no está configurado. Intenta nuevamente más tarde.' },
      { status: 503 },
    )
  }

  const safe = {
    name: escapeHtml(body.name.trim()),
    company: escapeHtml(body.company.trim()),
    email: escapeHtml(body.email.trim()),
    country: escapeHtml(body.country.trim()),
    business: escapeHtml(body.business.trim()),
    products: escapeHtml(body.products.trim()),
    need: escapeHtml(body.need.trim()).replaceAll('\n', '<br />'),
  }

  const subject = body.lang === 'en'
    ? `AmaxTech demonstration request — ${body.company.trim()}`
    : `Solicitud de demostración AmaxTech — ${body.company.trim()}`

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: Number(process.env.SMTP_SECURE ?? 0) === 1,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `"AmaxTech" <${from}>`,
      to,
      replyTo: body.email.trim(),
      subject,
      text: [
        body.lang === 'en' ? 'AmaxTech demonstration request' : 'Solicitud de demostración AmaxTech',
        '',
        `Name / Nombre: ${body.name.trim()}`,
        `Company / Empresa: ${body.company.trim()}`,
        `Email / Correo: ${body.email.trim()}`,
        `Country / País: ${body.country.trim()}`,
        `Business type / Tipo de negocio: ${body.business.trim()}`,
        `Approximate products / Productos aproximados: ${body.products.trim()}`,
        `Main need / Necesidad principal: ${body.need.trim()}`,
      ].join('\n'),
      html: `
        <h2>${body.lang === 'en' ? 'AmaxTech demonstration request' : 'Solicitud de demostración AmaxTech'}</h2>
        <p><strong>${body.lang === 'en' ? 'Name' : 'Nombre'}:</strong> ${safe.name}</p>
        <p><strong>${body.lang === 'en' ? 'Company' : 'Empresa'}:</strong> ${safe.company}</p>
        <p><strong>${body.lang === 'en' ? 'Email' : 'Correo'}:</strong> ${safe.email}</p>
        <p><strong>${body.lang === 'en' ? 'Country' : 'País'}:</strong> ${safe.country}</p>
        <p><strong>${body.lang === 'en' ? 'Business type' : 'Tipo de negocio'}:</strong> ${safe.business}</p>
        <p><strong>${body.lang === 'en' ? 'Approximate products' : 'Productos aproximados'}:</strong> ${safe.products}</p>
        <p><strong>${body.lang === 'en' ? 'Main need' : 'Necesidad principal'}:</strong><br />${safe.need}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Demo request SMTP failure', error)
    return NextResponse.json(
      { error: 'No se pudo enviar la solicitud. Intenta nuevamente más tarde.' },
      { status: 502 },
    )
  }
}
