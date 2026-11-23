'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronDown, Languages, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'

const categories = {
  es: [
    ['AmaxTech y planes', [
      ['¿Qué es AmaxTech?', 'AmaxTech es una plataforma comercial y administrativa diseñada para tiendas, distribuidores y mayoristas que necesitan gestionar sus productos, inventario, clientes y pedidos desde un solo lugar. Cada empresa cuenta con una instalación independiente, configurada según el plan contratado y las necesidades de su operación.'],
      ['¿Cuánto cuesta comenzar a utilizar AmaxTech?', 'Para comenzar debes pagar una implementación inicial: Starter $249 USD; Business $399 USD; Professional $599 USD; Enterprise desde $899 USD. Este pago se realiza una sola vez al iniciar el servicio e incluye instalación, configuración inicial y puesta en marcha dentro del alcance contratado. Posteriormente se paga la mensualidad correspondiente: $129, $219, $349 o desde $499 USD, respectivamente.'],
      ['¿Qué incluye la mensualidad?', 'Incluye acceso a la plataforma, infraestructura administrada por AmaxTech, mantenimiento técnico, atención de incidencias y soporte dentro de las horas establecidas en el plan. No necesitas contratar ni administrar servidores o bases de datos por separado.'],
      ['¿Cada empresa tiene su propia plataforma?', 'Sí. Cada cliente dispone de una instalación independiente de AmaxTech, con su propio proyecto y base de datos, separando la información comercial y configuración de cada empresa.'],
    ]],
    ['Infraestructura y dominio', [
      ['¿Tengo que contratar un servidor o servicio de hosting?', 'No. AmaxTech administra la infraestructura técnica necesaria mientras el servicio esté activo. El costo está contemplado en la mensualidad del plan contratado, sujeto a sus condiciones de uso y alcance.'],
      ['¿Tengo que comprar mi propio dominio?', 'Sí. El dominio personalizado debe ser contratado y renovado por el cliente. AmaxTech realiza la configuración técnica necesaria para conectarlo con la plataforma.'],
      ['¿Diseño adaptable?', 'Sí. Puedes acceder desde computadoras, tablets y teléfonos.'],
    ]],
    ['Soporte y cambios', [
      ['¿Cuántas horas de soporte incluye cada plan?', 'Starter: hasta 1 hora mensual. Business: hasta 2 horas mensuales. Professional: hasta 4 horas mensuales. Enterprise: según las condiciones acordadas en el contrato. El soporte contempla consultas de funcionamiento, incidencias técnicas y configuración básica.'],
      ['¿Puedo cambiar de plan posteriormente?', 'Sí. Puedes solicitar un cambio cuando tu empresa necesite más funcionalidades, capacidad o herramientas. Estará sujeto a evaluación de necesidades, diferencias de precio y condiciones de implementación.'],
      ['¿Puedo solicitar nuevas funcionalidades?', 'Sí. Podemos evaluar necesidades específicas y preparar una propuesta. Funcionalidades adicionales, integraciones externas y personalizaciones fuera del plan se cotizan por separado y requieren aprobación previa.'],
    ]],
    ['Datos y condiciones', [
      ['¿Mis datos comerciales me pertenecen?', 'Sí. Los datos comerciales de tu empresa, como productos, clientes, pedidos e información operativa, te pertenecen. AmaxTech los administra técnicamente para prestar el servicio y facilitará su exportación conforme al procedimiento contractual.'],
      ['¿Qué ocurre si decido cancelar el servicio?', 'El contrato contempla un periodo inicial de tres meses. Después, el servicio se renueva mensualmente y puede cancelarse con aviso previo de 30 días. Al finalizar se coordinará la exportación y finalización de la infraestructura según las condiciones y plazos contractuales.'],
      ['¿Cuánto tarda la implementación?', 'El tiempo estimado es de un día laborable una vez recibidos todos los accesos, credenciales, información del negocio, catálogo y dominio necesarios. Si se requieren trabajos adicionales, se comunicará previamente el tiempo estimado.'],
      ['¿WhatsApp está incluido?', 'AmaxTech permite incorporar enlaces de contacto y acciones para continuar conversaciones o gestionar solicitudes mediante WhatsApp. Automatizaciones o WhatsApp Business API no están incluidos salvo contratación expresa.'],
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
      ['How much does each plan cost?', 'Starter: $249 implementation and $129 monthly. Business: $399 and $219 monthly. Professional: $599 and $349 monthly. Enterprise: from $899 and from $499 monthly.'],
      ['What is included in every plan?', 'Independent installation, managed infrastructure, initial setup, responsive design, custom domain, initial training, technical support, maintenance, updates and administrative access according to the plan.'],
      ['How much support is included?', 'Starter includes up to 1 hour monthly, Business up to 2 hours, Professional up to 4 hours and Enterprise defines support through contract.'],
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
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{lang === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lang === 'es' ? 'Resuelve tus dudas antes de comenzar. Te explicamos cómo funciona AmaxTech, qué incluye tu servicio y cómo trabajamos.' : 'Resolve your questions before getting started. We explain how AmaxTech works, what your service includes and how we operate.'}</p>
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
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/#contacto" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">{lang === 'es' ? 'Solicitar una demostración' : 'Request a demonstration'}<ArrowRight /></Link></div>
        </div>
      </section>
    </main>
  )
}
