'use client'

import { type ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";

type ProtectedMailLinkProps = {
  user: string;
  domain: string;
  subject?: string;
  className?: string;
  children?: ReactNode;
};

export function ProtectedMailLink({
  user,
  domain,
  subject,
  className,
  children,
}: ProtectedMailLinkProps) {
  const email = useMemo(() => `${user}@${domain}`, [user, domain]);

  const handleClick = () => {
    const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    window.location.href = `mailto:${email}${params}`;
  };

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center text-blue-700 font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
          className,
        )}
        aria-label={`Enviar correo a ${email}`}
      >
        {children ?? email}
      </button>
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="pointer-events-none absolute left-[-9999px] top-auto h-0 w-0 opacity-0"
        name={`contact-${user}`}
      />
    </span>
  );
}
