import { ProtectedMailLink } from "@/components/protected-mail-link";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <img
                src="/suministros-merle-logo.png"
                alt="Suministros Merle Logo"
                className="h-12 w-auto max-w-[180px] object-contain"
              />
              <span className="ml-3 text-xl font-bold">Hierros Merle</span>
            </div>
            <p className="text-gray-400">
              Fabricación industrial de acero y metales en Paracuellos de Jarama
              desde 1993.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Zapatas y Pilotes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pilares y Vigas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Muros y Pantallas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Piscinas y Fosos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Metal Line Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Armaduras Prefabricadas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Corte Láser/Plasma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Interpretación CYPE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Entrega a Obra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Asesoramiento Técnico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+34916581651" className="hover:text-blue-400">
                  916 581 651
                </a>
              </li>
              <li>
                <ProtectedMailLink
                  user="hierrosmerle"
                  domain="merle.es"
                  className="hover:text-blue-400"
                />
              </li>
              <li>Paracuellos de Jarama, Madrid</li>
              <li className="mt-2 text-sm">
                Lunes a Viernes: 8:00-13:00 y 14:00-17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Suministros Merle, S.L. - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
