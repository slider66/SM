'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Package,
  Truck,
  Shield,
  ChevronRight,
  ArrowRight,
  Mouse
} from 'lucide-react'
import { ProtectedMailLink } from '@/components/protected-mail-link'

type Service = {
  icon: typeof Package
  title: string
  description: string
}

type Product = {
  name: string
  category: string
  specs: string
}

type Stat = {
  value: string
  label: string
}

type StatDetail = Stat & {
  description: string
}

type ProcessStep = {
  step: number
  title: string
  description: string
}

type ProcessAdvantage = {
  symbol: string
  title: string
  description: string
}

type MetalLineItem = {
  tag: string
  title: string
  description: string
}

type AboutHighlight = {
  value: string
  label: string
  emphasis: 'light' | 'medium'
}

const products: Product[] = [
  { name: 'Zapatas y pilotes', category: 'Cimentaciones', specs: 'Produccion de acero hasta 16 m de longitud.' },
  { name: 'Pilares y vigas', category: 'Estructura vertical', specs: 'Forjados completos listos para montaje.' },
  { name: 'Muros y pantallas', category: 'Contencion', specs: 'Hormigon armado con cortes de precision.' },
  { name: 'Piscinas y fosos', category: 'Estructuras especiales', specs: 'Diseno a medida segun planos tecnicos.' },
  { name: 'Corte laser y plasma', category: 'Servicios avanzados', specs: 'Fabricacion de piezas con alta precision.' },
  { name: 'Metal Line Online', category: 'Tienda online', specs: 'Catalogo de productos complementarios.' }
]

const services: Service[] = [
  {
    icon: Package,
    title: 'Armaduras prefabricadas',
    description: 'Estructuras soldadas listas para hormigonar segun planos de ingenieria.'
  },
  {
    icon: Shield,
    title: 'Proceso industrial',
    description: 'Corte, doblado y montaje con control de calidad certificado.'
  },
  {
    icon: Truck,
    title: 'Entrega a obra',
    description: 'Material etiquetado y transporte coordinado en tu obra.'
  }
]

const stats: Stat[] = [
  { value: '32+', label: 'Anos de experiencia' },
  { value: '5000+', label: 'Proyectos completados' },
  { value: '24 h', label: 'Respuesta tecnica' },
  { value: '100%', label: 'Calidad industrial' }
]

const statDetails: StatDetail[] = [
  {
    value: '32+',
    label: 'Anos fabricando ferralla',
    description: 'Equipo especializado en transformacion de acero para obra civil e industrial.'
  },
  {
    value: '5000+',
    label: 'Pedidos entregados',
    description: 'Lotes completos de zapatas, vigas, muros y piezas especiales.'
  },
  {
    value: '24 h',
    label: 'Respuesta a planos CYPE',
    description: 'Analizamos tus archivos digitales y devolvemos despieces listos para producir.'
  },
  {
    value: '100%',
    label: 'Control en nave',
    description: 'Corte, doblado y soldadura por personal propio en Paracuellos de Jarama.'
  }
]

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Interpretacion de planos',
    description: 'Analisis tecnico de planos y listados para definir medidas, formas y cantidades exactas.'
  },
  {
    step: 2,
    title: 'Corte industrial',
    description: 'Cizallas automaticas preparan cada barra de acero corrugado a la longitud requerida.'
  },
  {
    step: 3,
    title: 'Doblado de precision',
    description: 'Dobladoras CNC reproducen angulos y radios segun las especificaciones del proyecto.'
  },
  {
    step: 4,
    title: 'Montaje y soldadura',
    description: 'Ensamblaje mediante soldadura certificada para estructuras rigidas listas para montar.'
  }
]

const processAdvantages: ProcessAdvantage[] = [
  {
    symbol: '+',
    title: 'Optimizacion de costes',
    description: 'Reducimos desperdicio y mano de obra en obra al entregar modulos terminados.'
  },
  {
    symbol: '>',
    title: 'Velocidad de ejecucion',
    description: 'Entrega por familias y etiquetado pieza a pieza para agilizar hormigonados.'
  },
  {
    symbol: '*',
    title: 'Garantia de calidad',
    description: 'Control dimensional, soldadura certificada y trazabilidad completa del acero.'
  }
]

const metalLineItems: MetalLineItem[] = [
  { tag: 'PA', title: 'Puertas y accesorios', description: 'Cortafuegos, registros y barandillas metalicas.' },
  { tag: 'JE', title: 'Jardin y exterior', description: 'Jardineras, bordillos metalicos y vallados decorativos.' },
  { tag: 'DI', title: 'Decoracion industrial', description: 'Cuadros laser, botelleros y paneles de autor.' },
  { tag: 'CT', title: 'Componentes tecnicos', description: 'Rejillas para peldanos, placas de anclaje y piezas OEM.' },
  { tag: 'GL', title: 'Grabado laser', description: 'Trofeos, regalos y merchandising personalizado.' },
  { tag: 'MO', title: 'Metal Line Online', description: 'Compra directa en metal-line.es con envio nacional.' }
]

const tutorials: string[] = [
  'Zapata aislada',
  'Zapata combinada',
  'Zapata arriostrada',
  'Zapata de muro',
  'Vigas riostras',
  'Arranque pilar hormigon',
  'Arranque pilar metalico',
  'Pilar hormigon',
  'Pilar prefabricado',
  'Vigas y zunchos',
  'Piscinas',
  'Muros hormigon',
  'Pilotes',
  'Muros pantalla',
  'Foso ascensor',
  'Encepados',
  'Introduccion'
]

const aboutHighlights: AboutHighlight[] = [
  { value: '1000+', label: 'Proyectos completados', emphasis: 'light' },
  { value: '32+', label: 'Anos de experiencia', emphasis: 'medium' }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(true)

  const slideCount = products.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount)
    }, 5000)

    return () => clearInterval(timer)
  }, [slideCount])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeProduct = products[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <section className="relative -mt-16 flex min-h-screen flex-col overflow-hidden pt-16 md:-mt-20 md:pt-20">
        <div className="absolute inset-0">
          <img
            src="/hero.JPG"
            alt="Instalacion industrial de ferralla con maquinaria de corte y doblado"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/50 to-blue-700/40" />
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-white shadow-2xl backdrop-blur">
                <Badge className="w-fit bg-blue-100/90 text-blue-900">
                  Suministros Merle S.L. - Desde 1993
                </Badge>
                <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Ferralla a medida para tu obra
              </h1>
              <p className="text-lg leading-relaxed text-blue-100">
                Transformamos acero corrugado en armaduras prefabricadas con soldadura certificada. Optimiza plazos y
                costes con un proceso industrial completo: corte, doblado y entrega etiquetada en tu obra.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-6 text-lg hover:from-blue-800 hover:to-blue-950">
                  Solicitar armaduras
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 px-8 py-6 text-lg text-white hover:bg-white/20"
                >
                  Ver proceso
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-[120px]">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-blue-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/90 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Produccion industrial</CardTitle>
                <CardDescription>
                  Destacamos la familia {activeProduct.category.toLowerCase()} cada cinco segundos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6">
                  <p className="text-sm uppercase tracking-wide text-blue-600">{activeProduct.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{activeProduct.name}</h3>
                  <p className="mt-2 text-slate-700">{activeProduct.specs}</p>
                </div>
                <div className="grid gap-4">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={service.title}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                      >
                        <span className="rounded-full bg-blue-100 p-2 text-blue-700">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <p className="font-semibold text-slate-900">{service.title}</p>
                          <p className="text-sm text-slate-600">{service.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
        <div
          className={`absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-xs uppercase tracking-[0.35em] text-white/70">Scroll</span>
          <a
            href="#productos"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white/80 backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Bajar a la seccion de productos"
          >
            <Mouse className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {statDetails.map((item) => (
            <div key={item.label} className="space-y-3">
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="text-lg font-semibold">{item.label}</p>
              <p className="text-sm text-blue-100">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="productos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Nuestros productos</Badge>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Ferralla para construccion y obra civil</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Armaduras pasivas, acero corrugado y piezas especiales. Transformamos el acero en el esqueleto resistente
              de tu estructura con la precision que exige cada proyecto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.name} className="group transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900 transition-colors group-hover:text-blue-600">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="mt-1 text-slate-600">{product.specs}</CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Produccion continua en nave</span>
                    <ChevronRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
              Ver catalogo completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Servicios</Badge>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Proceso industrial de ferralla</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Desde la interpretacion de planos hasta la entrega etiquetada en obra. Control completo del proceso en
              nuestras instalaciones de Paracuellos de Jarama.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="p-8 text-center transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Proceso industrial</Badge>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Fases del proceso en nave</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Nuestro flujo de produccion garantiza precision, calidad y eficiencia en cada armadura prefabricada.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold text-slate-900">Ventajas de la prefabricacion en nave</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {processAdvantages.map((advantage) => (
                <div key={advantage.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl font-bold">{advantage.symbol}</span>
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900">{advantage.title}</h4>
                  <p className="text-sm text-slate-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Tienda online</Badge>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Metal Line: productos de valor anadido</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Nuestra marca comercial online suma productos complementarios de diseno industrial y soluciones
              metalicas personalizadas.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {metalLineItems.map((item) => (
              <Card key={item.title} className="p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-sm font-bold text-white">
                  {item.tag}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Formacion gratuita</Badge>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">17 tutoriales de ferralla descargables</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Reforzamos la formacion del sector con tutoriales paso a paso para dominar cada familia estructural.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tutorials.map((tutorial, index) => (
                <div
                  key={tutorial}
                  className="flex items-center space-x-3 rounded-lg p-3 transition-colors hover:bg-blue-50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <span className="text-slate-700">{tutorial}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg">
                Ver todos los tutoriales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge className="w-fit bg-blue-100 text-blue-800">Sobre nosotros</Badge>
              <h2 className="text-4xl font-bold text-slate-900">Empresa familiar desde 1993</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  En Hierros Merle somos una empresa familiar con mas de tres decadas fabricando ferralla. Dirigida por
                  tres hermanos, cada uno especializado en calcular, suministrar y ejecutar las necesidades de nuestros
                  clientes en Madrid y alrededores.
                </p>
                <p>
                  Nos enfocamos en transformacion de acero corrugado para crear armaduras pasivas prefabricadas. Nuestro
                  sistema integrado con CYPE agiliza el despiece y da prioridad a proyectos entregados en formatos
                  digitales.
                </p>
                <p>
                  Todo el trabajo se realiza en nuestras instalaciones: corte automatizado, doblado de precision y
                  soldadura MIG, TIG y electrodo. Siempre soldamos para garantizar la maxima rigidez estructural.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className={`text-center p-4 rounded-lg ${
                      item.emphasis === 'medium' ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <div className="text-3xl font-bold">{item.value}</div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-blue-900">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">Calidad y confianza</p>
                  <p className="text-sm text-slate-600">Tu socio estrategico en ferralla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Solicita tus armaduras de ferralla</h2>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Tienes planos de ingenieria para tu estructura. Nosotros los transformamos en armaduras listas para
              hormigonar. Contacta y optimiza tus plazos de obra.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Telefono</h3>
              <p className="text-slate-600">91 658 0977</p>
              <p className="mt-2 text-sm text-slate-500">Lunes a viernes 08:00-13:00 y 14:00-17:00</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Email</h3>
              <ProtectedMailLink
                user="hierrosmerle"
                domain="merle.es"
                subject="Solicitud de armaduras Merle"
                className="text-slate-600 hover:text-blue-600"
              />
              <p className="mt-2 text-sm text-slate-500">Respondemos en menos de 24 horas laborales</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Ubicacion</h3>
              <p className="text-slate-600">Avenida General 1, 28860</p>
              <p className="text-slate-600">Paracuellos de Jarama, Madrid</p>
              <p className="mt-2 text-sm text-slate-500">Visitas bajo cita previa</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-white px-8 py-6 text-lg text-blue-600 hover:bg-slate-100">
              Solicitar cotizacion de armaduras
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Paracuellos de Jarama (Madrid)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Produccion propia con entrega etiquetada</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Calidad industrial garantizada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
