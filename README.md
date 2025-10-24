Merle.es 2025
=============

Proyecto web para Suministros Merle, construido con Next.js 15, React 19 y TypeScript. La interfaz se apoya en Tailwind CSS 4 y el catalogo de componentes de shadcn/ui. Actualmente es una landing page orientada a captar contactos, por lo que no consume base de datos en tiempo de ejecucion; Prisma queda disponible unicamente como opcion futura.

Requisitos previos
------------------
- Node.js 20 LTS (o superior) y pnpm 10, segun `packageManager` en `package.json`.
- Git instalado para gestionar el repositorio.
- (Opcional) SQLite 3 y la variable `DATABASE_URL` si en el futuro se decide activar Prisma.

Caracteristicas principales
--------------------------
- App Router de Next.js con diseno responsive y contenido en castellano.
- Tailwind CSS 4 con tokens centralizados en `src/app/globals.css`.
- Servidor personalizado en `server.ts` que integra Socket.IO y sirve la aplicacion.
- Ejemplo de cliente WebSocket en `examples/websocket/page.tsx`.
- Configuracion de Prisma incluida como base para futuras integraciones de datos (no usada en la landing actual).

Scripts disponibles
-------------------
- `pnpm dev`: arranca el servidor personalizado con `tsx` y `nodemon`.
- `pnpm build`: genera el build de produccion de Next.js.
- `pnpm start`: inicia el servidor Node en modo produccion usando `tsx`.
- `pnpm lint`: ejecuta la configuracion de ESLint incluida en el proyecto.
- Scripts Prisma (`pnpm db:push`, `pnpm db:migrate`, `pnpm db:reset`) listos para activarse si se anade persistencia.

Estructura del proyecto
-----------------------
- `src/app`: paginas y rutas de la App Router.
- `src/components`: componentes reutilizables, incluidos los de shadcn/ui.
- `src/hooks`: hooks personalizados.
- `src/lib`: utilidades, Prisma Client y logica de sockets.
- `prisma`: esquema y configuracion de la base de datos.
- `public`: recursos estaticos (logos, imagenes promocionales).

Estructura de la web
--------------------
- Landing principal (`/`, `src/app/page.tsx`): seccion hero con CTA a contacto, bloques de productos destacados, servicios y proceso de trabajo, indicadores de confianza (estadisticas y testimonios cortos) y un cierre con CTA de contacto apoyado en `ProtectedMailLink`.
- Centro de formacion (`/formacion`, `src/app/formacion/page.tsx`): biblioteca de 17 tutoriales estructurados por nivel, rutas de aprendizaje y recursos descargables para responsables de obra.
- Guia de recomendaciones (`/recomendaciones`, `src/app/recomendaciones/page.tsx`): guia editorial con tabla de codigos de corrugado, listado de fabricantes acreditados y buenas practicas para asegurar la trazabilidad del acero.
- Endpoint de salud (`/api/health`, `src/app/api/health/route.ts`): responde `{"message": "Good!"}` para comprobar el estado del despliegue.
- Ejemplo de cliente WebSocket (`examples/websocket/page.tsx`): pagina auxiliar que ilustra la conexion en tiempo real contra `/api/socketio`.

Puesta en marcha (Windows con pwsh)
-----------------------------------
1. Abre una terminal PowerShell moderna (`pwsh`) y navega al directorio del proyecto: `Set-Location C:\Proyectos\SM`.
2. (Opcional) Verifica que las versiones instaladas cumplan con los requisitos: `node -v` y `pnpm -v`.
3. Instala las dependencias con `pnpm install`.
4. Inicia el entorno de desarrollo ejecutando `pnpm dev`. El script lanza `nodemon`, que recompila Next.js y reinicia `server.ts` cuando detecta cambios en archivos `.ts` o `.tsx`.
5. Conserva la terminal abierta mientras desarrollas. Usa `Ctrl+C` para detener el proceso cuando termines.

La aplicacion queda disponible en `http://localhost:3000`. El servidor de Socket.IO escucha en `ws://localhost:3000/api/socketio`. Si necesitas declarar variables locales (p. ej. `DATABASE_URL`), hazlo antes de iniciar el comando con `$env:DATABASE_URL = 'valor'`.

Persistencia opcional
---------------------
Si en el futuro se necesita almacenar datos, el esquema inicial se encuentra en `prisma/schema.prisma`. Configura un archivo `.env` con `DATABASE_URL` apuntando a `file:./db/custom.db` (o al origen deseado) y ejecuta `pnpm db:push` seguido de `pnpm db:generate` para habilitar Prisma Client.

Pruebas y calidad
-----------------
- `pnpm lint` valida el codigo con las reglas de ESLint.
- Actualmente no hay suites de pruebas automatizadas; se recomienda anadirlas segun evolucione el proyecto.
- Puedes habilitar analisis manual con herramientas como React Scan (`react-scan`) durante el desarrollo.

Mejoras prioritarias
--------------------
- **SEO basico (prioridad alta)**: genera `app/sitemap.ts` y `app/robots.ts` usando la API de Next para publicar `sitemap.xml` y `robots.txt`; define `title`, `description` y campos Open Graph en cada pagina a traves del objeto `metadata`; conecta el dominio con Google Search Console para monitorizar impresiones y palabras clave clave para la captacion.
- **Analytics (prioridad alta)**: integra una plataforma (Google Analytics 4 o Plausible) mediante un componente de layout que cargue el script de seguimiento; habilita eventos de conversion para el CTA principal y el contacto por correo, y revisa sesion, retencion y procedencia del trafico para optimizar contenidos.
- **Formulario de contacto funcional (prioridad alta)**: garantiza la entrega de correos del CTA principal, muestra confirmacion visible al usuario tras enviarlo y protege el endpoint con un honeypot simple o reCAPTCHA para limitar spam y bots.
- **Performance basico (prioridad media)**: optimiza imagenes con `next/image` en formatos WebP o AVIF y tamanos acordes a cada breakpoint, ejecuta auditorias Lighthouse en mobile y desktop, y apoya el despliegue en una CDN (la propia Vercel u otra) si se espera trafico internacional.
- **Backup de contenido (prioridad media)**: programa copias de seguridad periodicas de los 17 tutoriales y guias para evitar perdida de conocimiento; almacena los exports en un repositorio seguro (S3, Drive corporativo o Git privado) junto a un registro de actualizaciones.
- **Actualizaciones de seguridad (prioridad media)**: revisa trimestralmente las versiones de Next.js, dependencias de React y librerias de UI; aplica parches con herramientas como `pnpm outdated` y `pnpm up --latest` y valida que no introduzcan regresiones antes de desplegar.

Despliegue
----------
1. Ejecuta `pnpm build` para generar los artefactos de produccion.
2. Inicia el servidor con `pnpm start`. Si usas un proxy inverso, habilita el soporte de WebSockets para Socket.IO.
3. (Opcional) Configura `DATABASE_URL` y sincroniza Prisma solo si la aplicacion pasa a depender de una base de datos.

Contacto y soporte
------------------
Para dudas o nuevas funcionalidades, revisa `src/app/page.tsx`, los componentes auxiliares en `src/components` o abre un hilo con el equipo responsable.

Contribuir
----------
1. Crea una rama descriptiva a partir de `main`.
2. Asegurate de que `pnpm lint` no reporta errores.
3. Propon tus cambios mediante una Pull Request, comentando cualquier migracion de base de datos que acompane al trabajo.

Licencia
--------
Proyecto de uso interno para Suministros Merle. Consulta con el equipo legal antes de compartirlo fuera de la organizacion.
