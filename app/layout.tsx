import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'AmaxTech — Wholesale Commerce Management Platform',
  description: 'Inventory and ecommerce platform to manage products, online store, sales, quotations and business operations.',
  applicationName: 'AmaxTech',
  keywords: [
    'inventory management software',
    'wholesale management software',
    'inventory and ecommerce platform',
    'business management software',
    'stock management system',
  ],
  alternates: { canonical: 'https://sales-delta-rouge.vercel.app' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://sales-delta-rouge.vercel.app',
    title: 'AmaxTech — Wholesale Commerce Management Platform',
    description: 'Manage inventory, online store, sales and business operations in one platform.',
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
    description: 'Wholesale commerce platform for inventory, ecommerce, sales and business operations.',
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
