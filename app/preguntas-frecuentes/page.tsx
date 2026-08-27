'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Mail, MessageCircle, ShieldCheck, Zap } from 'lucide-react'
import { useState } from 'react'

const categories = [
  {
    label: 'Infraestructura',
    items: [
      ['¿Qué pasa si se va la luz o falla el internet?', 'AmaxTech funciona en la nube, por lo que no depende de un servidor físico en tu negocio. Tu catálogo público puede seguir disponible 24/7 y tu equipo puede entrar al panel desde un teléfono con datos móviles. Al restablecerse la conexión, la operación continúa desde el mismo lugar.'],
      ['¿Necesito comprar servidores o instalar equipos?', 'No. La plataforma se entrega como un servicio web: sin instalaciones pesadas, sin servidores en el local y con actualizaciones centralizadas. Solo necesitas un navegador y una conexión a internet.'],
      ['¿El sistema puede crecer con mi inventario?', 'Sí. Puedes organizar grandes catálogos por categorías y marcas, administrar variantes e importar productos masivamente desde Excel para evitar cargas manuales.'],
    ],
  },
  {
    label: 'Seguridad y control',
    items: [
      ['¿Quién puede ver mis precios, ventas e inventario?', 'Tú decides. El sistema separa administradores, vendedores y clientes mediante roles y permisos por módulo. Cada colaborador accede únicamente a la información que necesita para trabajar.'],
      ['¿Cómo se protegen mis datos?', 'La información se aloja en infraestructura cloud especializada con conexiones seguras y respaldos gestionados. Además, los permisos y el registro de accesos reducen el riesgo de cambios no autorizados.'],
      ['¿Puedo saber qué usuario modificó un producto o precio?', 'La administración está preparada para trabajar con usuarios y permisos diferenciados, de modo que tu operación tenga responsables claros y mayor trazabilidad. En la demostración revisamos el flujo exacto para tu negocio.'],
    ],
  },
  {
    label: 'Ventas y operación',
    items: [
      ['¿Cómo se cargan más de 1.500 productos?', 'Con el importador masivo por Excel. Recibes una plantilla, completas productos, categorías, marcas, variantes y precios, y luego los cargas en bloque sin transcribir uno por uno.'],
      ['¿Los precios pueden mostrarse en dólares y bolívares?', 'Sí. AmaxTech permite trabajar con USD y Bs., aplicar la tasa configurada y actualizar precios de manera controlada para proteger tu margen frente a la variación cambiaria.'],
      ['¿Qué ocurre cuando un cliente solicita un producto?', 'El carrito convierte la intención de compra en una solicitud estructurada con datos del cliente y un Tracking ID. Tu equipo puede darle seguimiento, cotizar y confirmar por WhatsApp sin perder el contexto.'],
      ['¿Puedo manejar cotizaciones y facturación?', 'Sí. El flujo contempla solicitudes, cotizaciones profesionales y facturación con datos fiscales SENIAT, según la configuración y alcance contratado para tu operación.'],
    ],
  },
  {
    label: 'Implementación y soporte',
    items: [
      ['¿Cuánto tarda ponerlo en marcha?', 'El proceso se organiza por etapas: configuración de marca, carga o importación del catálogo, definición de roles y capacitación. En la demo levantamos tu alcance para darte una ruta realista de implementación.'],
      ['¿Mi equipo recibirá capacitación?', 'Sí. Incluimos una guía de usuario y acompañamiento para que administradores y vendedores entiendan los flujos principales antes de operar.'],
      ['¿Qué pasa si necesito una función particular?', 'Revisamos tu caso y definimos si puede resolverse con configuración, un módulo adicional o una personalización. La propuesta se presenta con alcance claro antes de comenzar.'],
    ],
  },
]

export default function PreguntasFrecuentesPage() {
  const [open, setOpen] = useState('¿Qué pasa si se va la luz o falla el internet?')

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span>
            <span className="text-xl">amax<span className="text-primary">tech</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft data-icon="inline-start" /> Volver al inicio</Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"><ShieldCheck data-icon="inline-start" /> Transparencia antes de contratar</div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Las respuestas que te dan <span className="text-primary">tranquilidad.</span></h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Antes de elegir una plataforma, necesitas saber cómo protege tu operación, qué pasa cuando algo cambia y quién estará contigo durante la implementación.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {['Sin servidores locales', 'Roles y permisos', 'Acompañamiento inicial'].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"><CheckCircle2 className="text-primary" /><span className="text-sm font-medium">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.32fr_1fr] lg:px-8 lg:py-24">
        <aside className="lg:sticky lg:top-8 lg:self-start"><p className="text-sm font-medium text-primary">CENTRO DE CONFIANZA</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Preguntas importantes</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Explora las respuestas por tema y llega a tu demo con claridad sobre el sistema.</p><div className="mt-6 flex flex-wrap gap-2 lg:flex-col">{categories.map(({ label }) => <a key={label} href={`#${label.toLowerCase().replaceAll(' ', '-')}`} className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground">{label}</a>)}</div></aside>
        <div className="flex flex-col gap-10">{categories.map(({ label, items }) => <section key={label} id={label.toLowerCase().replaceAll(' ', '-')}><div className="mb-4 flex items-center gap-3"><span className="h-px flex-1 bg-border" /><h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{label}</h2><span className="h-px flex-1 bg-border" /></div><div className="overflow-hidden rounded-2xl border border-border bg-card">{items.map(([question, answer]) => <div key={question} className="border-b border-border last:border-b-0"><button className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-medium hover:bg-secondary/40 sm:px-6" onClick={() => setOpen(open === question ? '' : question)} aria-expanded={open === question}><span>{question}</span><ChevronDown className={`shrink-0 text-muted-foreground transition-transform ${open === question ? 'rotate-180 text-primary' : ''}`} /> </button>{open === question && <p className="px-5 pb-6 pr-12 text-sm leading-relaxed text-muted-foreground sm:px-6">{answer}</p>}</div>)}</div></section>)}</div>
      </section>

      <section className="border-t border-border bg-card/40 px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl border border-primary/30 bg-primary/10 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10"><div><p className="text-sm font-medium text-primary">¿AÚN TIENES DUDAS?</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Hablemos de tu operación real.</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Te mostramos el sistema con tus prioridades: catálogo, precios, usuarios, solicitudes y facturación.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="/#contacto" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90">Solicitar demo <ArrowRight data-icon="inline-end" /></Link><a href="https://wa.me/584122649707?text=Hola%2C%20quiero%20conocer%20AmaxTech" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium hover:border-primary/50"><MessageCircle data-icon="inline-start" /> WhatsApp</a></div></div></section>

      <footer className="border-t border-border px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 AmaxTech. Información clara para decidir mejor.</p><a href="mailto:ventas@amaxtech.com" className="inline-flex items-center gap-2 hover:text-foreground"><Mail data-icon="inline-start" /> ventas@amaxtech.com</a></div></footer>
    </main>
  )
}
