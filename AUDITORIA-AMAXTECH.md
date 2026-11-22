# Auditoría y estado comercial de AmaxTech

## Diagnóstico inicial del repositorio

- Se construye sobre Next.js 16.3.3 y React 19.2.4, con Tailwind CSS 4 y componentes UI basados en Base UI.
- La aplicación utiliza App Router. La landing vive en `app/page.tsx`, la ruta de preguntas en `app/preguntas-frecuentes/page.tsx` y los estilos globales en `app/globals.css`.
- Los datos comerciales de planes y licencias están centralizados en `lib/pricing.ts`; el rediseño no altera su configuración ni presenta nuevos precios.
- El sitio dispone de capturas reales en `public/mockups/` y las usa para representar el panel, catálogo y demostración ilumaX.
- Existe selector de idioma español/inglés y tema claro/oscuro. Las traducciones están contenidas en los componentes, no en un sistema i18n externo.
- El único formulario comercial prepara un correo mediante `mailto:` y no persiste leads ni conecta con CRM/backend.
- No existen pruebas automatizadas configuradas en el repositorio.

## Problemas comerciales detectados y corregidos

- El hero anterior no seguía la propuesta exacta “Tu tienda. Tu operación. Todo conectado.” ni el posicionamiento de plataforma de gestión comercial.
- Faltaban bloques explícitos que relacionaran los problemas operativos con soluciones concretas.
- Las funcionalidades estaban resumidas y no mostraban claramente áreas comerciales, inventario y administración.
- El flujo de implementación no estaba expresado en los cinco pasos comerciales solicitados.
- La demostración ilumaX debía diferenciarse claramente de un cliente real y evitar atribuir resultados no verificables.
- Los metadatos SEO describían la plataforma principalmente como ecommerce; ahora priorizan distribuidores y mayoristas.

## Resumen técnico

- Framework: Next.js 16 con React 19 y Tailwind CSS 4.
- Landing principal: `app/page.tsx`.
- Página de FAQ: `app/preguntas-frecuentes/page.tsx`.
- Datos comerciales: `lib/pricing.ts`.
- Capturas reales: `public/mockups/`.
- El formulario no usa backend ni almacenamiento. Prepara un correo dirigido a `ventas@amaxtech.com`.
- El formulario incluye desafío matemático y campo oculto anti-bot. Es una protección frontal básica; no sustituye un CAPTCHA verificado por servidor.

## Cambios implementados

- Hero comercial bilingüe con propuesta de valor y capturas reales.
- Plataformas, industrias, demostración real, proceso de implementación y confianza.
- Cuatro planes: Starter, Business, Professional y Enterprise.
- Tabla comparativa responsive.
- Suscripción mensual y modalidad de licencia.
- FAQ bilingüe.
- Formulario completo de demostración por correo.
- Metadatos SEO, Open Graph y datos estructurados.
- Navegación móvil, tema claro/oscuro y selector de idioma.

## Información que requiere confirmación comercial

- Los precios $49, $89 y $149 USD son una propuesta de lanzamiento, no un precio contractual confirmado.
- Debe confirmarse qué integraciones están habilitadas en cada plan.
- El asistente IA solo debe presentarse como disponible si está habilitado para el plan correspondiente.
- Deben confirmarse contrato, soporte, infraestructura, residencia de datos, respaldos y retención.
- No se afirma propiedad del código ni licencia perpetua sin un contrato específico.

## Aspectos verificables

- Catálogo, tienda pública, carrito, solicitudes, productos, variantes, inventario, cotizaciones y roles aparecen documentados en la demostración/manual.
- La importación Excel está asignada a planes Business y superiores.
- Multi-almacén, despachos y rutas están asignados a Professional y Enterprise.
- El sitio no promete cifrado específico, disponibilidad 24/7, respaldos diarios ni aislamiento multiempresa.

## Resultados de validación

- Build de producción: aprobado.
- Verificación TypeScript: aprobada.
- Rutas compiladas: `/`, `/preguntas-frecuentes` y `/404`.
- Pruebas automatizadas: no existen pruebas configuradas en el repositorio.
