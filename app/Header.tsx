"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/bithaus.png"
            alt="Bithaus"
            width={230}
            height={75}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-base md:text-lg font-semibold">

          <Link
            href="/"
            className={`transition-colors ${pathname === "/" ? "text-blue-600" : "text-slate-900 hover:text-blue-600"}`}
          >
            Inicio
          </Link>

          <Link
            href="/servicios"
            className={`transition-colors ${pathname === "/servicios" ? "text-blue-600" : "text-slate-900 hover:text-blue-600"}`}
          >
            Servicios
          </Link>

          <Link
            href="/proyectos"
            className={`transition-colors ${pathname === "/proyectos" ? "text-blue-600" : "text-slate-900 hover:text-blue-600"}`}
          >
            Proyectos
          </Link>

          <Link
            href="/nosotros"
            className={`transition-colors ${pathname === "/nosotros" ? "text-blue-600" : "text-slate-900 hover:text-blue-600"}`}
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className={`ml-4 px-4 py-2 rounded-xl transition ${pathname === "/contacto" ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Contacto
          </Link>

        </nav>

        {/* BOTÓN MOBILE */}
        <button className="md:hidden border rounded-xl px-3 py-2 text-slate-900">
          ☰
        </button>

      </div>
    </header>
  );
}
