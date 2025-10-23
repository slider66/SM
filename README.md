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

Puesta en marcha
----------------
```bash
pnpm install
pnpm dev
```

La aplicacion queda disponible en `http://localhost:3000`. El servidor de Socket.IO escucha en `ws://localhost:3000/api/socketio`.

Persistencia opcional
---------------------
Si en el futuro se necesita almacenar datos, el esquema inicial se encuentra en `prisma/schema.prisma`. Configura un archivo `.env` con `DATABASE_URL` apuntando a `file:./db/custom.db` (o al origen deseado) y ejecuta `pnpm db:push` seguido de `pnpm db:generate` para habilitar Prisma Client.

Pruebas y calidad
-----------------
- `pnpm lint` valida el codigo con las reglas de ESLint.
- Actualmente no hay suites de pruebas automatizadas; se recomienda anadirlas segun evolucione el proyecto.
- Puedes habilitar analisis manual con herramientas como React Scan (`react-scan`) durante el desarrollo.

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
