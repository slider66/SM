KB Proyecto Merle.es 2025
=========================

Objetivos y alcance
-------------------
- **Objetivo principal:** lanzar una landing page corporativa para Suministros Merle que capte leads y redirija al canal de contacto comercial.
- **Metas secundarias:** reforzar el posicionamiento de la marca, mostrar la oferta industrial de ferralla y dejar preparada la base tecnica para futuras iteraciones (p. ej. captacion de datos, contenidos dinamicos).
- **En alcance actual:**
  - Desarrollo de una landing page responsive en Next.js 15 + React 19 + TypeScript.
  - Integracion de Tailwind CSS 4, componentes shadcn/ui y copy en castellano.
  - Servidor personalizado (`server.ts`) con Socket.IO listo para efectos en tiempo real (no imprescindible para la landing).
  - Configuracion inicial de Prisma (sin base de datos activa).
- **Fuera de alcance (Fase 2025):**
  - Sistemas de autenticacion o area privada de clientes.
  - E-commerce o tramitacion de pedidos en linea.
  - Integraciones con ERP/CRM o automatizaciones de marketing.
  - Localizacion multidioma o contenido generado dinamicamente.

Partes interesadas (stakeholders)
---------------------------------
- **Direccion comercial de Suministros Merle (patrocinador):** busca un canal directo de contacto y una imagen profesional para clientes B2B.
- **Equipo de marketing y comunicacion (cliente interno):** aporta copy, imagenes y define la narrativa de valor.
- **Equipo tecnico (desarrollo y devops):** responsable de la arquitectura, implementacion y despliegues; mantiene el repositorio y coordina cambios.
- **Equipo de atencion comercial:** necesita recibir solicitudes generadas por la landing (formularios, correo o telefono).
- **Usuarios finales (ingenierias, constructoras, responsables de compras):** esperan informacion clara sobre servicios, casos y vias de contacto.

Analisis y soluciones
---------------------
- **Framework web:** se evaluaron alternativas como Astro y un stack estatico puro. Se opto por Next.js 15 para mantener compatibilidad con React 19, disponer de App Router y dejar abierta la opcion de renderizado hibrido cuando se requieran datos en tiempo real.
- **Estilos y componentes:** se compararon Tailwind CSS 4 + shadcn/ui frente a CSS Modules o librerias comerciales. Tailwind/shadcn ofrece rapidez, consistencia de diseno y reutilizacion de componentes sin coste de licencias.
- **Back-end y datos:** Prisma queda configurado sobre SQLite (`db/custom.db`) para futuras integraciones. Al no existir necesidad de persistencia en la landing, la base de datos permanece inactiva.
- **Infraestructura:** el proyecto funciona con un servidor Node personalizado (`server.ts`) que expone la aplicacion Next.js y prepara Socket.IO. Esto permite evolucionar hacia secciones interactivas sin redisenar el deployment.
- **Requisitos de diseno considerados:** identidad de marca (paleta azul/metal), accesibilidad en dispositivos moviles, velocidad de carga, copy en castellano urbano y llamados claros a la accion (CTA).

Stack tecnologico
-----------------
- **Frontend:** Next.js 15 (App Router) con React 19, componentes cliente y servidor segun necesidad.
- **Lenguajes:** TypeScript 5 para toda la base de codigo; JSX/TSX para la interfaz.
- **Estilos:** Tailwind CSS 4 con tokens centralizados; utilidades de tailwind-merge y tailwindcss-animate para variantes y animaciones.
- **Componentes UI:** shadcn/ui y adaptaciones propias en `src/components`.
- **Estado y datos:** React Query (`@tanstack/react-query`) disponible para peticiones futuras; Zustand para estado global ligero.
- **Servidor:** Node.js 20 ejecutando `server.ts` con soporte para Socket.IO (`socket.io` y `socket.io-client`).
- **Build tooling:** pnpm 10, `tsx` para ejecucion TS en desarrollo, ESLint 9 con `eslint-config-next`.
- **Persistencia opcional:** Prisma 6 configurado para SQLite local; ampliable a otros proveedores via `DATABASE_URL`.

Buenas practicas y estandarizacion
----------------------------------
- **Estructura de carpetas:** seguir la jerarquia existente (`src/app`, `src/components`, `src/hooks`, `src/lib`, `public`, `prisma`). Nuevos modulos deben ubicarse en la carpeta que corresponda a su responsabilidad primaria.
- **Convenciones de nombres:**
  - Archivos y carpetas en kebab-case (`protected-mail-link.tsx`, `landing-hero`).
  - Componentes React y hooks personalizados en PascalCase y prefijos claros (`ProtectedMailLink`, `useLeadCapture`).
  - Utilidades y helpers en camelCase (`formatPhone`, `buildCtaPayload`).
  - Variables y constantes en camelCase; constantes globales con mayusculas cuando apliquen (`CTA_TARGET_EMAIL`).
- **Documentacion en codigo:** comentarios breves solo donde el flujo no sea evidente; preferir claridad en el nombrado versus comentarios extensos.
- **Control de calidad:** ejecutar `pnpm lint` antes de abrir PR; integrar pruebas unitarias cuando se agreguen logicas complejas (estructura a definir).
- **Accesibilidad y SEO:** usar roles/alt/aria apropiados, etiquetas semanticas y CTAs claros; optimizar imagenes colocadas en `public`.
- **Versionado:** commits descriptivos en ingles o espanol consistente; incluir descripciones breves de alcance en los PR.
- **Colaboracion con IAs y equipo:** mantener README y KB actualizados; explicar decisiones en PRs complejos; usar descripciones estructuradas (contexto, cambios, pruebas) para que cualquier colaborador (humano o IA) pueda continuar el trabajo.

Plan de trabajo
---------------
- **Estructura de tareas (resumen):**
  - Definir narrativa y objetivos (marketing + direccion).
  - Disenar wireframes y estructura de secciones.
  - Preparar componentes UI (shadcn/ui + tokens Tailwind).
  - Implementar landing y hero principal en `src/app/page.tsx`.
  - Conectar CTA con correo protegido (`ProtectedMailLink`) y telefonos.
  - QA responsive y pruebas de accesibilidad basicas.
  - Ajustes finales de contenido, subida a entorno productivo.
- **Cronograma estimado (2025 Q4):**

  | Semana | Actividad clave                              | Responsable principal        |
  | ------ | -------------------------------------------- | ---------------------------- |
  | 1      | Kickoff, definicion de alcance, recopilacion de contenido | Marketing + Direccion |
  | 2      | Diseno visual y preparacion de componentes UI | Diseno + Frontend            |
  | 3      | Desarrollo de landing y configuracion de servidor | Frontend                     |
  | 4      | QA, contenido final y preparacion de despliegue | Frontend + Marketing         |
  | 5      | Lanzamiento y monitoreo inicial              | Frontend + Comercial         |

- **Recursos disponibles:**
  - 1 desarrollador frontend principal.
  - 1 disenador/marketing responsable de copy e identidad.
  - Infraestructura: repositorio Git, pnpm, hosting Node (pendiente de definir proveedor).
- **Presupuesto:** esfuerzo interno; no se han asignado costes directos fuera de horas de equipo.
- **Actividades planeadas a futuro:** evaluacion de idiomas adicionales, integracion con CRM, creacion de seccion de casos de exito y automatizacion de formularios.

Entregables
-----------
- Landing page responsive (`src/app/page.tsx` y componentes asociados).
- Activos graficos optimizados en `public/`.
- Configuracion de estilos (`tailwind.config.ts`, `src/app/globals.css`).
- Servidor Node listo para despliegue (`server.ts`).
- Documentacion tecnica: `README.md`, `PROJECT_KB.md`, estructura de scripts en `package.json`.
- Templates de componentes reutilizables en `src/components/`.
- Scripts auxiliares para futura persistencia (`pnpm db:*`).

Riesgos y limitaciones
----------------------
- **Dependencia de contenido:** cambios tardios en copy o imagenes pueden afectar plazos.
- **Ausencia de base de datos:** cualquier futura funcionalidad que requiera almacenamiento demandara habilitar Prisma y ajustar despliegues.
- **Codificacion y localizacion:** el repositorio opera en ASCII para evitar problemas de encoding en diferentes entornos; anadir idiomas o caracteres especiales requiere revision.
- **SEO y analytics:** si no se anaden integraciones (p. ej. Google Analytics) se limita la medicion de conversiones.
- **Escalabilidad:** el servidor personalizado facilita evoluciones, pero un aumento drastico de trafico requerira revisar caching, CDN y balanceo.
- **Disponibilidad de recursos:** equipo reducido; ausencias prolongadas pueden retrasar iteraciones.

Documentacion de apoyo
----------------------
- `README.md`: instrucciones de puesta en marcha, despliegue y persistencia opcional.
- `PROJECT_KB.md` (este documento): resumen operativo del proyecto.
- `server.ts`: servidor personalizado que integra Socket.IO.
- `src/app/page.tsx`: composicion principal de la landing.
- `src/components/`: biblioteca de componentes (incluye adaptaciones de shadcn/ui).
- `public/hero.jpg` y resto de imagenes: recursos visuales para secciones hero y galerias.
- `prisma/schema.prisma`: esquema inicial para habilitar base de datos cuando sea requerido.
- Referencias externas: documentacion oficial de Next.js 15, Tailwind CSS 4, shadcn/ui y Prisma.

Procesos
--------
- **Solicitud de cambios de alcance:**
  1. Registrar un issue o ticket con la descripcion del cambio, motivacion y prioridad.
  2. Evaluar impacto en diseno, contenido y esfuerzo tecnico.
  3. Direccion comercial valida si el cambio alinea con objetivos de negocio.
  4. El equipo tecnico estima esfuerzo y ajusta el cronograma.
  5. Una vez aprobado, planificar la tarea en la siguiente iteracion y actualizar esta KB si implica nuevos entregables, riesgos o dependencias.
- **Control de versiones:** pull requests obligatorias contra `main`, revisadas por otro miembro del equipo; integrar `pnpm lint` antes de fusionar.
- **Despliegues:** build con `pnpm build` y lanzamiento via `pnpm start` en el entorno elegido; documentar cambios relevantes en las notas de despliegue.



