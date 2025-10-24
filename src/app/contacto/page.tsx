import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { ProtectedMailLink } from "@/components/protected-mail-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ContactChannel = {
  label: string;
  value: string;
  description: string;
  icon: typeof Phone;
  href?: string;
};

type SupportDetail = {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
};

export const metadata: Metadata = {
  title: "Contacto | Suministros Merle",
  description:
    "Contacta con el equipo de Suministros Merle para coordinar pedidos de ferralla industrial, soporte tecnico y visitas a fabrica en Paracuellos de Jarama.",
};

const contactChannels: ContactChannel[] = [
  {
    label: "Telefono",
    value: "91 658 0977",
    description: "Lunes a viernes 08:00-13:00 y 14:00-17:00",
    icon: Phone,
  },
  {
    label: "Correo",
    value: "hierrosmerle@merle.es",
    description: "Respondemos en menos de 24 horas laborales",
    icon: Mail,
    href: "mailto:hierrosmerle@merle.es?subject=Solicitud%20de%20ferralla%20Merle",
  },
  {
    label: "Ubicacion",
    value: "Avenida General 1, 28860 Paracuellos de Jarama",
    description: "Visitas bajo cita previa",
    icon: MapPin,
    href: "https://maps.app.goo.gl/QZr7ijH8Y7C1",
  },
];

const supportDetails: SupportDetail[] = [
  {
    title: "Planos digitales",
    description: "Aceptamos archivos CYPE, IFC y DWG para despiece rapido.",
    icon: ShieldCheck,
  },
  {
    title: "Coordinacion de obra",
    description: "Planificamos entregas secuenciadas con etiquetado por lote.",
    icon: Clock,
  },
  {
    title: "Fabrica propia",
    description: "Produccion completa en Paracuellos con control de calidad.",
    icon: Building2,
  },
];

export default function ContactPage(): JSX.Element {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24 text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-blue-600/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/10 text-white backdrop-blur">
            Contacto directo
          </Badge>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Coordinamos tu suministro de ferralla industrial
            </h1>
            <p className="text-lg text-blue-100">
              Comparte tus planos y plazos de obra. Nuestro equipo tecnico
              prepara el despiece, planifica produccion y organiza las entregas
              etiquetadas para cada fase de tu proyecto.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
                <Clock className="h-4 w-4" />
                Respuesta en 24 h laborales
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
                <ShieldCheck className="h-4 w-4" />
                Control completo en fabrica
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
                <ArrowRight className="h-4 w-4" />
                Proyectos residenciales e industriales
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl border-blue-100/60 bg-white/95 shadow-2xl shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Informacion de contacto
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Llamanos, escribe al correo o coordina una visita a la fabrica
                  en Paracuellos de Jarama.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid gap-6">
                  {contactChannels.map((channel) => (
                    <div
                      key={channel.label}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <channel.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                          {channel.label}
                        </p>
                        {channel.href ? (
                          channel.label === "Correo" ? (
                            <div className="mt-1 text-lg font-semibold text-slate-900">
                              <ProtectedMailLink
                                user="hierrosmerle"
                                domain="merle.es"
                                subject="Solicitud de ferralla Merle"
                                className="text-slate-900 hover:text-blue-700"
                              />
                            </div>
                          ) : (
                            <a
                              href={channel.href}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-1 text-lg font-semibold text-slate-900 hover:text-blue-700"
                            >
                              {channel.value}
                            </a>
                          )
                        ) : (
                          <p className="mt-1 text-lg font-semibold text-slate-900">
                            {channel.value}
                          </p>
                        )}
                        <p className="mt-1 text-sm text-slate-600">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-6">
                  <p className="text-sm uppercase tracking-wide text-blue-800">
                    Documentacion recomendada
                  </p>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>Planos estructurales y listados de barras exportados desde CYPE.</li>
                    <li>Volumen aproximado por fase y fechas objetivo de hormigonado.</li>
                    <li>Requisitos especiales de transporte, descarga o etiquetado.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-slate-800/50 bg-slate-900/80 p-6 text-slate-100 shadow-xl shadow-slate-900/40 backdrop-blur">
                <h2 className="text-2xl font-semibold">
                  Compromiso con tu obra
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Fabricamos todas las armaduras en nuestra nave. Coordinamos
                  los lotes con etiquetas resistentes, guias de montaje y
                  seguimiento en tiempo real de cada entrega.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {supportDetails.map((detail) => (
                    <div
                      key={detail.title}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                        <detail.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {detail.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="rounded-3xl border-slate-800/60 bg-slate-900/80 text-white shadow-xl shadow-slate-900/40">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold">
                    Envia tu consulta
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Completa el formulario y adjunta toda la informacion
                    relevante. Te responderemos con un plan de suministro
                    personalizado.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm className="bg-white text-slate-900" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


