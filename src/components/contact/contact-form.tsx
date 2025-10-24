"use client"

import { useCallback, useMemo, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type SubmissionStatus = "idle" | "success" | "error"

interface ContactFormValues {
  fullName: string
  email: string
  phone?: string
  company?: string
  message: string
}

interface ContactFormProps {
  className?: string
  submitLabel?: string
  successMessage?: string
  errorMessage?: string
  onSubmit?: (values: ContactFormValues) => Promise<void> | void
}

const honeypotFieldName = "projectTimeline"

const contactSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, { message: "Introduce tu nombre completo." })
      .max(80, { message: "El nombre no puede superar los 80 caracteres." }),
    email: z
      .string()
      .trim()
      .email({ message: "Introduce un correo electronico valido." })
      .max(120, {
        message: "El correo electronico no puede superar los 120 caracteres.",
      }),
    phone: z
      .string()
      .trim()
      .max(25, { message: "El telefono no puede superar los 25 caracteres." })
      .regex(/^\+?[0-9()\-\s]*$/, {
        message: "Solo numeros, espacios, guiones y parentesis.",
      })
      .optional()
      .or(z.literal("")),
    company: z
      .string()
      .trim()
      .max(80, { message: "La empresa no puede superar los 80 caracteres." })
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(20, {
        message: "Cuentanos con al menos 20 caracteres como podemos ayudarte.",
      })
      .max(1000, {
        message: "El mensaje no puede superar los 1000 caracteres.",
      }),
    [honeypotFieldName]: z
      .string()
      .max(0)
      .optional()
      .or(z.literal("")),
  })
  .transform((values) => ({
    ...values,
    phone: values.phone?.trim() ? values.phone.trim() : undefined,
    company: values.company?.trim() ? values.company.trim() : undefined,
    [honeypotFieldName]: "",
  }))

type RawContactSchema = z.input<typeof contactSchema>
type SanitizedContactSchema = z.output<typeof contactSchema>

const defaultValues: RawContactSchema = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  [honeypotFieldName]: "",
}

export function ContactForm({
  className,
  submitLabel = "Enviar consulta",
  successMessage = "Gracias por contactarnos. Te responderemos muy pronto.",
  errorMessage = "No hemos podido enviar tu mensaje. Intentalo de nuevo en unos segundos.",
  onSubmit,
}: ContactFormProps): JSX.Element {
  const [status, setStatus] = useState<SubmissionStatus>("idle")
  const [feedback, setFeedback] = useState<string>("")

  const form = useForm<RawContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues,
  })

  const isSubmitting = form.formState.isSubmitting

  const handleSubmit = useCallback(
    async (values: RawContactSchema) => {
      if (values[honeypotFieldName]) {
        setStatus("error")
        setFeedback("Se ha detectado actividad sospechosa. Si eres humano, vuelve a intentarlo.")
        return
      }

      try {
        const sanitized: SanitizedContactSchema = contactSchema.parse(values)

        const payload: ContactFormValues = {
          fullName: sanitized.fullName,
          email: sanitized.email,
          phone: sanitized.phone,
          company: sanitized.company,
          message: sanitized.message,
        }

        const submitHandler = onSubmit ?? (async () => {})
        await submitHandler(payload)

        setStatus("success")
        setFeedback(successMessage)
        form.reset(defaultValues)
      } catch (error) {
        setStatus("error")
        setFeedback(errorMessage)
      }
    },
    [errorMessage, form, onSubmit, successMessage]
  )

  const statusMessage = useMemo(() => {
    if (status === "idle" || !feedback) {
      return null
    }

    return (
      <p
        className={cn(
          "text-sm font-medium",
          status === "success" ? "text-primary" : "text-destructive"
        )}
        role={status === "success" ? "status" : "alert"}
      >
        {feedback}
      </p>
    )
  }, [feedback, status])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("grid gap-6 rounded-xl border border-border bg-card p-6 shadow-sm", className)}
        noValidate
      >
        <input
          aria-hidden="true"
          className="absolute left-[-10000px] h-0 w-0 opacity-0"
          tabIndex={-1}
          autoComplete="off"
          {...form.register(honeypotFieldName)}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="name"
                    placeholder="Ej. Laura Martinez"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electronico</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    placeholder="tu@empresa.com"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono (opcional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="tel"
                    placeholder="+34 600 000 000"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa (opcional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  autoComplete="off"
                  placeholder="Describe tu proyecto, volumen aproximado y plazos."
                  rows={6}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {statusMessage}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Enviando..." : submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}




