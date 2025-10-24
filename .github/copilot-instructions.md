# Instrucciones para GitHub Copilot - Proyecto Merle.es

## Stack Tecnologico
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **UI**: shadcn/ui (Radix UI)
- **Backend**: Node.js con Socket.IO
- **Base de datos**: Prisma (preparado, no en uso)

## Reglas de Codigo

### TypeScript
- Siempre usar TypeScript, nunca JavaScript plano
- Nunca usar `any`, preferir `unknown` si es necesario
- Todas las funciones deben tener tipos de retorno explicitos
- Props de componentes siempre con interface
- Usar `type` para uniones y `interface` para objetos

```typescript
// OK
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{label}</button>
}

// NO
export function Button(props: any) {
  return <button>{props.label}</button>
}
```

### Componentes React
- Usar function components, no class components
- Preferir named exports sobre default exports
- Hooks en este orden: `useState`, `useEffect`, `useRef`, hooks personalizados
- Early returns para estados de loading o error
- Extraer logica compleja a custom hooks

```tsx
// OK
export function ContactForm({ onSubmit }: ContactFormProps): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const { isLoading, error } = useFormStatus()

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage error={error} />

  return <form>...</form>
}

// NO
export default function(props) {
  return <form>...</form>
}
```

### Imports
- Usar alias `@/` para imports absolutos
- Orden: externos -> internos -> relativos -> estilos
- Agrupar imports del mismo paquete

```ts
// OK
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

import { ContactFormProps } from './types'

// NO
import { Button } from '../../../components/ui/button'
import { useState } from 'react'
```

### Estilos con Tailwind
- Usar clases Tailwind, no CSS modules ni styled-components
- Para componentes de shadcn/ui, usar la utilidad `cn()`
- Responsive mobile-first (`sm:`, `md:`, `lg:`)
- Usar variables CSS de `globals.css` para colores

```tsx
// OK
import { cn } from '@/lib/utils'

<button className={cn(
  "px-4 py-2 rounded-lg font-medium transition-colors",
  "bg-primary text-primary-foreground hover:bg-primary/90",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  className
)}>
  {children}
</button>

// NO
<button style={{ backgroundColor: 'blue' }}>
  {children}
</button>
```

### Rutas y Navegacion
- Usar `<Link>` de Next.js, no `<a>` para rutas internas
- Rutas siempre con `/` inicial
- Para navegacion programatica usar `useRouter()` de `next/navigation`

```tsx
// OK
import Link from 'next/link'
import { useRouter } from 'next/navigation'

<Link href="/formacion">Formacion</Link>

const router = useRouter()
router.push('/contacto')

// NO
<a href="/formacion">Formacion</a>
window.location.href = '/contacto'
```

### Server vs Client Components
- Crear Server Components por defecto
- Añadir `'use client'` solo cuando sea necesario: hooks de estado/efecto, APIs del navegador o librerias que dependan del cliente

```tsx
// Server component
export function ProductList({ products }: Props): JSX.Element {
  return <div>{products.map(...)}</div>
}

// Client component
'use client'

export function ContactForm(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  return <form>...</form>
}
```

### Accesibilidad
- Usar `<button>` para interacciones, no `<div onClick>`
- Imagenes siempre con `alt` descriptivo
- Formularios con `<label>` y `htmlFor`
- Iconos sin texto acompañados de `aria-label`

```tsx
// OK
<button aria-label="Cerrar menu" onClick={handleClose}>
  <X className="h-4 w-4" />
</button>

<img src="/logo.png" alt="Logo de Suministros Merle" />

<label htmlFor="email">Email</label>
<input id="email" type="email" />

// NO
<div onClick={handleClose}><X /></div>
<img src="/logo.png" />
<input type="email" />
```

### Manejo de Errores
- Usar `try-catch` en operaciones asincronas
- Mostrar mensajes de error al usuario
- Logging con `console.error` (evitar `console.log` en produccion)

```ts
// OK
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Error al enviar formulario')
  }

  return await response.json()
} catch (error) {
  console.error('Error en sendContact:', error)
  throw error
}

// NO
const response = await fetch('/api/contact')
const data = await response.json()
return data
```

### Nombres de Variables y Funciones
- `camelCase` para variables y funciones
- `PascalCase` para componentes y tipos
- `UPPER_CASE` para constantes
- Nombres descriptivos, evitar abreviaturas

```ts
// OK
const userEmail = 'test@example.com'
const MAX_RETRIES = 3
function sendContactEmail(): void {}
interface UserProfile {}

// NO
const e = 'test@example.com'
const max = 3
function send() {}
interface UP {}
```

### Performance
- Usar `dynamic()` para componentes pesados
- `useMemo` para calculos costosos
- `useCallback` para funciones pasadas como props
- Optimizar imagenes con `next/image`

```tsx
// OK
import dynamic from 'next/dynamic'
import Image from 'next/image'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Spinner />,
  ssr: false
})

const memoizedValue = useMemo(() => 
  expensiveCalculation(data), 
  [data]
)

<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600}
  priority
/>
```

## Estructura de Archivos
```
src/
├── app/                    # Rutas (App Router)
│   ├── page.tsx            # Pagina principal
│   ├── layout.tsx          # Layout raiz
│   ├── formacion/          # Ruta /formacion
│   └── api/                # API routes
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   └── [feature]/          # Componentes por feature
├── lib/
│   ├── utils.ts            # Utilidades generales
│   └── [feature].ts        # Logica especifica
└── hooks/
    └── use-[name].ts       # Custom hooks
```

## Convenciones Especificas del Proyecto
### Formularios
- Usar React Hook Form para formularios complejos
- Validacion con Zod
- Componentes de shadcn/ui para inputs

### Colores y Tema
- Usar variables CSS de `globals.css`
- No hardcodear colores hex
- Soportar dark mode con prefijo `dark:`

### API Routes
- Validar inputs con Zod
- Responder siempre JSON con estructura consistente
- Manejar errores con `try-catch`

```ts
// OK
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Logica...

    return Response.json({
      success: true,
      data: result
    })
  } catch (error) {
    return Response.json({
      success: false,
      error: 'Error al procesar solicitud'
    }, { status: 400 })
  }
}
```

### No hacer
- No usar `var`, solo `const` o `let`
- No usar `any`
- No crear class components
- No utilizar CSS-in-JS (styled-components, emotion)
- No usar `<a>` para navegacion interna
- No hardcodear URLs ni API keys
- No usar `console.log` en produccion
- No ignorar errores de TypeScript

## Contexto del Proyecto
Sitio web para Suministros Merle, especializado en acero corrugado. Objetivo principal:
- Captar leads mediante formularios de contacto
- Ofrecer contenido educativo (tutoriales y guias)
- Mostrar productos y servicios

El tono debe ser profesional pero accesible, dirigido a responsables de obra y constructores.
