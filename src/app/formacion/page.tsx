import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Layers,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Centro de Formacion | Suministros Merle",
  description:
    "Accede a la biblioteca de formacion de Suministros Merle: 17 tutoriales gratuitos sobre procesos de ferralla industrial, desde los conceptos basicos hasta proyectos avanzados.",
};

const stats = [
  {
    label: "17 tutoriales",
    description: "Ruta completa paso a paso",
    icon: GraduationCap,
  },
  {
    label: "10+ horas de contenido",
    description: "Casos reales y checklist imprimibles",
    icon: Layers,
  },
  {
    label: "Acceso gratuito",
    description: "Disponible 24/7 desde cualquier dispositivo",
    icon: ShieldCheck,
  },
];

const tutorials = [
  {
    title: "Introduccion a la ferralla",
    level: "Principiante",
    duration: "15 min",
    description:
      "Fundamentos del armado pasivo, terminologia y lectura basica de planos.",
  },
  {
    title: "Zapata aislada",
    level: "Intermedio",
    duration: "25 min",
    description:
      "Proceso completo de armado para cimentaciones individuales con ejemplos practicos.",
  },
  {
    title: "Zapata combinada",
    level: "Intermedio",
    duration: "30 min",
    description:
      "Coordinacion de varillas para zapatas que soportan varios pilares en obra.",
  },
  {
    title: "Zapata arriostrada",
    level: "Avanzado",
    duration: "35 min",
    description:
      "Diseno de sistemas de arriostramiento entre zapatas y control de tolerancias.",
  },
  {
    title: "Muro de contencion",
    level: "Avanzado",
    duration: "40 min",
    description:
      "Planificacion de armaduras verticales y horizontales para muros de hormigon.",
  },
  {
    title: "Checklist previo a hormigonar",
    level: "Principiante",
    duration: "12 min",
    description:
      "Verificaciones clave antes de la visita del hormigonado en obra civil.",
  },
];

const levelStyles: Record<string, string> = {
  Principiante: "bg-emerald-100 text-emerald-700",
  Intermedio: "bg-amber-100 text-amber-700",
  Avanzado: "bg-rose-100 text-rose-700",
};

const learningPaths = [
  {
    title: "Nivel principiante",
    description: "Conceptos basicos y mejores practicas para empezar.",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: Sparkles,
  },
  {
    title: "Nivel intermedio",
    description: "Tecnicas de optimizacion, secuencias y montaje en obra.",
    accent: "bg-amber-50 text-amber-700 border-amber-100",
    icon: Layers,
  },
  {
    title: "Nivel avanzado",
    description: "Casos especiales, coordinacion BIM y control de calidad.",
    accent: "bg-rose-50 text-rose-700 border-rose-100",
    icon: ShieldCheck,
  },
];

const highlights = [
  {
    title: "Plantillas descargables",
    description:
      "Modelos de checklist y formatos de seguimiento listos para imprimir.",
    icon: Clock,
  },
  {
    title: "Casos reales",
    description:
      "Analisis de proyectos ejecutados por Merle con lecciones clave.",
    icon: Users,
  },
  {
    title: "Actualizacion continua",
    description:
      "Lecciones nuevas cada trimestre basadas en necesidades de obra.",
    icon: BookOpen,
  },
];

export default function FormacionPage() {
  return (
    <div className="bg-slate-50 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-16 left-12 h-48 w-48 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 md:px-8 md:pb-24 lg:pt-32">
          <Badge className="bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            Formacion gratuita
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            17 tutoriales de ferralla para dominar cada fase del armado
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
            Aprende los procesos industriales de Suministros Merle con una ruta
            guiada que combina video, documentos tecnicos y checklist
            descargables. Mas de tres decadas de experiencia resumidas en un
            itinerario accesible.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-100">
                    {item.label}
                  </p>
                  <p className="text-sm text-blue-50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-4 md:-mt-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/40 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  Ruta guiada
                </p>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Lista de tutoriales
                </h2>
              </div>
              <Badge className="bg-blue-50 px-3 py-1 text-blue-700">
                Actualizada 2025
              </Badge>
            </div>
            <div className="space-y-4">
              {tutorials.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg md:flex-row md:items-center md:gap-6"
                >
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-700">
                        {item.title}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          levelStyles[item.level] ?? "bg-slate-100 text-slate-700",
                        )}
                      >
                        {item.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 md:text-base">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2 font-medium text-gray-600">
                        <Clock className="h-4 w-4 text-blue-600" />
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 font-medium text-gray-600">
                        <PlayCircle className="h-4 w-4 text-blue-600" />
                        Video + guias PDF
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full shrink-0 bg-blue-50 text-blue-700 transition hover:bg-blue-100 md:w-auto"
                  >
                    Ver modulo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="h-full rounded-3xl border-blue-100 bg-white shadow-xl shadow-blue-100/50">
              <CardHeader className="flex flex-col items-center space-y-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Bienvenido al Centro de Formacion
                  </CardTitle>
                  <p className="mt-3 text-base text-gray-600 md:text-lg">
                    Selecciona un modulo para iniciar tu aprendizaje. Cada
                    tutorial incluye videos cortos, esquemas descargables y
                    recomendaciones para obra civil en Madrid.
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-3">
                  {learningPaths.map((path) => (
                    <div
                      key={path.title}
                      className={cn(
                        "rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
                        path.accent,
                      )}
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                        <path.icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-wide">
                        {path.title}
                      </p>
                      <p className="mt-2 text-sm opacity-80">
                        {path.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-blue-700">
                        Plan de estudio recomendado
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Acompanar a tu equipo paso a paso
                      </h3>
                      <p className="mt-2 text-sm text-blue-900/80">
                        Todo el contenido se puede compartir con el equipo de
                        obra para unificar criterios de montaje y control de
                        calidad.
                      </p>
                    </div>
                    <Button className="bg-blue-700 px-6 py-5 text-white hover:bg-blue-800">
                      Descargar temario completo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-blue-100 bg-white/90 shadow-lg shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <Users className="h-6 w-6 text-blue-600" />
                  Recursos para responsables de obra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-600">
                <p>
                  Los cursos incluyen rutinas de inspeccion visual, matrices de
                  riesgos y formatos descargables para seguimiento de pedidos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    Listas de chequeo para recepcion de ferralla prefabricada.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    Ejemplos reales de planos interpretados por el equipo Merle.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    Calendario editable para coordinar entregas y montaje.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-8 text-white shadow-2xl md:p-12">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-blue-400 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
                Equipo Merle
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Comparte la formacion con tu equipo de obra
              </h2>
              <p className="mt-3 max-w-2xl text-blue-50">
                Nuestra biblioteca se actualiza con base en las consultas que
                recibimos de jefes de obra, encargados y estudios de ingenieria
                en Madrid. Registrate para recibir los nuevos modulos en tu
                correo.
              </p>
            </div>
            <Button className="bg-white px-8 py-6 text-blue-700 hover:bg-blue-50">
              Empezar ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
