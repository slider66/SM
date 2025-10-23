'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackToHomeButton() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      aria-label="Volver a la página de inicio"
      className="fixed bottom-6 left-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-700 shadow-lg transition-all duration-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:bottom-10 md:left-10"
    >
      <ArrowLeft className="h-6 w-6" />
    </Link>
  );
}
