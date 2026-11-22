'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronDown, Languages, Mail, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'

const categories = {
  es: [
    ['Infraestructura', [
      ['¿Qué pasa si se corta internet?', 'La plataforma requiere conexión a internet para acceder desde el navegador. Las condiciones de continuidad deben confirmarse contractualmente.'],
      ['¿Necesito comprar servidores o instalar equipos?', 'No se requieren servidores locales para operar la plataforma web. Solo necesitas navegador y conexión a internet.'],
      ['¿El sistema puede crecer con mi inventario?', 'Puedes organizar catálogos por categorías y marcas, administrar variantes e importar productos desde Excel en los planes habilitados.'],
    ]],
    ['Seguridad y control', [
      ['¿Quién puede ver precios, ventas e inventario?', 'La información se controla mediante usuarios, roles y permisos por módulo.'],
      ['¿Cómo se protegen mis datos?', 'La protección se apoya en autenticación y permisos. Alojamiento, respaldos y conservación deben validarse en el acuerdo de servicio.'],
      ['¿Puedo rastrear cambios?', 'Los permisos diferencian responsabilidades y el flujo exacto de trazabilidad se revisa durante la demostración.'],
    ]],
    ['Ventas y operación', [
      ['¿Cómo se cargan muchos productos?', 'Mediante importación Excel en los planes habilitados, con una plantilla acordada.'],
      ['¿Puedo manejar cotizaciones y facturación?', 'Sí, según el plan y la configuración contratada. Confirmaremos el alcance antes de la implementación.'],
      ['¿Qué ocurre con una solicitud de compra?', 'La solicitud queda estructurada para que el equipo dé seguimiento y continúe el proceso comercial.'],
    ]],
    ['Implementación y soporte', [
      ['¿Cuánto tarda la puesta en marcha?', 'Depende del catálogo, configuración y alcance. La demostración permite establecer una ruta realista.'],
      ['¿Recibiré capacitación?', 'El acompañamiento y la capacitación se especifican según el plan o acuerdo contratado.'],
      ['¿Puedo solicitar una función particular?', 'Sí. Se evalúa mediante configuración, un módulo disponible o una personalización cotizada.'],
    ]],
  ],
  en: [
    ['Infrastructure', [
      ['What happens if internet is unavailable?', 'The platform requires internet access through a browser. Continuity terms must be confirmed in the service agreement.'],
      ['Do I need to buy servers or install equipment?', 'No local servers are required for the web platform. You need a browser and internet connection.'],
      ['Can the system grow with my inventory?', 'You can organize catalogs, variants and brands and import products from Excel in eligible plans.'],
    ]],
    ['Security and control', [
      ['Who can view prices, sales and inventory?', 'Access is controlled through users, roles and module permissions.'],
      ['How is my data protected?', 'Protection relies on authentication and permissions. Hosting, backups and retention terms require contract confirmation.'],
      ['Can changes be traced?', 'Permissions separate responsibilities. The exact audit flow is reviewed during the demonstration.'],
    ]],
    ['Sales and operations', [
      ['How are large catalogs loaded?', 'Through Excel import in eligible plans using an agreed template.'],
      ['Can I manage quotations and invoicing?', 'Yes, according to the plan and contracted configuration. Scope is confirmed before implementation.'],
      ['What happens after a purchase request?', 'The request is structured so the team can follow up and continue the commercial process.'],
    ]],
    ['Implementation and support', [
      ['How long does implementation take?', 'It depends on catalog, configuration and scope. The demonstration establishes a realistic timeline.'],
      ['Will my team receive training?', 'Training and guidance are specified by the contracted plan or agreement.'],
      ['Can I request a custom feature?', 'Yes. It is evaluated through configuration, an available module or a quoted customization.'],
    ]],
  ],
} as const

export default function PreguntasFrecuentesPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [open, setOpen] = useState<string | null>(null)
  const selected = categories[lang]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span><span className="text-xl">amax<span className="text-primary">tech</span></span></Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Languages />{lang.toUpperCase()}</button>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft />{lang === 'es' ? 'Volver' : 'Back'}</Link>
          </div>
        </div>
      </header>

      <section className="border-b border-border px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"><ShieldCheck />{lang === 'es' ? 'Transparencia antes de contratar' : 'Transparency before contracting'}</div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{lang === 'es' ? 'Respuestas claras para decidir.' : 'Clear answers to help you decide.'}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lang === 'es' ? 'Información sobre infraestructura, seguridad, operación e implementación basada en el alcance verificable de la plataforma.' : 'Information about infrastructure, security, operations and implementation based on the platform capabilities that can be verified.'}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-24">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-sm font-medium text-primary">{lang === 'es' ? 'CENTRO DE INFORMACIÓN' : 'INFORMATION CENTER'}</p>
          <div className="mt-5 flex flex-wrap gap-2 lg:flex-col">{selected.map(([label]) => <a key={label} href={`#${label.toLowerCase().replaceAll(' ', '-')}`} className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground">{label}</a>)}</div>
        </aside>
        <div className="flex flex-col gap-10">
          {selected.map(([label, items]) => (
            <section key={label} id={label.toLowerCase().replaceAll(' ', '-')}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{label}</h2>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                {items.map(([question, answer]) => (
                  <div key={question} className="border-b border-border last:border-b-0">
                    <button className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-medium" onClick={() => setOpen(open === question ? null : question)} aria-expanded={open === question}><span>{question}</span><ChevronDown className={`shrink-0 transition-transform ${open === question ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} /></button>
                    {open === question && <p className="px-5 pb-6 pr-12 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/40 px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 sm:flex-row sm:items-center md:px-10">
          <div><p className="text-sm font-medium text-primary">{lang === 'es' ? '¿AÚN TIENES DUDAS?' : 'STILL HAVE QUESTIONS?'}</p><h2 className="mt-3 text-3xl font-semibold">{lang === 'es' ? 'Conversemos sobre tu operación.' : 'Let us discuss your operation.'}</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/#contacto" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">{lang === 'es' ? 'Solicitar demo' : 'Book a demo'}<ArrowRight /></Link><a href="mailto:ventas@amaxtech.com?subject=AmaxTech%20information%20request" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium"><Mail />{lang === 'es' ? 'Enviar correo' : 'Send email'}</a></div>
        </div>
      </section>
    </main>
  )
}
