'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronRight, ShieldCheck, Zap } from 'lucide-react'

const sections = [
  ['objeto', 'Objeto del servicio'],
  ['planes', 'Planes y precios'],
  ['implementacion', 'Implementación y puesta en marcha'],
  ['mensualidad', 'Mensualidad y servicios incluidos'],
  ['infraestructura', 'Administración de infraestructura'],
  ['dominio', 'Dominio personalizado'],
  ['soporte', 'Soporte técnico'],
  ['mantenimiento', 'Mantenimiento y actualizaciones'],
  ['datos', 'Datos y privacidad'],
  ['proteccion', 'Protección de la información'],
  ['integraciones', 'Integraciones y terceros'],
  ['responsabilidades', 'Responsabilidades del cliente'],
  ['adicionales', 'Servicios adicionales'],
  ['pagos', 'Facturación y pagos'],
  ['vigencia', 'Vigencia y cancelación'],
  ['exportacion', 'Exportación y finalización'],
  ['cambios', 'Actualización de condiciones'],
  ['contratacion', 'Aceptación y contratación'],
] as const

export default function CondicionesDelServicioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap /></span>
            <span className="text-xl">amax<span className="text-primary">tech</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft /> Volver al inicio
          </Link>
        </div>
      </header>

      <section className="border-b border-border px-5 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck /> Condiciones comerciales y operativas
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Condiciones del Servicio</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Conoce las condiciones comerciales, técnicas y operativas de AmaxTech. Queremos que tengas claridad sobre lo que contratas, qué incluye tu servicio y cómo trabajamos.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: noviembre de 2026.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-20">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-sm font-semibold text-primary">Contenido</p>
          <nav className="mt-5 grid gap-1" aria-label="Índice de condiciones del servicio">
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground">
                <ChevronRight className="size-3.5" /> {label}
              </a>
            ))}
            <a href="#contacto" className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground">
              <ChevronRight className="size-3.5" /> Contacto
            </a>
          </nav>
        </aside>

        <article className="min-w-0 space-y-12">
          <section id="objeto" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">¿Qué es AmaxTech?</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>AmaxTech ofrece una plataforma comercial y administrativa dirigida a tiendas, distribuidores, mayoristas y empresas que necesitan gestionar sus productos, inventario, clientes, pedidos y operaciones comerciales.</p>
              <p>El servicio comprende la implementación, configuración, alojamiento administrado, mantenimiento técnico y soporte de una instalación independiente de la plataforma para cada cliente, conforme al plan contratado.</p>
              <p>Las funcionalidades disponibles dependerán del plan seleccionado y de los módulos efectivamente habilitados en cada instalación.</p>
            </div>
          </section>

          <section id="planes" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Planes y precios</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['STARTER', '$249 USD', '$129 USD'],
                ['BUSINESS', '$399 USD', '$219 USD'],
                ['PROFESSIONAL', '$599 USD', '$349 USD'],
                ['ENTERPRISE', 'desde $899 USD', 'desde $499 USD'],
              ].map(([name, implementation, monthly]) => (
                <div key={name} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">Implementación: <span className="font-semibold text-foreground">{implementation}</span></p>
                  <p className="mt-2 text-sm text-muted-foreground">Mensualidad: <span className="font-semibold text-foreground">{monthly}</span></p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>Los precios se expresan en dólares estadounidenses (USD). El importe de implementación se paga una sola vez al iniciar el servicio. La mensualidad es recurrente y se paga por adelantado.</p>
              <p>El plan contratado determina las funcionalidades disponibles, la capacidad de usuarios y las horas de soporte incluidas.</p>
              <p>Para Enterprise, el alcance definitivo, precio y condiciones particulares se establecerán en una propuesta comercial específica. Los impuestos que legalmente correspondan se detallarán en la cotización o documento comercial aplicable.</p>
            </div>
          </section>

          <section id="implementacion" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">¿Qué incluye la implementación?</h2>
            <ul className="mt-5 grid gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Creación y configuración de la instalación independiente.',
                'Preparación de la base de datos.',
                'Configuración inicial de la plataforma.',
                'Habilitación de los módulos incluidos en el plan.',
                'Configuración del dominio proporcionado por el cliente.',
                'Configuración inicial de los parámetros comerciales acordados.',
                'Orientación y capacitación inicial.',
                'Verificación de funcionamiento antes de la entrega.',
              ].map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>El tiempo estimado de implementación es de un día laborable, contado desde que AmaxTech recibe el pago y dispone de todos los accesos, credenciales, información comercial, catálogo y datos necesarios.</p>
              <p>Este plazo es estimado y puede variar según la complejidad, cantidad de información, calidad de los archivos y alcance de la configuración solicitada. Los trabajos que excedan el alcance inicial se comunicarán y cotizarán por separado.</p>
            </div>
          </section>

          <section id="mensualidad" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">¿Qué incluye la mensualidad?</h2>
            <div className="mt-5 grid gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Acceso a la plataforma durante la vigencia del servicio.',
                'Administración de la infraestructura técnica por AmaxTech.',
                'Alojamiento de la instalación contratada.',
                'Mantenimiento técnico de la plataforma.',
                'Atención de incidencias relacionadas con el servicio.',
                'Soporte técnico dentro de los límites del plan.',
                'Actualizaciones generales que correspondan a la versión y modalidad contratada.',
              ].map((item) => <p key={item}>• {item}</p>)}
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">La infraestructura técnica es administrada por AmaxTech y no requiere que el cliente contrate servidores o bases de datos por separado. La mensualidad no incluye automáticamente desarrollos personalizados, integraciones externas, ampliaciones de alcance ni servicios adicionales.</p>
          </section>

          <section id="infraestructura" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Administración de infraestructura</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>AmaxTech administra las cuentas y proyectos técnicos utilizados para prestar el servicio, incluyendo los entornos de alojamiento y bases de datos. Cada cliente dispone de una instalación y una base de datos independientes.</p>
              <p>La administración de infraestructura por parte de AmaxTech no significa que AmaxTech sea propietario de los datos comerciales del cliente. AmaxTech será responsable de administrar técnicamente los recursos contratados mientras el servicio permanezca activo.</p>
              <p>La continuidad del servicio depende también de la disponibilidad de los proveedores tecnológicos externos y de las condiciones de sus servicios. No se promete disponibilidad ininterrumpida ni un porcentaje de uptime garantizado, salvo que exista un acuerdo de nivel de servicio firmado expresamente.</p>
            </div>
          </section>

          <section id="dominio" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Dominio de tu empresa</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>El dominio personalizado debe ser contratado y pagado por el cliente. El cliente conserva la titularidad y responsabilidad económica del registro y renovación del dominio.</p>
              <p>AmaxTech realizará la configuración DNS y los ajustes técnicos necesarios para conectar el dominio con la plataforma. El cliente debe proporcionar acceso o realizar las acciones necesarias para permitir dicha configuración.</p>
              <p>La renovación del dominio no está incluida en la mensualidad de AmaxTech.</p>
            </div>
          </section>

          <section id="soporte" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Soporte incluido por plan</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Starter: hasta 1 hora mensual.', 'Business: hasta 2 horas mensuales.', 'Professional: hasta 4 horas mensuales.', 'Enterprise: según acuerdo particular.'].map((item) => <p key={item} className="rounded-xl border border-border bg-card p-4 text-sm">{item}</p>)}
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Incluye</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>• Consultas sobre utilización de las funcionalidades existentes.</li>
                  <li>• Atención de incidencias técnicas.</li>
                  <li>• Orientación de configuración básica.</li>
                  <li>• Ayuda relacionada con el funcionamiento de la plataforma.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">No contempla</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>• Desarrollo de nuevas funcionalidades.</li>
                  <li>• Modificaciones estructurales e integraciones especiales.</li>
                  <li>• Migraciones complejas o carga manual masiva.</li>
                  <li>• Rediseños personalizados y capacitación adicional fuera del alcance.</li>
                </ul>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">Las solicitudes adicionales serán evaluadas y cotizadas previamente. Las horas incluidas representan un límite mensual de atención y no son acumulables, salvo acuerdo escrito diferente. El horario y canal de atención serán comunicados al cliente durante la contratación.</p>
          </section>

          <section id="mantenimiento" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Mantenimiento técnico</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>AmaxTech realiza labores de mantenimiento técnico para conservar el funcionamiento de las instalaciones administradas. Las actualizaciones generales se aplicarán de acuerdo con la versión, compatibilidad y condiciones técnicas de cada instalación.</p>
              <p>Algunas tareas de mantenimiento pueden requerir interrupciones temporales del servicio. Cuando una intervención planificada pueda afectar significativamente el acceso, AmaxTech procurará comunicarlo previamente.</p>
              <p>Las nuevas funcionalidades o modificaciones particulares no se consideran mantenimiento general y podrán cotizarse por separado.</p>
            </div>
          </section>

          <section id="datos" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Tus datos comerciales te pertenecen</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>Los datos comerciales incorporados o generados por el cliente mediante AmaxTech, incluyendo productos, imágenes proporcionadas, clientes, pedidos, inventario y registros operativos, pertenecen al cliente o a sus respectivos titulares.</p>
              <p>AmaxTech administra y procesa técnicamente estos datos únicamente en la medida necesaria para prestar el servicio, conforme a las instrucciones y condiciones acordadas con el cliente. El cliente es responsable de que los datos incorporados sean legítimos, exactos y cuente con las autorizaciones necesarias.</p>
              <p>AmaxTech aplicará medidas técnicas y organizativas razonables para proteger el acceso a la información y limitarlo a las personas autorizadas.</p>
              <p>La información no se utilizará para fines comerciales propios ni se divulgará a terceros ajenos a la prestación del servicio, salvo autorización, obligación legal o necesidad técnica legítima relacionada con proveedores que participan en su prestación.</p>
            </div>
          </section>

          <section id="proteccion" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Protección de la información</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>AmaxTech administra los recursos técnicos utilizados por cada instalación y aplica las medidas de protección y respaldo que estén efectivamente configuradas para el servicio.</p>
              <p>El alcance, frecuencia, retención y procedimiento de recuperación de copias de seguridad deberán estar definidos en la documentación operativa o en un acuerdo específico.</p>
              <p>No se promete una frecuencia de respaldo, retención o restauración garantizada que no haya sido implementada y verificada. El cliente puede solicitar información sobre los procedimientos de respaldo aplicables a su instalación.</p>
            </div>
          </section>

          <section id="integraciones" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Integraciones y servicios de terceros</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>AmaxTech puede incorporar enlaces de contacto y acciones que permitan iniciar o continuar conversaciones mediante WhatsApp. Estos enlaces no equivalen a una integración automatizada con WhatsApp Business API.</p>
              <p>Las funciones de automatización de mensajes, notificaciones server-side, mensajería masiva o servicios externos no se consideran incluidas, salvo contratación expresa.</p>
              <p>El funcionamiento de servicios externos depende también de sus propios proveedores, políticas y disponibilidad.</p>
            </div>
          </section>

          <section id="responsabilidades" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Responsabilidades de tu empresa</h2>
            <div className="mt-5 grid gap-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Proporcionar información correcta y actualizada.',
                'Entregar los archivos y datos necesarios para la implementación.',
                'Mantener la titularidad y renovación de su dominio.',
                'Proteger las credenciales de acceso de sus usuarios.',
                'Administrar adecuadamente los permisos internos.',
                'Utilizar la plataforma para actividades legales.',
                'No intentar vulnerar la seguridad o disponibilidad del servicio.',
                'Mantener actualizada la información comercial.',
                'Informar oportunamente sobre incidencias.',
                'Realizar los pagos en los plazos acordados.',
              ].map((item) => <p key={item}>• {item}</p>)}
            </div>
          </section>

          <section id="adicionales" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Crecimiento y personalizaciones</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>Si tu empresa necesita nuevas funcionalidades, integraciones, modificaciones especiales, migraciones o ampliaciones de capacidad, AmaxTech podrá evaluar y preparar una propuesta adicional.</p>
              <p>Ningún trabajo adicional será cobrado ni iniciado sin una cotización y aprobación previa del cliente. Las condiciones, plazos y costos de cada trabajo adicional serán comunicados antes de su ejecución.</p>
            </div>
          </section>

          <section id="pagos" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Condiciones de pago</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>La implementación se paga por adelantado antes de comenzar la configuración. La mensualidad se paga por adelantado según el periodo de facturación acordado.</p>
              <p>El cliente es responsable de realizar los pagos mediante los medios comunicados por AmaxTech. Cualquier ajuste de precio o cambio de plan deberá comunicarse y acordarse previamente.</p>
              <p>En caso de retraso o falta de pago, AmaxTech podrá notificar al cliente y aplicar las medidas de suspensión previstas en el contrato, respetando los procedimientos de comunicación y recuperación de información establecidos. No se aplican recargos, intereses ni penalizaciones que no hayan sido acordados.</p>
            </div>
          </section>

          <section id="vigencia" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Vigencia del servicio</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>La contratación contempla un periodo inicial de permanencia de tres meses. Durante este periodo, el cliente se compromete a mantener el servicio y realizar los pagos acordados.</p>
              <p>Una vez cumplido el periodo inicial, el servicio se renueva mensualmente. El cliente puede solicitar la cancelación mediante notificación escrita con al menos 30 días de anticipación.</p>
              <p>La fecha efectiva de finalización, pagos pendientes y obligaciones durante el periodo de aviso se determinarán conforme al contrato y la legislación aplicable. La cancelación no elimina el derecho del cliente a solicitar la exportación de sus datos comerciales conforme al procedimiento de salida.</p>
            </div>
          </section>

          <section id="exportacion" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">¿Qué ocurre cuando finaliza el servicio?</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>Cuando termina la relación comercial, el cliente puede solicitar la exportación de sus datos comerciales. AmaxTech coordinará la entrega de la información disponible en formatos técnicamente razonables y acordados.</p>
              <p>La exportación no incluye necesariamente código fuente, software propietario, herramientas internas, credenciales administrativas de infraestructura o componentes licenciados de AmaxTech.</p>
              <p>La entrega de datos se realizará conforme a los plazos, formatos y condiciones establecidos en el contrato. Una vez completado el proceso de salida y vencidos los plazos de conservación aplicables, AmaxTech podrá eliminar los datos de los entornos administrados, salvo aquellos que deban conservarse por obligación legal.</p>
            </div>
          </section>

          <section id="cambios" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Actualizaciones de estas condiciones</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">AmaxTech podrá actualizar estas condiciones para reflejar cambios operativos, técnicos o comerciales. Los cambios que afecten materialmente las condiciones contratadas serán comunicados al cliente y se aplicarán conforme al contrato y a la legislación aplicable. La versión vigente estará disponible en esta página con su fecha de actualización.</p>
          </section>

          <section id="contratacion" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight">Contrata con claridad y confianza</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">La contratación de AmaxTech se formalizará mediante una propuesta comercial, orden de servicio o contrato en el que se identificarán el plan, precio, alcance, condiciones particulares y fecha de inicio. La aceptación de estas condiciones no sustituye los acuerdos particulares que ambas partes deban formalizar por escrito.</p>
            <Link href="/#contacto" className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">
              Solicitar una propuesta comercial <ArrowRight />
            </Link>
          </section>

          <section id="contacto" className="scroll-mt-24 rounded-3xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight">¿Tienes dudas sobre estas condiciones?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Si necesitas aclarar algún aspecto antes de contratar, nuestro equipo comercial puede orientarte.</p>
            <Link href="/#contacto" className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground">
              Contactar con AmaxTech <ArrowRight />
            </Link>
          </section>
        </article>
      </section>

      <footer className="border-t border-border bg-card/40 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AmaxTech.</p>
          <Link href="/" className="hover:text-foreground">Volver al inicio</Link>
        </div>
      </footer>
    </main>
  )
}
