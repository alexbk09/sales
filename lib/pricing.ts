export type Plan = {
  name: string
  price: string
  period: string
  description: { es: string; en: string }
  popular?: boolean
  features: { es: string[]; en: string[] }
}

export const subscriptionPlans: Plan[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mes',
    description: { es: 'Digitaliza el catálogo y comienza a controlar tu inventario.', en: 'Digitize your catalog and start controlling inventory.' },
    features: {
      es: ['Catálogo digital', 'Gestión de productos y variantes', 'Categorías y marcas', 'Inventario básico', 'Gestión de clientes', 'Solicitudes de compra', 'Panel administrativo', 'Soporte estándar'],
      en: ['Digital catalog', 'Product and variant management', 'Categories and brands', 'Basic inventory', 'Customer management', 'Purchase requests', 'Administration panel', 'Standard support'],
    },
  },
  {
    name: 'Business',
    price: '$89',
    period: '/mes',
    description: { es: 'Administra el ciclo comercial completo de tu operación.', en: 'Manage the complete commercial cycle of your operation.' },
    popular: true,
    features: {
      es: ['Todo lo incluido en Starter', 'Cotizaciones', 'Gestión de pedidos', 'Ajustes masivos de precios', 'Importación Excel', 'Reportes comerciales', 'Gestión de proveedores', 'Roles y permisos'],
      en: ['Everything in Starter', 'Quotations', 'Order management', 'Bulk price adjustments', 'Excel import', 'Commercial reports', 'Supplier management', 'Roles and permissions'],
    },
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/mes',
    description: { es: 'Para operaciones con inventarios y despachos más complejos.', en: 'For operations with complex inventory and dispatch management.' },
    features: {
      es: ['Todo lo incluido en Business', 'Multi-almacén', 'Inventario avanzado', 'Despachos y rutas', 'Zonas de envío', 'Cuentas por cobrar', 'Reportes financieros', 'Integraciones adicionales', 'Soporte prioritario'],
      en: ['Everything in Business', 'Multi-warehouse', 'Advanced inventory', 'Dispatch and routes', 'Shipping zones', 'Accounts receivable', 'Financial reports', 'Additional integrations', 'Priority support'],
    },
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: { es: 'Una implementación adaptada a procesos y infraestructura.', en: 'An implementation adapted to your processes and infrastructure.' },
    features: {
      es: ['Configuración personalizada', 'Implementación asistida', 'Integraciones especiales', 'Migración de datos', 'Capacitación', 'Personalización de procesos', 'Acuerdos de soporte', 'Infraestructura según necesidades'],
      en: ['Custom configuration', 'Assisted implementation', 'Special integrations', 'Data migration', 'Training', 'Process customization', 'Support agreements', 'Infrastructure according to requirements'],
    },
  },
]

export const licenseMode = {
  initialPrice: '$850',
  maintenancePrice: '$50',
  period: '/mes',
  scope: {
    es: [
      'Implementación y configuración acordadas.',
      'Actualizaciones y soporte definidos contractualmente.',
      'Infraestructura y alojamiento especificados en la propuesta.',
      'Personalizaciones y mantenimiento cotizados según alcance.',
      'Código fuente solo si se incluye expresamente en el contrato.',
    ],
    en: [
      'Agreed implementation and configuration.',
      'Updates and support defined contractually.',
      'Infrastructure and hosting specified in the proposal.',
      'Customizations and maintenance quoted by scope.',
      'Source code only if expressly included in the contract.',
    ],
  },
} as const

export const comparisonRows = [
  ['Catálogo', true, true, true, true],
  ['Tienda online', true, true, true, true],
  ['Inventario', 'Básico', 'Completo', 'Avanzado', 'Adaptado'],
  ['Productos y variantes', true, true, true, true],
  ['Gestión de clientes', true, true, true, true],
  ['Cotizaciones', false, true, true, true],
  ['Pedidos', false, true, true, true],
  ['Importación Excel', false, true, true, true],
  ['Reportes', false, 'Comerciales', 'Comerciales y financieros', 'Personalizados'],
  ['Multi-almacén', false, false, true, true],
  ['Despachos y rutas', false, false, true, true],
  ['Cuentas por cobrar', false, false, true, true],
  ['Integraciones', false, 'Disponibles', 'Adicionales', 'Especiales'],
  ['Asistente IA', false, false, 'Si está habilitado', 'Según alcance'],
  ['Soporte', 'Estándar', 'Estándar', 'Prioritario', 'Acuerdo dedicado'],
] as const
