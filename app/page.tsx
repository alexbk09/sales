'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  Factory,
  Globe2,
  Languages,
  Mail,
  Menu,
  Moon,
  Package,
  ReceiptText,
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
    nav: ['Plataforma', 'Soluciones', 'Demo', 'Planes', 'Preguntas'],
    heroBadge: 'Wholesale Commerce Management Platform',
    heroTitle: 'Your Business. Your Inventory. One Platform.',
    heroSubtitle: 'Gestiona tus productos, tienda online, ventas y operaciones desde una sola plataforma.',
    primaryCta: 'Book a Free Demo',
    secondaryCta: 'Explore the Platform',
    problemTitle: 'De una vitrina a una operación conectada',
    problemText: 'AmaxTech conecta el catálogo digital, la tienda online, el inventario, las cotizaciones y los pedidos para que tu equipo trabaje con la misma información.',
  },
  en: {
    nav: ['Platform', 'Industries', 'Demo', 'Plans', 'FAQ'],
    heroBadge: 'Wholesale Commerce Management Platform',
    heroTitle: 'Your Business. Your Inventory. One Platform.',
    heroSubtitle: 'Manage your products, online store, sales and operations with one powerful business platform.',
    primaryCta: 'Book a Free Demo',
    secondaryCta: 'Explore the Platform',
    problemTitle: 'From a storefront to one connected operation',
    problemText: 'AmaxTech connects your digital catalog, online store, inventory, quotations and orders so your team works from the same information.',
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
    ['¿Puedo administrar una tienda online?', 'Sí. AmaxTech incluye un catálogo público, carrito de compras y solicitudes de compra según la configuración contratada.'],
    ['¿Puedo importar mis productos desde Excel?', 'Sí. Esta capacidad está disponible en los planes Business y superiores.'],
    ['¿Puedo gestionar múltiples almacenes?', 'El multi-almacén está disponible en el plan Professional y puede evaluarse en una implementación Enterprise.'],
    ['¿Puedo personalizar el sistema?', 'Sí, dentro de una implementación Enterprise o mediante alcances acordados específicamente antes de comenzar.'],
    ['¿Cómo funciona la implementación?', 'Se configura la empresa, se carga o importa el catálogo, se define el inventario y la tienda, y luego se activa la operación.'],
    ['¿Necesito conocimientos técnicos?', 'No. La administración está diseñada para operar desde el navegador, con acompañamiento durante la puesta en marcha.'],
    ['¿Puedo solicitar una demostración?', 'Sí. Puedes completar el formulario y se abrirá una solicitud preparada para enviarla por correo a ventas@amaxtech.com.'],
    ['¿Qué sucede con mis datos?', 'El alcance de residencia, respaldos, exportación y conservación debe confirmarse contractualmente antes de contratar.'],
    ['¿Qué incluye el soporte?', 'Starter y Business incluyen soporte estándar; Professional ofrece soporte prioritario. Enterprise define el acuerdo según el alcance.'],
    ['¿Puedo cambiar de plan?', 'Sí. Los cambios deben revisarse con el equipo comercial según las funciones habilitadas y las condiciones del servicio.'],
  ],
  [
    ['What types of companies can use AmaxTech?', 'Businesses that sell physical products, such as distributors, wholesalers, hardware stores and catalog-based retailers.'],
    ['Can I manage an online store?', 'Yes. AmaxTech includes a public catalog, shopping cart and purchase requests according to the contracted configuration.'],
    ['Can I import products from Excel?', 'Yes. This capability is available in the Business plan and above.'],
    ['Can I manage multiple warehouses?', 'Multi-warehouse is available in the Professional plan and can be evaluated for an Enterprise implementation.'],
    ['Can I customize the system?', 'Yes, through an Enterprise implementation or a scope agreed before the project begins.'],
    ['How does implementation work?', 'We configure the company, upload or import the catalog, define inventory and the store, and then activate operations.'],
    ['Do I need technical knowledge?', 'No. Administration works in a browser, with guidance during setup and training.'],
    ['Can I request a demonstration?', 'Yes. Complete the form and your email application will open with a request prepared for ventas@amaxtech.com.'],
    ['What happens to my data?', 'Data location, backups, export and retention terms must be confirmed contractually before contracting.'],
    ['What does support include?', 'Starter and Business include standard support; Professional includes priority support. Enterprise support follows the agreed scope.'],
    ['Can I change plans?', 'Yes. Changes are reviewed with sales according to enabled features and service terms.'],
  ],
]

const comparisonLabels = {
  es: ['Catálogo', 'Tienda online', 'Inventario', 'Productos y variantes', 'Gestión de clientes', 'Cotizaciones', 'Pedidos', 'Importación Excel', 'Reportes', 'Multi-almacén', 'Despachos y rutas', 'Cuentas por cobrar', 'Integraciones', 'Asistente IA', 'Soporte'],
  en: ['Catalog', 'Online store', 'Inventory', 'Products and variants', 'Customer management', 'Quotations', 'Orders', 'Excel import', 'Reports', 'Multi-warehouse', 'Dispatch and routes', 'Accounts receivable', 'Integrations', 'AI assistant', 'Support'],
}

const translateComparisonValue = (value: boolean | string, lang: 'es' | 'en') => {
  if (lang === 'es') return value
  const translations: Record<string, string> = {
    Básico: 'Basic',
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
  const [mailLink, setMailLink] = useState('')
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

  const submitLead = (event: React.FormEvent<HTMLFormElement>) => {
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
    const message = lang === 'es'
      ? `Hola AmaxTech, quiero solicitar una demostración.\n\nNombre: ${data.get('name')}\nEmpresa: ${data.get('company')}\nCorreo: ${data.get('email')}\nPaís: ${data.get('country')}\nTipo de negocio: ${data.get('business')}\nProductos aproximados: ${data.get('products')}\nNecesidad principal: ${data.get('need')}`
      : `Hello AmaxTech, I would like to book a demonstration.\n\nName: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nCountry: ${data.get('country')}\nBusiness type: ${data.get('business')}\nApproximate products: ${data.get('products')}\nMain need: ${data.get('need')}`
    setSent(true)
    const subject = lang === 'es' ? 'Solicitud de demostración de AmaxTech' : 'AmaxTech demonstration request'
    const link = `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    setMailLink(link)
    window.location.href = link
    setCaptchaAnswer('')
    setCaptcha({
      left: Math.floor(Math.random() * 8) + 2,
      right: Math.floor(Math.random() * 8) + 2,
    })
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
              {lang === 'es' ? <>Tu negocio. Tu inventario. <span className="text-primary">Una plataforma.</span></> : t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.heroSubtitle}</p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">{lang === 'es' ? 'Todo lo que necesita tu negocio basado en productos: vender, gestionar inventario y controlar operaciones.' : 'Everything your product-based business needs to sell, manage inventory and control operations.'}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><a href="#contacto">{t.primaryCta}<ArrowRight /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="#plataforma">{t.secondaryCta}</a></Button>
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
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{lang === 'es' ? 'Recorre la tienda, consulta productos y utiliza el flujo de solicitudes. En el panel podrás revisar administración, catálogo y operación.' : 'Browse the store, inspect products and try the purchase request flow. The administration demonstrates catalog and operational management.'}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild><a href={liveDemoUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Explore Live Demo' : 'Explore Live Demo'}<ArrowRight /></a></Button>
              <Button variant="outline" asChild><a href={manualUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Abrir manual' : 'Open manual'}</a></Button>
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
            lang === 'es' ? ['1', 'Configuramos', 'Definimos empresa, marca y alcance.'] : ['1', 'Configure', 'We define the company, brand and scope.'],
            lang === 'es' ? ['2', 'Importamos', 'Registramos o cargamos tus productos.'] : ['2', 'Import', 'We register or upload your products.'],
            lang === 'es' ? ['3', 'Organizamos', 'Configuramos inventario y catálogo.'] : ['3', 'Organize', 'We configure inventory and catalog.'],
            lang === 'es' ? ['4', 'Activamos', 'Publicamos tu tienda digital.'] : ['4', 'Activate', 'We launch your digital store.'],
            lang === 'es' ? ['5', 'Operamos', 'Comienzas a gestionar pedidos.'] : ['5', 'Operate', 'You start managing orders.'],
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
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{lang === 'es' ? 'Propuesta de lanzamiento: $49, $89 y $149 USD/mes. Enterprise se cotiza según alcance.' : 'Launch proposal: $49, $89 and $149 USD/month. Enterprise is quoted by scope.'}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {subscriptionPlans.map((plan) => (
              <article key={plan.name} className={`flex flex-col rounded-2xl border p-6 ${plan.popular ? 'border-primary bg-primary/10 shadow-lg shadow-primary/5' : 'border-border bg-card'}`}>
                {plan.popular && <span className="mb-5 self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{lang === 'es' ? 'Más popular' : 'Most Popular'}</span>}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-3xl font-semibold">{plan.price}{plan.period && <span className="text-sm font-normal text-muted-foreground"> {plan.period}</span>}</p>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">{plan.description[lang]}</p>
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
              ? 'Precios de lanzamiento sujetos a confirmación comercial. El alcance final, soporte e infraestructura se especifican en la propuesta contratada.'
              : 'Launch prices are subject to commercial confirmation. Final scope, support and infrastructure are specified in the contracted proposal.'}
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-medium text-primary">{lang === 'es' ? 'SUSCRIPCIÓN MENSUAL' : 'MONTHLY SUBSCRIPTION'}</p>
            <h2 className="mt-3 text-3xl font-semibold">{lang === 'es' ? 'Activa el plan y comienza la operación.' : 'Activate a plan and start operating.'}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{lang === 'es' ? 'Paga una suscripción según el nivel contratado y recibe soporte según el plan. Los alcances, infraestructura y condiciones finales deben confirmarse antes de contratar.' : 'Pay according to the contracted level and receive support defined by that plan. Scope, infrastructure and final terms are confirmed before contracting.'}</p>
          </article>
          <article className="rounded-3xl border border-accent/40 bg-accent/10 p-8">
            <p className="text-sm font-medium text-accent">{lang === 'es' ? 'LICENCIA DE USO E IMPLEMENTACIÓN' : 'LICENSE AND IMPLEMENTATION'}</p>
            <h2 className="mt-3 text-3xl font-semibold">{lang === 'es' ? 'Contrato adaptado a tu operación.' : 'A contract adapted to your operation.'}</h2>
            <p className="mt-5 font-mono text-4xl font-semibold text-accent">
              {licenseMode.initialPrice}
              <span className="font-sans text-sm font-medium text-muted-foreground">{lang === 'es' ? ' USD inicial' : ' USD initial'}</span>
            </p>
            <p className="mt-2 text-lg font-semibold">{licenseMode.maintenancePrice} USD <span className="text-sm font-normal text-muted-foreground">{licenseMode.period}</span></p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{lang === 'es' ? 'La modalidad puede incluir implementación, capacitación y mantenimiento acordados. No incluye propiedad del código ni una licencia perpetua salvo que un contrato específico confirme expresamente ese derecho.' : 'This model may include agreed implementation, training and maintenance. It does not include source-code ownership or a perpetual license unless a specific contract expressly grants that right.'}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
              {licenseMode.scope[lang].map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>)}
            </ul>
          </article>
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
              <p className="mt-4 leading-relaxed text-primary-foreground/75">{lang === 'es' ? 'Cuéntanos qué necesita tu operación. Al enviar, se abrirá tu aplicación de correo con la solicitud preparada para ventas@amaxtech.com.' : 'Tell us what your operation needs. On submit, your email application opens with the request prepared for ventas@amaxtech.com.'}</p>
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
              <Button type="submit" className="h-11 bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:col-span-2">
                {sent ? (lang === 'es' ? 'Solicitud preparada' : 'Request prepared') : t.primaryCta}<ArrowRight />
              </Button>
              {sent && mailLink && (
                <a href={mailLink} className="text-center text-xs underline underline-offset-4 sm:col-span-2">
                  {lang === 'es' ? 'Abrir nuevamente la solicitud por correo' : 'Open the email request again'}
                </a>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div><a href="#inicio" className="flex items-center gap-2 font-bold"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span><span className="text-xl">amax<span className="text-primary">tech</span></span></a><p className="mt-4 max-w-xs text-sm text-muted-foreground">Wholesale Commerce Management Platform.</p></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Producto' : 'Product'}</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#plataforma">{lang === 'es' ? 'Plataforma' : 'Platform'}</a><a href="#industrias">{lang === 'es' ? 'Industrias' : 'Industries'}</a><a href={manualUrl} target="_blank" rel="noreferrer">{lang === 'es' ? 'Manual' : 'Manual'}</a></div></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Comercial' : 'Sales'}</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#precios">{lang === 'es' ? 'Planes' : 'Plans'}</a><a href="#faq">FAQ</a><a href="#contacto">{lang === 'es' ? 'Solicitar demo' : 'Book a demo'}</a></div></div>
          <div><p className="text-sm font-semibold">{lang === 'es' ? 'Contacto' : 'Contact'}</p><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a className="flex items-center gap-2" href={`mailto:${salesEmail}`}><Mail />{salesEmail}</a></div></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 AmaxTech.</p><p>Catálogo, inventario, ventas y gestión comercial.</p></div>
      </footer>
      <a href={`mailto:${salesEmail}?subject=${encodeURIComponent(lang === 'es' ? 'Solicitud de demostración AmaxTech' : 'AmaxTech demonstration request')}`} aria-label="Contactar por correo" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:scale-105"><Mail /></a>
    </main>
  )
}
