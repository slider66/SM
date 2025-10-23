import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Recomendaciones | Identificar marcas de corrugado",
  description:
    "Guía práctica de Suministros Merle para reconocer las marcas de acero corrugado, garantizar la trazabilidad y localizar certificados de cada colada.",
};

const steelGrades = ["B400S", "B500S", "B400SD", "B500SD"];

const countryCodes = [
  {
    region:
      "Alemania, Australia, Eslovaquia, Polonia y República Checa",
    code: "1",
  },
  {
    region:
      "Bélgica, Países Bajos, Luxemburgo y Suiza",
    code: "2",
  },
  {
    region: "Francia y Hungría",
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
    region:
      "Dinamarca, Estonia, Finlandia, Letonia, Lituania, Noruega y Suecia",
    code: "6",
  },
  {
    region: "España y Portugal",
    code: "7",
  },
  {
    region: "Chipre y Grecia",
    code: "8",
  },
  {
    region: "Otros países diferentes a los anteriores",
    code: "9",
  },
];

const manufacturers = [
  { name: "Siderúrgica Sevillana, S.A.", countryCode: "7", manufacturerCode: "4" },
  { name: "Compañía Española de Laminación, S.L. (CELSA)", countryCode: "7", manufacturerCode: "5" },
  { name: "Corrugados Azpeitia, S.L.", countryCode: "7", manufacturerCode: "7" },
  { name: "Corrugados Getafe, S.L.", countryCode: "7", manufacturerCode: "11" },
  { name: "Megasas Siderúrgica, S.L.", countryCode: "7", manufacturerCode: "17" },
  { name: "Nervacero, S.A.", countryCode: "7", manufacturerCode: "18" },
  { name: "Celsa Atlantic, S.L.", countryCode: "7", manufacturerCode: "23" },
  { name: "SN MAIA Siderúrgia Nacional, S.A.", countryCode: "7", manufacturerCode: "32" },
  { name: "SN SEIXAL Siderúrgia Nacional, S.A.", countryCode: "7", manufacturerCode: "34" },
];

export default function RecomendacionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white -mt-16 md:-mt-20 pt-20 md:pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-700">
            Recomendaciones
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Cómo identificar marcas de acero corrugado
          </h1>
          <p className="text-lg text-slate-600">
            Garantizar la trazabilidad del corrugado es esencial para certificar
            la calidad estructural de la obra. En Suministros Merle insistimos en solicitar
            siempre el certificado de colada y revisar las marcas presentes en
            cada lote recibido.
          </p>
        </header>

        <Card>
          <CardHeader className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-xl font-semibold text-slate-800">
              Resumen rápido
            </CardTitle>
            <div className="flex gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Dificultad estimada
                </p>
                <p className="text-2xl font-bold text-slate-900">40%</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Garantía de trazabilidad
                </p>
                <p className="text-2xl font-bold text-blue-700">100%</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-600">
            <p>
              La lectura de las corrugas permite conocer el país, el fabricante y la
              calidad del acero. El proceso completo requiere entre 3 y 4 minutos por
              barra, pero evita incidencias durante la puesta en obra.
            </p>
            <p>
              Recuerda: no aceptes material sin el certificado correspondiente.
            </p>
          </CardContent>
        </Card>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Inicio de lectura
          </h2>
          <p className="text-slate-600">
            En las barras rectas, la identificación comienza con un sector donde
            algunas corrugas aparecen engrosadas. La dirección de lectura se
            marca con una corruga normal situada entre dos engrosadas que queda a
            la izquierda del observador.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Calidades normalizadas de acero corrugado
          </h2>
          <p className="text-slate-600">
            En función de la geometría de las corrugas se distinguen las
            siguientes calidades certificadas:
          </p>
          <div className="flex flex-wrap gap-2">
            {steelGrades.map((grade) => (
              <span
                key={grade}
                className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700"
              >
                {grade}
              </span>
            ))}
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-600">
            <li>
              En el acero <strong>B500S</strong> las corrugas mantienen una
              inclinación uniforme.
            </li>
            <li>
              En el acero <strong>B400S</strong> destaca un mayor espacio entre
              corrugas.
            </li>
            <li>
              En las calidades <strong>SD</strong> la identificación puede
              realizarse en cualquiera de los sectores.
            </li>
          </ul>
          <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/identificar-marcas.webp"
              alt="Referencia visual de marcas en barras corrugadas B400S, B500S, B400SD y B500SD."
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-4 py-2 text-sm text-slate-600">
              Distribución de corrugas para localizar el inicio de lectura, el país y el código de fabricante en cada calidad.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              País de fabricación
            </h2>
            <p className="text-slate-600">
              Tras el inicio de lectura, un grupo de corrugas normales delimitado
              por una corruga engrosada identifica el país de origen. España
              utiliza el código <strong>7</strong>.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    País / Región
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Código
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {countryCodes.map((entry) => (
                  <tr key={entry.code}>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {entry.region}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                      {entry.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Código de fabricante (España)
            </h2>
            <p className="text-slate-600">
              Cada fabricante dispone de un número asignado por AENOR. Se marca
              mediante un segundo bloque de corrugas normales, limitado por otra
              corruga engrosada. En determinadas referencias, las decenas y
              unidades se separan con una corruga engrosada intermedia.
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Fabricante
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Código país
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Código fabricante
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {manufacturers.map((manufacturer) => (
                  <tr key={manufacturer.name}>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {manufacturer.name}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                      {manufacturer.countryCode}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                      {manufacturer.manufacturerCode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Buenas prácticas finales
          </h2>
          <p className="text-slate-600">
            El código marcado en la barra coincide con el certificado emitido
            para cada colada según UNE. Asegúrate de contrastar ambos registros
            antes de instalar las armaduras.
          </p>
          <Card className="border-blue-100 bg-blue-50">
            <CardContent className="space-y-3 py-6">
              <p className="text-base font-semibold text-blue-800">
                Siempre pida el certificado correspondiente a la colada del corrugado.
              </p>
              <p className="text-sm text-blue-700">— A. Merle</p>
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            ¿Necesitas ayuda para interpretar las marcas o solicitar certificados?{" "}
            <Link href="/#contacto" className="text-blue-700 underline decoration-blue-200 underline-offset-4">
              Contacta con nuestro equipo técnico
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
