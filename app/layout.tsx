import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'amaxtech — Convierte cada venta en crecimiento',
  description: 'La suite comercial que une clientes, inventario y canales de venta para hacer crecer tu negocio.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0B0F19' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background"><body className={`${geist.variable} ${geistMono.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
