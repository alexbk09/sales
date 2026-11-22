export type Plan = {
  name: string
  price: string
  period: string
  implementation: string
  description: { es: string; en: string }
  popular?: boolean
  features: { es: string[]; en: string[] }
}

export const subscriptionPlans: Plan[] = [
  {
    name: 'Starter',
    price: '$129',
    period: '/mes',
    implementation: '$249 USD',
    description: { es: 'Digitaliza tu catálogo y comienza a recibir pedidos.', en: 'Digitize your catalog and start receiving orders.' },
    features: {
      es: ['Plataforma comercial independiente', 'Catálogo digital de productos', 'Categorías y marcas', 'Fichas con imágenes y precios', 'Página comercial', 'Solicitudes de compra', 'Gestión básica de pedidos', 'Enlaces a WhatsApp', 'Panel administrativo', 'Hasta 2 usuarios', 'Configuración y capacitación inicial', 'Infraestructura administrada', 'Soporte técnico: 1 hora mensual'],
      en: ['Independent commerce platform', 'Digital product catalog', 'Categories and brands', 'Product sheets with images and prices', 'Commercial page', 'Purchase requests', 'Basic order management', 'WhatsApp contact links', 'Administration panel', 'Up to 2 users', 'Initial setup and training', 'Managed infrastructure', 'Technical support: 1 hour monthly'],
    },
  },
  {
    name: 'Business',
    price: '$219',
    period: '/mes',
    implementation: '$399 USD',
    description: { es: 'Controla productos, inventario y pedidos en una sola plataforma.', en: 'Control products, inventory and orders in one platform.' },
    popular: true,
    features: {
      es: ['Todo lo incluido en Starter', 'Gestión de inventario y stock', 'Control de existencias', 'Variantes de productos', 'Gestión de proveedores', 'Importación masiva desde Excel', 'Gestión de clientes', 'Pedidos y seguimiento', 'Usuarios y roles', 'Herramientas de precios', 'Configuración comercial personalizada', 'Hasta 5 usuarios', 'Infraestructura administrada', 'Soporte técnico: 2 horas mensuales'],
      en: ['Everything in Starter', 'Inventory and stock management', 'Stock control', 'Product variants', 'Supplier management', 'Bulk Excel import', 'Customer management', 'Orders and follow-up', 'Users and roles', 'Price management tools', 'Customized commercial setup', 'Up to 5 users', 'Managed infrastructure', 'Technical support: 2 hours monthly'],
    },
  },
  {
    name: 'Professional',
    price: '$349',
    period: '/mes',
    implementation: '$599 USD',
    description: { es: 'Organiza inventario, logística, pagos y administración.', en: 'Organize inventory, logistics, payments and administration.' },
    features: {
      es: ['Todo lo incluido en Business', 'Gestión de múltiples almacenes', 'Despachos y rutas', 'Zonas de envío', 'Cuentas por cobrar', 'Registro y seguimiento de pagos', 'Conciliación bancaria', 'Reportes comerciales y operativos', 'Herramientas avanzadas de administración', 'Hasta 10 usuarios', 'Configuración avanzada', 'Infraestructura administrada', 'Soporte técnico: 4 horas mensuales'],
      en: ['Everything in Business', 'Multiple warehouse management', 'Dispatches and routes', 'Shipping zones', 'Accounts receivable', 'Payment registration and follow-up', 'Bank reconciliation', 'Commercial and operational reports', 'Advanced administration tools', 'Up to 10 users', 'Advanced configuration', 'Managed infrastructure', 'Technical support: 4 hours monthly'],
    },
  },
  {
    name: 'Enterprise',
    price: 'Desde $499',
    period: '/mes',
    implementation: 'Desde $899 USD',
    description: { es: 'Configuración adaptada a operaciones complejas y necesidades particulares.', en: 'Configuration adapted to complex operations and specific needs.' },
    features: {
      es: ['Todo lo disponible en Professional', 'Configuración personalizada', 'Evaluación de requerimientos operativos', 'Módulos y procesos adicionales acordados', 'Capacidad ampliada de usuarios', 'Acompañamiento en la puesta en marcha', 'Capacitación personalizada', 'Infraestructura administrada', 'Soporte según contrato', 'Integraciones y desarrollos específicos cotizados'],
      en: ['Everything available in Professional', 'Custom configuration', 'Operational requirement assessment', 'Agreed additional modules and processes', 'Expanded user capacity', 'Launch support', 'Custom training', 'Managed infrastructure', 'Contract-defined support', 'Quoted integrations and custom development'],
    },
  },
]

export const licenseMode = {
  initialPrice: 'Pago único',
  maintenancePrice: 'Mensualidad',
  period: '',
  scope: {
    es: [
      'La implementación se paga una sola vez al iniciar el servicio.',
      'La mensualidad mantiene activa la instalación y los servicios contratados.',
      'El dominio personalizado se configura según el alcance del plan.',
      'Los servicios técnicos se administran sin que el cliente gestione servidores.',
      'Las integraciones y desarrollos específicos se cotizan por separado.',
    ],
    en: [
      'Implementation is paid once when the service begins.',
      'The monthly fee keeps the installation and contracted services active.',
      'The custom domain is configured according to the plan scope.',
      'Technical services are managed without the customer administering servers.',
      'Specific integrations and developments are quoted separately.',
    ],
  },
} as const

export const comparisonRows = [
  ['Instalación independiente', true, true, true, true],
  ['Catálogo digital', true, true, true, true],
  ['Página comercial', true, true, true, true],
  ['Solicitudes de compra', true, true, true, true],
  ['Gestión básica de pedidos', true, true, true, true],
  ['Inventario y stock', false, true, true, true],
  ['Variantes de productos', false, true, true, true],
  ['Importación Excel', false, true, true, true],
  ['Gestión de clientes', false, true, true, true],
  ['Multi-almacén', false, false, true, true],
  ['Despachos y rutas', false, false, true, true],
  ['Cuentas por cobrar y pagos', false, false, true, true],
  ['Conciliación bancaria', false, false, true, true],
  ['Reportes', false, 'Comerciales', 'Avanzados', 'Personalizados'],
  ['Usuarios administrativos', 'Hasta 2', 'Hasta 5', 'Hasta 10', 'Ampliada'],
  ['Soporte mensual', 'Hasta 1 hora', 'Hasta 2 horas', 'Hasta 4 horas', 'Según contrato'],
] as const
