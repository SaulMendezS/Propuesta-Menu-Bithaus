import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bithaus | Soluciones Tecnológicas",
  description: "Software, infraestructura TI y consultoría empresarial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/bithaus.png"
                alt="Bithaus"
                width={140}
                height={40}
                priority
                className="h-8 w-auto md:h-10"
              />
            </Link>

            {/* NAV */}
            <nav className="flex gap-6 text-sm font-semibold text-slate-900">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Inicio
              </Link>

              <Link href="/servicios" className="hover:text-blue-600 transition-colors">
                Servicios
              </Link>

              <Link href="/proyectos" className="hover:text-blue-600 transition-colors">
                Proyectos
              </Link>

              <Link href="/nosotros" className="hover:text-blue-600 transition-colors">
                Nosotros
              </Link>

              <Link href="/contacto" className="hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-300 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
            
            <div>
              <h4 className="font-bold text-white mb-2">Bithaus</h4>
              <p>Soluciones tecnológicas para empresas modernas.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Servicios</h4>
              <ul className="space-y-1">
                <li>Desarrollo de Software</li>
                <li>Infraestructura TI</li>
                <li>Soporte & Consultoría</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 leading-relaxed">
                <li>📧 hola@bithaus.cl</li>
                <li>📞 +56 9 9419 1736</li>
                <li>
                  📍 Tomás Moro 1075, Of 1502<br />
                  Las Condes, Santiago de Chile
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center text-xs py-4">
            © {new Date().getFullYear()} Bithaus
          </div>
        </footer>

      </body>
    </html>
  );
}