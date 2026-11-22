import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'AmaxTech — Plataforma de gestión comercial para distribuidores',
  description: 'Gestiona catálogo, inventario, cotizaciones y ventas desde una plataforma diseñada para distribuidores y mayoristas.',
  applicationName: 'AmaxTech',
  keywords: [
    'plataforma de gestión comercial',
    'software para distribuidores',
    'software para mayoristas',
    'gestión de inventario',
    'catálogo digital',
    'cotizaciones y pedidos',
  ],
  alternates: { canonical: 'https://sales-delta-rouge.vercel.app' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://sales-delta-rouge.vercel.app',
    title: 'AmaxTech — Plataforma de gestión comercial',
    description: 'Catálogo, inventario, cotizaciones y ventas conectados en una sola plataforma.',
  },
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0B0F19' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AmaxTech',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://sales-delta-rouge.vercel.app',
    description: 'Plataforma de gestión comercial para distribuidores y mayoristas.',
  }

  return (
    <html lang="es" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
