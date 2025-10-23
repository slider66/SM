'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Package, Truck, Shield, ChevronRight, Menu, X, ArrowRight } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    { name: 'Zapatas y Pilotes', category: 'Cimentaciones', specs: 'Hasta 16m de longitud' },
    { name: 'Pilares y Vigas', category: 'Estructura Vertical', specs: 'Forjados completos' },
    { name: 'Muros y Pantallas', category: 'Contención', specs: 'Hormigón armado' },
    { name: 'Piscinas y Fosos', category: 'Estructuras Especiales', specs: 'Diseño personalizado' },
    { name: 'Corte Láser/Plasma', category: 'Servicios Avanzados', specs: 'Alta precisión' },
    { name: 'Metal Line Online', category: 'Tienda Online', specs: 'Productos complementarios' }
  ]

  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Armaduras Prefabricadas',
      description: 'Estructuras soldadas y listas para hormigonar según planos de ingeniería'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Proceso Industrial',
      description: 'Corte, doblado y montaje en nave con control de calidad garantizado'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Entrega a Obra',
      description: 'Material etiquetado y transportado directamente a tu punto de instalación'
    }
  ]

  const stats = [
    { value: '32+', label: 'Años de Experiencia' },
    { value: '5000+', label: 'Proyectos Completados' },
    { value: '24h', label: 'Respuesta CYPE' },
    { value: '100%', label: 'Calidad Industrial' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/suministros-merle-logo.png" 
                alt="Suministros Merle Logo" 
                className="h-12 w-auto object-contain max-w-[180px]"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">Hierros Merle</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#productos" className="text-gray-700 hover:text-blue-600 transition-colors">Productos</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <Button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950">
                Solicitar Presupuesto
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#productos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Productos</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Servicios</a>
              <a href="#nosotros" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nosotros</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200">
                Suministros Merle S.L. • Desde 1993
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Ferralla Industrial
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                  {' '}para Construcción
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialistas en armaduras pasivas de hormigón armado. 
                Transformamos acero corrugado en estructuras personalizadas listas para tu obra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-lg px-8 py-6">
                  Solicitar Armaduras
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Ver Proceso
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Entrega 24-48h
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Calidad Certificada
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto">
                    <Package className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Ferralla Profesional</p>
                  <p className="text-gray-600">Desde 1993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Nuestros Productos
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Productos de Ferralla para Construcción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Armaduras pasivas y acero corrugado para hormigón armado. 
              Transformamos el acero en el esqueleto resistente de tu estructura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {product.specs}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Disponible en stock</span>
                    <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
              Ver Catálogo Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Servicios
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso Industrial de Ferralla
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde la interpretación de planos hasta la entrega final. 
              Control total del proceso en nuestras instalaciones industriales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Proceso Industrial
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fases del Proceso en Nave
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro flujo de producción industrial garantiza precisión, calidad y eficiencia 
              en cada armadura que fabricamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interpretación de Planos</h3>
              <p className="text-gray-600">
                Análisis técnico de planos de despiece para definir formas, medidas, 
                diámetros y cantidades exactas de cada pieza.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corte Industrial</h3>
              <p className="text-gray-600">
                Cizallas automáticas cortan las barras de acero corrugado 
                a las longitudes exactas requeridas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Doblado de Precisión</h3>
              <p className="text-gray-600">
                Dobladoras automáticas moldean las barras para darles 
                la forma especificada en los planos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Montaje y Soldadura</h3>
              <p className="text-gray-600">
                Ensamblaje mediante soldadura en puntos de cruce para 
                estructuras rígidas y listas para instalar.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ventajas de la Prefabricación en Nave
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">€</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Optimización de Costes</h4>
                <p className="text-gray-600 text-sm">
                  Minimizamos el desperdicio de material y reducimos 
                  la necesidad de mano de obra especializada en obra.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Velocidad de Construcción</h4>
                <p className="text-gray-600 text-sm">
                  Las armaduras llegan listas para instalar. 
                  El trabajo en sitio se simplifica a "montar y hormigonar".
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Garantía de Calidad</h4>
                <p className="text-gray-600 text-sm">
                  Control de calidad y precisión dimensional superiores 
                  en entorno controlado de fabricación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Line Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Tienda Online
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Metal Line - Productos de Valor Añadido
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra marca comercial online con productos complementarios de diseño industrial 
              y soluciones metálicas personalizadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">🚪</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Puertas y Accesorios</h3>
              <p className="text-gray-600 text-sm">
                Cortafuegos, de trastero, registro y barandillas metálicas
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">🏡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jardín y Exterior</h3>
              <p className="text-gray-600 text-sm">
                Jardineras, bordillos metálicos y vallados decorativos
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Decoración Industrial</h3>
              <p className="text-gray-600 text-sm">
                Cuadros láser, botelleros de diseño y paneles decorativos
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Componentes Técnicos</h3>
              <p className="text-gray-600 text-sm">
                Rejillas para peldaños y placas de anclaje personalizadas
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Grabado Láser</h3>
              <p className="text-gray-600 text-sm">
                Trofeos, merchandising y diseños personalizados
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <span className="text-lg">🛒</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compra Online</h3>
              <p className="text-gray-600 text-sm">
                Visita metal-line.es para todos nuestros productos
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Formación Gratuita
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              17 Tutoriales Gratuitos de Ferralla
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometidos con la educación del sector. Ofrecemos tutoriales paso a paso 
              gratuitos para dominar todos los procesos de ferralla.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Zapata Aislada', 'Zapata Combinada', 'Zapata Arriostrada', 'Zapata de Muro',
                'Vigas Riostras', 'Arranque Pilar Hormigón', 'Arranque Pilar Metálico', 'Pilar Hormigón',
                'Pilar Prefabricado', 'Vigas y Zunchos', 'Piscinas', 'Muros Hormigón',
                'Pilotes', 'Muros Pantalla', 'Foso Ascensor', 'Encepados', 'Introducción'
              ].map((tutorial, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{tutorial}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                Ver Todos los Tutoriales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200">
                Sobre Nosotros
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Suministros Merle S.L. • Empresa Familiar desde 1993
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En Hierros Merle, somos una empresa familiar de ferralla con más de 32 años de experiencia. 
                  Dirigida por tres hermanos Merle, cada uno especializado en calcular, suministrar y ejecutar 
                  las necesidades de nuestros clientes. Fundados en septiembre de 1993 en Paracuellos de Jarama.
                </p>
                <p>
                  Somos especialistas en transformación de acero corrugado para crear armaduras pasivas 
                  prefabricadas. Nuestro sistema computarizado integrado con CYPE acelera todo el proceso, 
                  ofreciendo despiece automatizado y prioridad máxima a proyectos entregados en formato CYPE.
                </p>
                <p>
                  Todo el trabajo se realiza exclusivamente en nuestras instalaciones industriales: 
                  corte automatizado, doblado de precisión y soldadura (MIG, TIG, electrodos). 
                  Nunca atamos con alambre - siempre soldamos para garantizar máxima resistencia.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center p-4 bg-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-700">31+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Calidad y Confianza</p>
                  <p className="text-gray-600">Tu Socio Estratégico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Solicita tus Armaduras de Ferralla
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              ¿Tienes planos de ingeniería para tu estructura? Nosotros los transformamos 
              en armaduras listas para hormigonar. Contáctanos y optimiza tu obra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">916 581 651</p>
              <p className="text-sm text-gray-500 mt-2">Lunes a Viernes: 8:00-13:00 y 14:00-17:00</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hierrosmerle@merle.es</p>
              <p className="text-sm text-gray-500 mt-2">Respuesta en 24h</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
              <p className="text-gray-600">Avenida General 1, 28860</p>
              <p className="text-gray-600">Paracuellos de Jarama, Madrid</p>
              <p className="text-sm text-gray-500 mt-2">Visítanos previa cita</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Solicitar Cotización de Armaduras
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/suministros-merle-logo.png" 
                  alt="Suministros Merle Logo" 
                  className="h-12 w-auto object-contain max-w-[180px]"
                />
                <span className="ml-3 text-xl font-bold">Hierros Merle</span>
              </div>
              <p className="text-gray-400">
                Fabricación industrial de acero y metales en Paracuellos de Jarama desde 1993.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Zapatas y Pilotes</a></li>
                <li><a href="#" className="hover:text-blue-400">Pilares y Vigas</a></li>
                <li><a href="#" className="hover:text-blue-400">Muros y Pantallas</a></li>
                <li><a href="#" className="hover:text-blue-400">Piscinas y Fosos</a></li>
                <li><a href="#" className="hover:text-blue-400">Metal Line Products</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Armaduras Prefabricadas</a></li>
                <li><a href="#" className="hover:text-blue-400">Corte Láser/Plasma</a></li>
                <li><a href="#" className="hover:text-blue-400">Interpretación CYPE</a></li>
                <li><a href="#" className="hover:text-blue-400">Entrega a Obra</a></li>
                <li><a href="#" className="hover:text-blue-400">Asesoramiento Técnico</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>916 581 651</li>
                <li>hierrosmerle@merle.es</li>
                <li>Paracuellos de Jarama, Madrid</li>
                <li className="text-sm mt-2">Lunes a Viernes: 8:00-13:00 y 14:00-17:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Suministros Merle, S.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}