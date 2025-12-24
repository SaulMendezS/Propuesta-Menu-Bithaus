import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header"; // Componente cliente del navbar

export const metadata: Metadata = {
  title: "Bithaus",
  description: "Software, infraestructura TI y consultoría empresarial",
  icons: {
    icon: "/favicon.png",     // favicon principal
    shortcut: "/favicon.png", // acceso directo opcional
  },
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
        <Header />

        {/* CONTENIDO */}
        {children}

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-300">
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
