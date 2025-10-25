import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProtectedImage } from "@/components/ui/protected-image";

type ReadingItem = {
  title: string;
  description: string;
  icon: typeof Search;
};

type HighlightStat = {
  value: string;
  label: string;
};

export const metadata: Metadata = {
  title: "Recomendaciones | Identificar marcas de corrugado",
  description:
    "Guia practica de Suministros Merle para reconocer marcas de acero corrugado, garantizar la trazabilidad y localizar certificados de cada colada.",
};

const heroHighlights: HighlightStat[] = [
  { value: "40%", label: "Complejidad estimada" },
  { value: "3-4 min", label: "Tiempo medio por barra" },
  { value: "100%", label: "Trazabilidad con certificado" },
];

const steelGrades = ["B400S", "B500S", "B400SD", "B500SD"];

const readingChecklist: ReadingItem[] = [
  {
    title: "Localiza el inicio",
    description:
      "Busca la corruga normal situada entre dos corrugas engrosadas. Marca el sentido de lectura apoyandote en esa referencia.",
    icon: Search,
  },
  {
    title: "Identifica el pais",
    description:
      "El primer grupo de corrugas normales delimitado por una corruga engrosada indica el codigo de pais segun la norma UNE.",
    icon: MapPin,
  },
  {
    title: "Confirma el fabricante",
    description:
      "El siguiente bloque de corrugas normales senala el numero asignado por AENOR al fabricante de la barra.",
    icon: Building2,
  },
  {
    title: "Verifica la calidad",
    description:
      "Las corrugas finales identifican la familia del acero. Comprueba que coincide con el pedido y el certificado recibido.",
    icon: ShieldCheck,
  },
];

const countryCodes = [
  {
    region: "Alemania, Australia, Eslovaquia, Polonia y Republica Checa",
    code: "1",
  },
  {
    region: "Belgica, Paises Bajos, Luxemburgo y Suiza",
    code: "2",
  },
  {
    region: "Francia y Hungria",
    code: "3",
  },
  {
    region: "Eslovenia, Italia y Malta",
    code: "4",
  },
  {
    region: "Irlanda, Islandia, Reino Unido",
    code: "5",
  },
  {
    region: "Dinamarca, Estonia, Finlandia, Letonia, Lituania, Noruega y Suecia",
    code: "6",
  },
  {
    region: "Espana y Portugal",
    code: "7",
  },
  {
    region: "Chipre y Grecia",
    code: "8",
  },
  {
    region: "Otros paises diferentes a los anteriores",
    code: "9",
  },
];

const manufacturers = [
  { name: "Siderurgica Sevillana, S.A.", countryCode: "7", manufacturerCode: "4" },
  { name: "Compania Espanola de Laminacion, S.L. (CELSA)", countryCode: "7", manufacturerCode: "5" },
  { name: "Corrugados Azpeitia, S.L.", countryCode: "7", manufacturerCode: "7" },
  { name: "Corrugados Getafe, S.L.", countryCode: "7", manufacturerCode: "11" },
  { name: "Megasas Siderurgica, S.L.", countryCode: "7", manufacturerCode: "17" },
  { name: "Nervacero, S.A.", countryCode: "7", manufacturerCode: "18" },
  { name: "Celsa Atlantic, S.L.", countryCode: "7", manufacturerCode: "23" },
  { name: "SN MAIA Siderurgia Nacional, S.A.", countryCode: "7", manufacturerCode: "32" },
  { name: "SN SEIXAL Siderurgia Nacional, S.A.", countryCode: "7", manufacturerCode: "34" },
];

const verificationNotes = [
  "Contrasta siempre el codigo de la barra con el certificado de colada entregado por el fabricante.",
  "Registra fotografia y lote de cada entrega para mantener la trazabilidad en obra.",
  "Si detectas codigos incompletos o ilegibles, bloquea la instalacion y solicita reposicion.",
];

export default function RecomendacionesPage(): JSX.Element {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/10 text-white backdrop-blur">
            Guia tecnica
          </Badge>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Como reconocer marcas de corrugado en obra
            </h1>
            <p className="text-lg text-blue-100">
              Verificar las corrugas grabadas en cada barra asegura la calidad
              estructural, permite localizar certificados y elimina riesgos durante
              el hormigonado. Sigue estos pasos para confirmar pais, fabricante y
              familia de acero en minutos.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {heroHighlights.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[180px] flex-col rounded-2xl border border-white/15 bg-white/10 px-5 py-4"
              >
                <span className="text-3xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-blue-100">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-white px-8 py-6 text-lg text-blue-700 hover:bg-blue-50"
            >
              <Link href="/contacto">
                Hablar con un tecnico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 pb-24">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl border-blue-100/60 bg-white/95 shadow-2xl shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Resumen operativo
                </CardTitle>
                <CardDescription className="text-slate-600">
                  La lectura completa dura menos de cinco minutos y permite validar la procedencia real de cada lote recibido.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-blue-700">
                      Tiempo estimado
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      3-4 min
                    </p>
                    <p className="mt-1 text-xs text-blue-900/70">
                      Revision por barra
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-blue-700">
                      Datos clave
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      Pais + fabricante
                    </p>
                    <p className="mt-1 text-xs text-blue-900/70">
                      Codigo UNE en corrugas
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-blue-700">
                      Resultado
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      Certificado validado
                    </p>
                    <p className="mt-1 text-xs text-blue-900/70">
                      Trazabilidad total
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Recuerda rechazar cualquier remesa que no incluya certificado
                  de colada o presente corrugas ilegibles. La responsabilidad de
                  la trazabilidad recae sobre quien recibe el material.
                </p>
              </CardContent>
            </Card>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-zoom-in overflow-hidden rounded-3xl border-blue-100/60 bg-white/95 shadow-2xl shadow-blue-100/40">
                  <div className="group relative aspect-[4/3] w-full overflow-hidden">
                    <ProtectedImage
                      src="/identificar-marcas.webp"
                      alt="Referencias visuales para identificar marcas de corrugado"
                      fill
                      className="select-none transition-transform duration-500 ease-out group-hover:scale-105"
                      draggable={false}
                      style={{ objectFit: "contain" }}
                      priority={false}
                      sizes="(min-width: 1024px) 420px, 100vw"
                    />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
                <DialogHeader className="sr-only">
                  <DialogTitle>Identificar marcas de corrugado</DialogTitle>
                  <DialogDescription>
                    Vista ampliada de la referencia visual para identificar corrugas.
                  </DialogDescription>
                </DialogHeader>
                <div className="relative w-full overflow-hidden rounded-3xl bg-white">
                  <ProtectedImage
                    src="/identificar-marcas.webp"
                    alt="Referencias visuales para identificar marcas de corrugado"
                    width={1600}
                    height={1200}
                    className="h-auto w-full select-none"
                    draggable={false}
                    priority={false}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Lectura paso a paso
              </h2>
              <p className="max-w-3xl text-sm text-slate-300">
                La norma UNE 36068 establece el patron de corrugas que codifica la
                informacion esencial. Analiza cada bloque siguiendo el orden
                indicado para evitar errores durante el control de calidad en obra.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {readingChecklist.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-slate-100 shadow-lg shadow-slate-900/40"
                  >
                    <Icon className="h-5 w-5 text-blue-300" />
                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <Card className="rounded-3xl border-slate-800/50 bg-slate-900/80 text-slate-100 shadow-xl shadow-slate-900/40">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">
                  Calidades mas habituales
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Estas series cubren la mayoria de estructuras de hormigon armado en vivienda
                  residencial y obra publica.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {steelGrades.map((grade) => (
                    <Badge
                      key={grade}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                    >
                      {grade}
                    </Badge>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-400">
                  Verifica siempre que el pedido, el albaran y la marca en barra comparten la misma
                  familia de acero.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border-blue-100/60 bg-white/95 shadow-xl shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Codigos de pais (UNE 36068)
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Tras el inicio de lectura encontraras un grupo de corrugas normales que define el origen del acero.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-2xl border border-blue-100">
                  <table className="min-w-full divide-y divide-blue-100 text-sm">
                    <thead className="bg-blue-50/60 text-blue-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                          Pais o region
                        </th>
                        <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                          Codigo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100 bg-white/95 text-slate-700">
                      {countryCodes.map((entry) => (
                        <tr key={entry.code}>
                          <td className="px-4 py-3">{entry.region}</td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {entry.code}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-blue-100/60 bg-white/95 shadow-xl shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Fabricantes en Espana
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Referencia cruzada para validar rapidamente el bloque de fabricante grabado en la barra.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-2xl border border-blue-100">
                  <table className="min-w-full divide-y divide-blue-100 text-sm">
                    <thead className="bg-blue-50/60 text-blue-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                          Fabricante
                        </th>
                        <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                          Codigo pais
                        </th>
                        <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                          Codigo fabricante
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100 bg-white/95 text-slate-700">
                      {manufacturers.map((manufacturer) => (
                        <tr key={manufacturer.name}>
                          <td className="px-4 py-3">{manufacturer.name}</td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {manufacturer.countryCode}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">
                            {manufacturer.manufacturerCode}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border-blue-100 bg-blue-50/90 shadow-xl shadow-blue-100/40">
              <CardContent className="space-y-6 p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900">
                    Buenas practicas finales
                  </h3>
                  <p className="mt-2 text-sm text-blue-900/80">
                    Documenta el control de calidad de cada lote para mantener la
                    trazabilidad exigida por la direccion facultativa.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-blue-900/80">
                  {verificationNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button
                    asChild
                    className="bg-blue-900 px-6 py-5 text-white hover:bg-blue-950"
                  >
                    <Link href="/contacto">
                      Necesito ayuda con certificados
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  );
}

