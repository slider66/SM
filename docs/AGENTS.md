REGLAS GLOBALES ESENCIALES PARA TU PROYECTO
===========================================

1. REGLAS DE CÓDIGO (ESLint + Prettier)
---------------------------------------
```jsonc
// .eslintrc.json o eslint.config.mjs
{
  "rules": {
    // Prevenir errores comunes
    "no-console": "warn",                    // Evitar console.log en producción
    "no-unused-vars": "error",               // Variables no usadas
    "no-debugger": "error",                  // Debugger olvidado

    // React/Next.js específico
    "react/prop-types": "off",               // Usas TypeScript
    "react-hooks/rules-of-hooks": "error",   // Hooks correctamente
    "react-hooks/exhaustive-deps": "warn",   // Dependencias de useEffect
    "@next/next/no-html-link-for-pages": "error", // Usar Link de Next

    // TypeScript
    "@typescript-eslint/no-explicit-any": "warn",  // Evitar 'any'
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

2. REGLAS DE ESTRUCTURA DE ARCHIVOS
-----------------------------------
✅ HACER:
- Componentes en PascalCase: `ContactForm.tsx`
- Hooks personalizados: `useWebSocket.ts`
- Utilidades en camelCase: `formatDate.ts`
- Constantes en UPPER_CASE: `API_ENDPOINTS.ts`

❌ NO HACER:
- Mezclar estilos: `contact-Form.tsx`
- Archivos genéricos: `utils.ts` (ser específico)

3. REGLAS DE COMPONENTES REACT
------------------------------
```tsx
// ✅ BUENA PRÁCTICA
export function ContactForm({ onSubmit }: ContactFormProps) {
  // 1. Hooks primero
  const [email, setEmail] = useState('')
  const { isLoading } = useFormStatus()

  // 2. Funciones después
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(email)
  }

  // 3. Early returns
  if (isLoading) return <Spinner />

  // 4. JSX al final
  return <form onSubmit={handleSubmit}>...</form>
}

// ❌ MALA PRÁCTICA
export default function() { // Sin nombre, sin tipos
  const handleSubmit = () => {} // Definido antes de hooks
  const [email, setEmail] = useState('') // Hooks después
  // ...
}
```

4. REGLAS DE IMPORTACIONES
--------------------------
```ts
// ✅ ORDEN CORRECTO
// 1. Librerías externas
import { useState } from 'react'
import Link from 'next/link'

// 2. Imports internos absolutos
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

// 3. Imports relativos
import { ContactFormProps } from './types'
import styles from './ContactForm.module.css'

// ❌ EVITAR
import { Button } from '../../../components/ui/button' // Usar alias @/
```

5. REGLAS DE TIPOS (TypeScript)
-------------------------------
```ts
// ✅ HACER
interface User {
  id: string
  email: string
  name: string
}

type UserRole = 'admin' | 'user' | 'guest'

// Props siempre tipadas
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

// ❌ EVITAR
const user: any = {} // Nunca usar 'any'
function doSomething(data) {} // Sin tipos
```

6. REGLAS DE PERFORMANCE
------------------------
```ts
// ✅ HACER
import dynamic from 'next/dynamic'

// Lazy load componentes pesados
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Spinner />,
  ssr: false // Si no necesita SSR
})

// Memoizar cálculos costosos
const expensiveValue = useMemo(() =>
  calculateSomething(data),
  [data]
)

// ❌ EVITAR
import HeavyChart from './HeavyChart' // Carga todo siempre
const value = calculateSomething(data) // Recalcula en cada render
```

7. REGLAS DE ACCESIBILIDAD
--------------------------
```tsx
// ✅ HACER
<button
  aria-label="Cerrar menú"
  onClick={handleClose}
>
  <X />
</button>

<img
  src="/logo.png"
  alt="Logo de Suministros Merle"
/>

<form>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" />
</form>

// ❌ EVITAR
<div onClick={handleClose}>X</div> // Usar button
<img src="/logo.png" /> // Sin alt
<input type="email" /> // Sin label
```

8. REGLAS DE SEGURIDAD
----------------------
```env
// ✅ HACER
// Variables de entorno con prefijo NEXT_PUBLIC_ solo si son públicas
NEXT_PUBLIC_SITE_URL=https://merle.es
DATABASE_URL=... // Privada, sin prefijo

// Sanitizar inputs
import DOMPurify from 'isomorphic-dompurify'
const clean = DOMPurify.sanitize(userInput)

// ❌ EVITAR
const apiKey = "sk_live_..." // Hardcoded en código
<div dangerouslySetInnerHTML={{ __html: userInput }} /> // Sin sanitizar
```

9. REGLAS DE COMMITS (Conventional Commits)
------------------------------------------
```
# ✅ FORMATO
feat: añadir formulario de contacto
fix: corregir validación de email
docs: actualizar README con instrucciones
style: formatear código con prettier
refactor: reorganizar componentes de UI
perf: optimizar carga de imágenes
test: añadir tests para ContactForm

# ❌ EVITAR
"cambios varios"
"fix"
"update"
```

10. REGLAS DE DOCUMENTACIÓN
---------------------------
```ts
/**
 * Envía un email de contacto al equipo de ventas
 *
 * @param email - Email del cliente
 * @param message - Mensaje del cliente
 * @returns Promise con el resultado del envío
 * @throws Error si el email es inválido
 */
export async function sendContactEmail(
  email: string,
  message: string
): Promise<{ success: boolean }> {
  // ...
}
```
