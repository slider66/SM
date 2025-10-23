'use client'

import { useMemo } from "react";
import Image from "next/image";

const PHONE_NUMBER = "635627002";
const MESSAGE = "Hola, me pongo en contacto a trav\u00e9s de la web merle.es:";

export function WhatsAppButton() {
  const href = useMemo(() => {
    const encodedMessage = encodeURIComponent(MESSAGE);
    return `https://wa.me/34${PHONE_NUMBER}?text=${encodedMessage}`;
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-[65] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg ring-4 ring-[#25d366]/25 transition-transform duration-200 hover:scale-110 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 md:bottom-10 md:right-10"
    >
      <Image
        src="/whatsapp.webp"
        alt="WhatsApp"
        width={40}
        height={40}
        className="h-10 w-10"
        priority
      />
    </a>
  );
}
