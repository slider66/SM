'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navigationItems = [
    { href: "/#productos", label: "Productos" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/recomendaciones", label: "Recomendaciones" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="/suministros-merle-logo.png"
            alt="Suministros Merle Logo"
            className="h-12 w-auto max-w-[180px] object-contain"
          />
          <span className="ml-3 text-xl font-bold text-gray-900">
            Hierros Merle
          </span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950">
            Solicitar Presupuesto
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Alternar menú de navegación"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t bg-white md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 transition-colors hover:text-blue-600"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t px-3 pb-4 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950"
              onClick={closeMenu}
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
