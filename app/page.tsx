'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Archive,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  Factory,
  Globe2,
  Languages,
  Layers3,
  MapPinned,
  Mail,
  Menu,
  Moon,
  Package,
  ReceiptText,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Sun,
  Truck,
  Users,
  Warehouse,
  X,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { comparisonRows, licenseMode, subscriptionPlans } from '@/lib/pricing'

const liveDemoUrl = 'https://ilumax.vercel.app/'
const manualUrl = 'https://ilumax.vercel.app/manual/index.html'
const salesEmail = 'ventas@amaxtech.com'

type Copy = typeof copy.es

const copy = {
  es: {
    nav: ['Plataforma', 'Industrias', 'Demo', 'Planes', 'Preguntas'],
    heroBadge: 'Plataforma de gestión comercial',
    heroTitle: 'Tu tienda. Tu operación. Todo conectado.',
    heroSubtitle: 'Gestiona tu catálogo, inventario, cotizaciones y ventas desde una sola plataforma diseñada para distribuidores y negocios mayoristas.',
    primaryCta: 'Solicitar demostración gratuita',
    secondaryCta: 'Explorar demo interactiva',
    problemTitle: 'La operación deja de vivir en herramientas desconectadas',
    problemText: 'AmaxTech une el catálogo digital, la tienda online, el inventario y el seguimiento comercial para que tu equipo trabaje con la misma información.',
  },
  en: {
    nav: ['Platform', 'Industries', 'Demo', 'Plans', 'FAQ'],
    heroBadge: 'Commercial management platform',
    heroTitle: 'Your store. Your operation. Everything connected.',
    heroSubtitle: 'Manage your catalog, inventory, quotations and sales from one platform built for distributors and wholesale businesses.',
    primaryCta: 'Request a free demonstration',
    secondaryCta: 'Explore the interactive demo',
    problemTitle: 'Operations stop living in disconnected tools',
    problemText: 'AmaxTech connects the digital catalog, online store, inventory and commercial follow-up so your team works from the same information.',
  },
}

const industries = [
  { icon: Zap, es: ['Distribuidores eléctricos', 'Organiza variantes, precios, stock y solicitudes para atender proyectos sin perder trazabilidad.'], en: ['Electrical distributors', 'Organize variants, prices, stock and purchase requests for projects with clear traceability.'] },
  { icon: Globe2, es: ['Mayoristas de iluminación', 'Publica catálogo y especificaciones mientras tu equipo administra cotizaciones y pedidos.'], en: ['Lighting wholesalers', 'Publish catalog specifications while your team manages quotations and orders.'] },
  { icon: Building2, es: ['Ferreterías', 'Centraliza miles de referencias, categorías y variantes en una experiencia fácil de navegar.'], en: ['Hardware stores', 'Centralize product references, categories and variants in an easy-to-navigate experience.'] },
  { icon: Factory, es: ['Materiales de construcción', 'Gestiona productos voluminosos, proveedores, inventario y solicitudes comerciales.'], en: ['Construction materials', 'Manage bulky products, suppliers, inventory and commercial requests.'] },
  { icon: Boxes, es: ['Pisos y revestimientos', 'Da acceso a fichas técnicas, medidas y variantes desde una tienda digital organizada.'], en: ['Flooring and surfaces', 'Provide technical sheets, dimensions and variants through an organized digital store.'] },
  { icon: Warehouse, es: ['Suministros industriales', 'Controla catálogos, stock y operación comercial con usuarios y roles diferenciados.'], en: ['Industrial supplies', 'Control catalogs, stock and commercial operations with differentiated users and roles.'] },
]

const faqs = [
  [
    ['¿Qué tipo de empresas pueden utilizar AmaxTech?', 'Empresas que comercializan productos físicos, como distribuidores, mayoristas, ferreterías y comercios con catálogo e inventario.'],
    ['¿Cuánto cuesta implementar AmaxTech?', 'Starter cuesta $249 USD de implementación y $129 USD mensuales; Business $399 y $219 mensuales; Professional $599 y $349 mensuales; Enterprise desde $899 y desde $499 mensuales.'],
    ['¿Qué incluye la mensualidad?', 'La mensualidad mantiene activa la instalación administrada, infraestructura, soporte técnico según el plan y las mejoras generales cuando correspondan.'],
    ['¿Cada cliente tiene una instalación independiente?', 'Sí. Cada empresa recibe su propio proyecto, base de datos y configuración dentro de la infraestructura administrada por AmaxTech.'],
    ['¿Cuánto soporte técnico incluye cada plan?', 'Starter incluye hasta 1 hora mensual, Business hasta 2 horas, Professional hasta 4 horas y Enterprise según contrato.'],
    ['¿Puedo administrar una tienda online?', 'Sí. AmaxTech incluye un catálogo público, carrito de compras y solicitudes de compra según la configuración contratada.'],
    ['¿Puedo importar mis productos desde Excel?', 'Sí. Esta capacidad está disponible en los planes Business y superiores.'],
    ['¿Puedo gestionar múltiples almacenes?', 'El multi-almacén está disponible en el plan Professional y puede evaluarse en una implementación Enterprise.'],
    ['¿Puedo personalizar el sistema?', 'Sí, dentro de una implementación Enterprise o mediante alcances acordados específicamente antes de comenzar.'],
    ['¿Cómo funciona la implementación?', 'Se configura la empresa, se carga o importa el catálogo, se define el inventario y la tienda, y luego se activa la operación.'],
    ['¿Necesito conocimientos técnicos?', 'No. La administración está diseñada para operar desde el navegador, con acompañamiento durante la puesta en marcha.'],
    ['¿Puedo solicitar una demostración?', 'Sí. Puedes completar el formulario y la solicitud se enviará directamente al equipo comercial por correo.'],
    ['¿Qué sucede con mis datos?', 'El alcance de residencia, respaldos, exportación y conservación debe confirmarse contractualmente antes de contratar.'],
    ['¿Qué incluye el soporte?', 'Starter incluye hasta 1 hora mensual, Business hasta 2 horas, Professional hasta 4 horas y Enterprise define el soporte mediante contrato.'],
    ['¿Puedo cambiar de plan?', 'Sí. Los cambios deben revisarse con el equipo comercial según las funciones habilitadas y las condiciones del servicio.'],
  ],
  [
    ['What types of companies can use AmaxTech?', 'Businesses that sell physical products, such as distributors, wholesalers, hardware stores and catalog-based retailers.'],
    ['How much does AmaxTech implementation cost?', 'Starter: $249 implementation and $129 monthly; Business: $399 and $219 monthly; Professional: $599 and $349 monthly; Enterprise: from $899 and from $499 monthly.'],
    ['What does the monthly fee include?', 'The fee keeps the managed installation active, along with technical services, support based on the plan and general improvements when applicable.'],
    ['Does every customer have an independent installation?', 'Yes. Each company receives its own project, database and configuration within infrastructure managed by AmaxTech.'],
    ['How much technical support does each plan include?', 'Starter includes up to 1 hour monthly, Business up to 2 hours, Professional up to 4 hours and Enterprise according to contract.'],
    ['Can I manage an online store?', 'Yes. AmaxTech includes a public catalog, shopping cart and purchase requests according to the contracted configuration.'],
    ['Can I import products from Excel?', 'Yes. This capability is available in the Business plan and above.'],
    ['Can I manage multiple warehouses?', 'Multi-warehouse is available in the Professional plan and can be evaluated for an Enterprise implementation.'],
    ['Can I customize the system?', 'Yes, through an Enterprise implementation or a scope agreed before the project begins.'],
    ['How does implementation work?', 'We configure the company, upload or import the catalog, define inventory and the store, and then activate operations.'],
    ['Do I need technical knowledge?', 'No. Administration works in a browser, with guidance during setup and training.'],
    ['Can I request a demonstration?', 'Yes. Complete the form and the request will be sent directly to the sales team by email.'],
    ['What happens to my data?', 'Data location, backups, export and retention terms must be confirmed contractually before contracting.'],
    ['What does support include?', 'Starter includes up to 1 hour monthly, Business up to 2 hours, Professional up to 4 hours and Enterprise defines support through contract.'],
    ['Can I change plans?', 'Yes. Changes are reviewed with sales according to enabled features and service terms.'],
  ],
]

const comparisonLabels = {
  es: ['Instalación independiente', 'Catálogo digital', 'Página comercial', 'Solicitudes de compra', 'Gestión básica de pedidos', 'Inventario y stock', 'Variantes de productos', 'Importación Excel', 'Gestión de clientes', 'Multi-almacén', 'Despachos y rutas', 'Cuentas por cobrar y pagos', 'Conciliación bancaria', 'Reportes', 'Usuarios administrativos', 'Soporte mensual'],
  en: ['Independent installation', 'Digital catalog', 'Commercial page', 'Purchase requests', 'Basic order management', 'Inventory and stock', 'Product variants', 'Excel import', 'Customer management', 'Multi-warehouse', 'Dispatch and routes', 'Accounts receivable and payments', 'Bank reconciliation', 'Reports', 'Administrative users', 'Monthly support'],
}

const translateComparisonValue = (value: boolean | string, lang: 'es' | 'en') => {
  if (lang === 'es') return value
  const translations: Record<string, string> = {
    Básico: 'Basic',
    Avanzados: 'Advanced',
    'Hasta 1 hora': 'Up to 1 hour',
    'Hasta 2 horas': 'Up to 2 hours',
    'Hasta 4 horas': 'Up to 4 hours',
    'Hasta 2': 'Up to 2',
    'Hasta 5': 'Up to 5',
    'Hasta 10': 'Up to 10',
    Ampliada: 'Expanded',
    'Según contrato': 'According to contract',
    Completo: 'Complete',
    Avanzado: 'Advanced',
    Adaptado: 'Customized',
    Comerciales: 'Commercial',
    'Comerciales y financieros': 'Commercial and financial',
    Personalizados: 'Custom',
    Disponibles: 'Available',
    Adicionales: 'Additional',
    Especiales: 'Special',
    'Si está habilitado': 'If enabled',
    'Según alcance': 'According to scope',
    Estándar: 'Standard',
    Prioritario: 'Priority',
    'Acuerdo dedicado': 'Dedicated agreement',
  }
  return typeof value === 'string' ? (translations[value] ?? value) : value
}

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [captcha, setCaptcha] = useState(() => ({
    left: Math.floor(Math.random() * 8) + 2,
    right: Math.floor(Math.random() * 8) + 2,
  }))
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const t: Copy = copy[lang]
  const selectedFaqs = faqs[lang === 'es' ? 0 : 1]

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('light', dark)
  }

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (String(data.get('website')).trim()) return
    if (Number(captchaAnswer) !== captcha.left + captcha.right) {
      setCaptchaError(lang === 'es'
        ? 'Resuelve correctamente la operación para continuar.'
        : 'Solve the operation correctly to continue.')
      setSent(false)
      return
    }
    setCaptchaError('')
    setSubmitError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          country: data.get('country'),
          business: data.get('business'),
          products: data.get('products'),
          need: data.get('need'),
          website: data.get('website'),
          captchaLeft: captcha.left,
          captchaRight: captcha.right,
          captchaAnswer: Number(captchaAnswer),
          lang,
        }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || (lang === 'es'
          ? 'No se pudo enviar la solicitud.'
          : 'The request could not be sent.'))
      }

      setSent(true)
      event.currentTarget.reset()
      setCaptchaAnswer('')
      setCaptcha({
        left: Math.floor(Math.random() * 8) + 2,
        right: Math.floor(Math.random() * 8) + 2,
      })
    } catch (error) {
      setSent(false)
      setSubmitError(error instanceof Error ? error.message : (lang === 'es'
        ? 'No se pudo enviar la solicitud.'
        : 'The request could not be sent.'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 font-bold tracking-tight" aria-label="AmaxTech inicio">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span>
            <span className="text-xl">amax<span className="text-primary">tech</span></span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex" aria-label="Navegación principal">
            <a href="#plataforma">{t.nav[0]}</a>
            <a href="#industrias">{t.nav[1]}</a>
            <a href="#demo">{t.nav[2]}</a>
            <a href="#precios">{t.nav[3]}</a>
            <a href="/preguntas-frecuentes">{t.nav[4]}</a>
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="sm" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label="Cambiar idioma">
              <Languages /> {lang.toUpperCase()}
            </Button>
            <Button variant="ghost" size="icon-sm" onClick={toggleTheme} aria-label="Cambiar tema">
              {dark ? <Sun /> : <Moon />}
            </Button>
            <Button asChild><a href="#contacto">{t.primaryCta}<ArrowRight /></a></Button>
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 text-sm lg:hidden">
            <a href="#plataforma" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
            <a href="#industrias" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
            <a href="#demo" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
            <a href="#precios" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
            <a href="/preguntas-frecuentes" onClick={() => setMenuOpen(false)}>{t.nav[4]}</a>
            <Button variant="outline" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}><Languages /> {lang.toUpperCase()}</Button>
            <Button asChild><a href="#contacto">{t.primaryCta}</a></Button>
          </nav>
        )}
      </header>

      <section id="inicio" className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <ShieldCheck /> {t.heroBadge}
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {lang === 'es' ? <>Tu tienda. Tu operación. <span className="text-primary">Todo conectado.</span></> : t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><a href="#contacto">{t.primaryCta}<ArrowRight /></a></Button>
              <Button size="lg" variant="outline" asChild><a href={liveDemoUrl} target="_blank" rel="noreferrer">{t.secondaryCta}<ArrowRight /></a></Button>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['Catálogo', 'Inventario', 'Ventas', 'Cotizaciones'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-4 text-primary" />{item}</span>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl" />
            <Image src="/mockups/dashboard-amaxtech.png" alt="Panel administrativo de AmaxTech" width={1200} height={760} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10" />
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
              <p className="text-xs text-muted-foreground">{lang === 'es' ? 'Administración centralizada' : 'Centralized administration'}</p>
              <p className="mt-1 font-semibold">{lang === 'es' ? 'Productos · Stock · Pedidos · Clientes' : 'Products · Stock · Orders · Customers'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'PROBLEMAS QUE RESUELVE' : 'PROBLEMS IT SOLVES'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{lang === 'es' ? 'Menos desorden operativo. Más control comercial.' : 'Less operational clutter. More commercial control.'}</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              lang === 'es'
                ? ['Inventario desorganizado', 'Stock centralizado por producto, variante y almacén según el alcance configurado.']
                : ['Disorganized inventory', 'Centralized stock by product, variant and warehouse according to the configured scope.'],
              lang === 'es'
                ? ['Productos en múltiples hojas', 'Catálogo y productos administrados en una sola aplicación.']
                : ['Products spread across spreadsheets', 'Catalog and products managed in one application.'],
              lang === 'es'
                ? ['Cotizaciones manuales', 'Cotizaciones profesionales con seguimiento dentro del flujo comercial.']
                : ['Manual quotations', 'Professional quotations with follow-up in the commercial workflow.'],
              lang === 'es'
                ? ['Pedidos difíciles de controlar', 'Pedidos y solicitudes estructurados para que el equipo dé seguimiento.']
                : ['Hard-to-track orders', 'Structured orders and requests for the team to follow up.'],
              lang === 'es'
                ? ['Catálogos desactualizados', 'Publicación de productos, categorías, marcas y variantes desde el panel.']
                : ['Outdated catalogs', 'Publish products, categories, brands and variants from the administration panel.'],
              lang === 'es'
                ? ['Procesos comerciales desconectados', 'Catálogo, ventas, clientes, inventario y reportes organizados por módulos.']
                : ['Disconnected sales processes', 'Catalog, sales, customers, inventory and reports organized by module.'],
            ].map(([problem, solution]) => (
              <article key={problem} className="bg-background p-6">
                <p className="text-sm font-semibold">{problem}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-primary">{lang === 'es' ? 'Con AmaxTech: ' : 'With AmaxTech: '}</span>{solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plataforma" className="border-y border-border bg-card/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'UNA PLATAFORMA COMERCIAL COMPLETA' : 'ONE COMPLETE COMMERCE PLATFORM'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{t.problemTitle}</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{t.problemText}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [ShoppingCart, lang === 'es' ? 'Vende' : 'Sell', lang === 'es' ? 'Catálogo público, carrito y solicitudes de compra.' : 'Public catalog, shopping cart and purchase requests.'],
              [Package, lang === 'es' ? 'Administra' : 'Manage', lang === 'es' ? 'Productos, variantes, stock y proveedores.' : 'Products, variants, stock and suppliers.'],
              [ReceiptText, lang === 'es' ? 'Cotiza' : 'Quote', lang === 'es' ? 'Cotizaciones profesionales y seguimiento comercial.' : 'Professional quotations and sales tracking.'],
              [Truck, lang === 'es' ? 'Despacha' : 'Dispatch', lang === 'es' ? 'Pedidos, zonas de envío y operación logística según el plan.' : 'Orders, shipping zones and logistics by plan.'],
              [Users, lang === 'es' ? 'Controla usuarios' : 'Control users', lang === 'es' ? 'Usuarios, roles y permisos por módulo.' : 'Users, roles and module permissions.'],
              [BarChart3, lang === 'es' ? 'Reporta' : 'Report', lang === 'es' ? 'Reportes comerciales y financieros disponibles por plan.' : 'Commercial and financial reports available by plan.'],
            ].map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon /></div>
                <h3 className="mt-5 text-lg font-semibold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'FUNCIONALIDADES PRINCIPALES' : 'CORE FEATURES'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{lang === 'es' ? 'Todo lo necesario para centralizar la operación comercial.' : 'Everything needed to centralize commercial operations.'}</h2>
          </div>
        </div>
        {[
          {
            title: lang === 'es' ? 'Comercio digital' : 'Digital commerce',
            icon: ShoppingCart,
            items: lang === 'es'
              ? ['Catálogo digital', 'Tienda online', 'Productos', 'Categorías y marcas', 'Variantes de productos']
              : ['Digital catalog', 'Online store', 'Products', 'Categories and brands', 'Product variants'],
          },
          {
            title: lang === 'es' ? 'Gestión comercial' : 'Commercial management',
            icon: ReceiptText,
            items: lang === 'es'
              ? ['Gestión de clientes', 'Cotizaciones', 'Pedidos', 'Cuentas por cobrar', 'Reportes']
              : ['Customer management', 'Quotations', 'Orders', 'Accounts receivable', 'Reports'],
          },
          {
            title: lang === 'es' ? 'Inventario y administración' : 'Inventory and administration',
            icon: Warehouse,
            items: lang === 'es'
              ? ['Inventario', 'Proveedores', 'Almacenes', 'Despachos', 'Zonas de envío', 'Usuarios y roles']
              : ['Inventory', 'Suppliers', 'Warehouses', 'Dispatches', 'Shipping zones', 'Users and roles'],
          },
        ].map(({ title, icon: Icon, items }) => (
          <article key={title} className="mt-6 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon /></div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section id="industrias" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'INDUSTRIAS OBJETIVO' : 'TARGET INDUSTRIES'}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Diseñado para negocios que venden productos físicos.' : 'Built for businesses that sell physical products.'}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, es, en }) => {
            const item = lang === 'es' ? es : en
            return <article key={item[0]} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon /></div>
              <h3 className="mt-5 text-lg font-semibold">{item[0]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item[1]}</p>
            </article>
          })}
        </div>
      </section>

      <section id="demo" className="mx-5 rounded-3xl border border-accent/30 bg-accent/10 px-6 py-12 lg:mx-auto lg:max-w-7xl lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-accent">{lang === 'es' ? 'DEMOSTRACIÓN REAL' : 'LIVE DEMONSTRATION'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Explora ilumaX, una tienda creada con AmaxTech.' : 'Explore ilumaX, a store built with AmaxTech.'}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{lang === 'es' ? 'ilumaX es una implementación demostrativa de AmaxTech para un negocio de iluminación. Explora el catálogo, los productos y el flujo de solicitudes; el panel muestra la administración de catálogo y operación. No la presentamos como un cliente real ni atribuimos resultados comerciales.' : 'ilumaX is a demonstration implementation of AmaxTech for a lighting business. Explore the catalog, products and request flow; the panel shows catalog and operations administration. It is not presented as a real customer or attributed commercial results.'}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild><a href={liveDemoUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Explorar demostración' : 'Explore demonstration'}<ArrowRight /></a></Button>
              <Button variant="outline" asChild><a href={manualUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Consultar manual' : 'View manual'}</a></Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background p-2">
            <Image src="/mockups/Screenshot 2026-08-27 143641.png" alt="Vista de la tienda ilumaX construida con AmaxTech" width={1200} height={760} sizes="(max-width: 1024px) 100vw, 55vw" className="rounded-xl" />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'CÓMO FUNCIONA' : 'HOW IT WORKS'}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'De la configuración a la operación.' : 'From setup to operation.'}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {[
            lang === 'es' ? ['1', 'Configura tu catálogo', 'Organiza categorías, marcas, productos y variantes.'] : ['1', 'Configure your catalog', 'Organize categories, brands, products and variants.'],
            lang === 'es' ? ['2', 'Publica tus productos', 'Activa la información comercial en la tienda digital.'] : ['2', 'Publish your products', 'Activate commercial information in the digital store.'],
            lang === 'es' ? ['3', 'Recibe solicitudes y pedidos', 'Centraliza las consultas y solicitudes de compra.'] : ['3', 'Receive requests and orders', 'Centralize inquiries and purchase requests.'],
            lang === 'es' ? ['4', 'Gestiona cotizaciones y ventas', 'Da seguimiento al proceso desde la cotización hasta el pedido.'] : ['4', 'Manage quotations and sales', 'Follow the process from quotation to order.'],
            lang === 'es' ? ['5', 'Controla inventario y operaciones', 'Consulta stock y administra almacenes, despachos y reportes.'] : ['5', 'Control inventory and operations', 'Review stock and manage warehouses, dispatches and reports.'],
          ].map(([number, title, text]) => <article key={number} className="rounded-2xl border border-border bg-card p-5">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{number}</span>
            <h3 className="mt-5 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </article>)}
        </div>
      </section>

      <section id="precios" className="border-y border-border bg-card/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'PLANES Y PRECIOS' : 'PLANS AND PRICING'}</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Elige el nivel de operación que necesitas.' : 'Choose the operation level you need.'}</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{lang === 'es' ? 'Un pago único de implementación y una mensualidad según el plan contratado.' : 'A one-time implementation payment and a monthly fee according to the contracted plan.'}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {subscriptionPlans.map((plan) => (
              <article key={plan.name} className={`flex flex-col rounded-2xl border p-6 ${plan.popular ? 'border-primary bg-primary/10 shadow-lg shadow-primary/5' : 'border-border bg-card'}`}>
                {plan.popular && <span className="mb-5 self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{lang === 'es' ? 'Más popular' : 'Most Popular'}</span>}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{lang === 'es' ? 'Implementación' : 'Implementation'}: <span className="font-semibold text-foreground">{plan.implementation}</span></p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}{plan.period && <span className="text-sm font-normal text-muted-foreground"> {plan.period}</span>}</p>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">{plan.description[lang]}</p>
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{plan.ideal[lang]}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                  {plan.features[lang].map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><span>{feature}</span></li>)}
                </ul>
                <Button className="mt-7 w-full" variant={plan.popular ? 'default' : 'outline'} asChild>
                  <a href="#contacto">{plan.name === 'Enterprise' ? (lang === 'es' ? 'Contactar ventas' : 'Contact Sales') : (lang === 'es' ? 'Solicitar cotización' : 'Request a Quote')}</a>
                </Button>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            {lang === 'es'
              ? 'Los precios oficiales corresponden a la modalidad de suscripción administrada por AmaxTech. Enterprise se cotiza según alcance.'
              : 'Official prices apply to the AmaxTech-managed subscription model. Enterprise is quoted according to scope.'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'COMPARATIVA' : 'COMPARISON'}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Comparación de funcionalidades' : 'Feature comparison'}</h2>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-card"><tr><th className="p-4">{lang === 'es' ? 'Funcionalidad' : 'Feature'}</th>{['Starter', 'Business', 'Professional', 'Enterprise'].map((name) => <th key={name} className="p-4 text-center">{name}</th>)}</tr></thead>
            <tbody>
              {comparisonRows.map((row, rowIndex) => <tr key={row[0]} className="border-t border-border">
                <th className="p-4 font-medium">{comparisonLabels[lang][rowIndex]}</th>
                {row.slice(1).map((value, index) => <td key={index} className="p-4 text-center text-muted-foreground">
                  {value === true ? <Check className="mx-auto size-4 text-primary" /> : value === false ? <span aria-label={lang === 'es' ? 'No incluido' : 'Not included'}>—</span> : translateComparisonValue(value, lang)}
                </td>)}
              </tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'INCLUIDO EN TODOS LOS PLANES' : 'INCLUDED IN EVERY PLAN'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Tu plataforma incluye mucho más que software' : 'Your platform includes much more than software'}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              lang === 'es' ? ['Instalación independiente', 'Proyecto, base de datos y configuración propios.'] : ['Independent installation', 'Your own project, database and configuration.'],
              lang === 'es' ? ['Infraestructura administrada', 'AmaxTech administra el alojamiento y los servicios técnicos.'] : ['Managed infrastructure', 'AmaxTech manages hosting and technical services.'],
              lang === 'es' ? ['Configuración inicial', 'Puesta en marcha según el plan contratado.'] : ['Initial setup', 'Launch according to the contracted plan.'],
              lang === 'es' ? ['Diseño adaptable', 'Uso desde computadora, tablet y teléfono.'] : ['Responsive design', 'Use from computer, tablet and phone.'],
              lang === 'es' ? ['Dominio personalizado', 'Configuración del dominio de tu empresa.'] : ['Custom domain', 'Configuration for your company domain.'],
              lang === 'es' ? ['Capacitación inicial', 'Orientación para aprender a utilizar el sistema.'] : ['Initial training', 'Guidance to learn how to use the system.'],
              lang === 'es' ? ['Soporte técnico', 'Atención dentro del límite de horas del plan.'] : ['Technical support', 'Assistance within the plan hourly allowance.'],
              lang === 'es' ? ['Mantenimiento técnico', 'Atención de incidencias y mantenimiento.'] : ['Technical maintenance', 'Issue handling and installation maintenance.'],
              lang === 'es' ? ['Actualizaciones', 'Mejoras generales cuando correspondan.'] : ['Updates', 'General improvements when applicable.'],
              lang === 'es' ? ['Acceso administrativo', 'Usuarios y permisos según el plan.'] : ['Administrative access', 'Users and permissions according to the plan.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-5">
                <Check className="size-5 text-primary" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-sm leading-relaxed sm:text-base">
            {lang === 'es'
              ? 'Tu empresa no tiene que preocuparse por contratar servidores, configurar bases de datos o administrar la infraestructura técnica. AmaxTech se encarga de esa parte para que puedas concentrarte en tu negocio.'
              : 'Your company does not need to worry about servers, database setup or technical infrastructure. AmaxTech manages that part so you can focus on your business.'}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'TU INVERSIÓN' : 'YOUR INVESTMENT'}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Sin costos ocultos. Así funciona tu inversión.' : 'No hidden costs. Here is how your investment works.'}</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            lang === 'es'
              ? ['Pago único de implementación', 'Se paga una sola vez al iniciar el servicio. Incluye instalación, configuración inicial y puesta en marcha según el plan.', '$249 · $399 · $599 · desde $899']
              : ['One-time implementation payment', 'Paid once when the service starts. It includes installation, initial setup and launch according to the plan.', '$249 · $399 · $599 · from $899'],
            lang === 'es'
              ? ['Mensualidad', 'Mantiene activa la plataforma administrada, los servicios técnicos contratados y el soporte del plan.', '$129 · $219 · $349 · desde $499']
              : ['Monthly fee', 'Keeps the managed platform, contracted technical services and plan support active.', '$129 · $219 · $349 · from $499'],
            lang === 'es'
              ? ['Servicios opcionales', 'Integraciones especiales, desarrollos específicos y requerimientos adicionales se cotizan aparte según el alcance.', 'Solo si los contratas']
              : ['Optional services', 'Special integrations, custom development and additional requirements are quoted separately by scope.', 'Only if contracted'],
          ].map(([title, text, price]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-medium text-primary">{title}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
              <p className="mt-5 font-semibold">{price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="confianza" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-primary">{lang === 'es' ? 'CONFIANZA Y CONTROL' : 'TRUST AND CONTROL'}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Control operativo sin promesas vacías.' : 'Operational control without unsupported claims.'}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [ShieldCheck, lang === 'es' ? 'Acceso por usuarios' : 'User access', lang === 'es' ? 'Autenticación y separación de funciones según roles configurados.' : 'Authentication and role-based separation of responsibilities.'],
              [Users, lang === 'es' ? 'Roles y permisos' : 'Roles and permissions', lang === 'es' ? 'Permisos por módulo para limitar el alcance de cada usuario.' : 'Module permissions limit the scope of each user.'],
              [Globe2, lang === 'es' ? 'Acceso desde navegador' : 'Browser access', lang === 'es' ? 'La plataforma se entrega como una aplicación web sin instalaciones locales.' : 'The platform is delivered as a web application with no local installation.'],
              [Mail, lang === 'es' ? 'Soporte definido' : 'Defined support', lang === 'es' ? 'El nivel de soporte y los tiempos de respuesta dependen del plan o acuerdo.' : 'Support level and response times depend on the plan or agreement.'],
            ].map(([Icon, title, text]) => <article key={String(title)} className="rounded-2xl border border-border bg-card p-5">
              <Icon className="text-primary" /><h3 className="mt-4 font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(text)}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center"><p className="mb-3 text-sm font-medium text-primary">FAQ</p><h2 className="text-3xl font-semibold tracking-tight">{lang === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2></div>
          <div className="mt-10 border-y border-border">
            {selectedFaqs.map(([question, answer], index) => <div key={question} className="border-b border-border last:border-b-0">
              <button className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                {question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </button>
              {openFaq === index && <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
            </div>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-medium text-primary-foreground/70">{lang === 'es' ? 'CONVERSACIÓN COMERCIAL' : 'COMMERCIAL CONVERSATION'}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{lang === 'es' ? 'Solicita una demostración gratuita.' : 'Book a free demonstration.'}</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/75">{lang === 'es' ? 'Cuéntanos qué necesita tu operación. La solicitud se enviará directamente al equipo comercial.' : 'Tell us what your operation needs. The request will be sent directly to the sales team.'}</p>
            </div>
            <form onSubmit={submitLead} className="grid gap-3 sm:grid-cols-2">
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px opacity-0"
              />
              {[
                ['name', lang === 'es' ? 'Nombre' : 'Name', 'text'],
                ['company', lang === 'es' ? 'Empresa' : 'Company', 'text'],
                ['email', lang === 'es' ? 'Correo electrónico' : 'Email', 'email'],
                ['country', 'País / Country', 'text'],
              ].map(([name, placeholder, type]) => <input key={name} name={name} required aria-label={placeholder} type={type} placeholder={placeholder} className="h-11 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm outline-none placeholder:text-primary-foreground/60" />)}
              <select name="business" required aria-label={lang === 'es' ? 'Tipo de negocio' : 'Business type'} className="h-11 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm text-primary-foreground">
                <option value="" className="text-foreground">{lang === 'es' ? 'Tipo de negocio' : 'Business type'}</option>
                {(lang === 'es'
                  ? ['Distribuidor', 'Mayorista', 'Ferretería', 'Construcción', 'Pisos y revestimientos', 'Industrial', 'Otro']
                  : ['Distributor', 'Wholesaler', 'Hardware store', 'Construction', 'Flooring and surfaces', 'Industrial', 'Other']).map((value) => <option key={value} value={value} className="text-foreground">{value}</option>)}
              </select>
              <select name="products" required aria-label={lang === 'es' ? 'Número aproximado de productos' : 'Approximate number of products'} className="h-11 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm text-primary-foreground">
                <option value="" className="text-foreground">{lang === 'es' ? 'Productos aproximados' : 'Approximate products'}</option>
                {(lang === 'es'
                  ? ['Menos de 500', '500–2.000', '2.000–10.000', 'Más de 10.000']
                  : ['Less than 500', '500–2,000', '2,000–10,000', 'More than 10,000']).map((value) => <option key={value} value={value} className="text-foreground">{value}</option>)}
              </select>
              <textarea name="need" required rows={3} aria-label={lang === 'es' ? 'Necesidad principal' : 'Main need'} placeholder={lang === 'es' ? 'Necesidad principal' : 'Main need'} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm outline-none placeholder:text-primary-foreground/60 sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium" htmlFor="captcha-answer">
                  {lang === 'es'
                    ? `Verificación: ¿Cuánto es ${captcha.left} + ${captcha.right}?`
                    : `Verification: What is ${captcha.left} + ${captcha.right}?`}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="captcha-answer"
                    name="captcha"
                    type="number"
                    inputMode="numeric"
                    required
                    value={captchaAnswer}
                    onChange={(event) => {
                      setCaptchaAnswer(event.target.value)
                      setCaptchaError('')
                    }}
                    aria-describedby={captchaError ? 'captcha-error' : undefined}
                    className="h-11 w-28 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setCaptcha({
                        left: Math.floor(Math.random() * 8) + 2,
                        right: Math.floor(Math.random() * 8) + 2,
                      })
                      setCaptchaAnswer('')
                      setCaptchaError('')
                    }}
                    className="text-sm underline underline-offset-4"
                  >
                    {lang === 'es' ? 'Nueva operación' : 'New challenge'}
                  </button>
                </div>
                {captchaError && <p id="captcha-error" role="alert" className="mt-2 text-sm font-medium text-primary-foreground">{captchaError}</p>}
              </div>
              <Button type="submit" disabled={submitting} className="h-11 bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:col-span-2">
                {submitting
                  ? (lang === 'es' ? 'Enviando...' : 'Sending...')
                  : sent
                    ? (lang === 'es' ? 'Solicitud enviada' : 'Request sent')
                    : t.primaryCta}
                <ArrowRight />
              </Button>
              {submitError && <p role="alert" className="text-sm font-medium sm:col-span-2">{submitError}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div><a href="#inicio" className="flex items-center gap-2 font-bold"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span><span className="text-xl">amax<span className="text-primary">tech</span></span></a><p className="mt-4 max-w-xs text-sm text-muted-foreground">Wholesale Commerce Management Platform.</p></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Producto' : 'Product'}</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#plataforma">{lang === 'es' ? 'Plataforma' : 'Platform'}</a><a href="#industrias">{lang === 'es' ? 'Industrias' : 'Industries'}</a><a href={manualUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Manual' : 'Manual'}</a></div></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Comercial' : 'Sales'}</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#precios">{lang === 'es' ? 'Planes' : 'Plans'}</a><a href="#faq">FAQ</a><a href="#contacto">{lang === 'es' ? 'Solicitar demo' : 'Book a demo'}</a></div></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Contacto' : 'Contact'}</p><div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Mail />{salesEmail}</div></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 AmaxTech.</p><p>Catálogo, inventario, ventas y gestión comercial.</p></div>
      </footer>
    </main>
  )
}
