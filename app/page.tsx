export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        
        {/* DECORACIÓN */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Soluciones Tecnológicas
            </span>

            <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight">
              Tecnología que impulsa <br />
              el crecimiento de tu empresa
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              En Bithaus desarrollamos soluciones de software, infraestructura TI
              y soporte especializado para empresas que buscan crecer de forma
              segura y eficiente.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/contacto"
                className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
              >
                Contáctanos
              </a>

              <a
                href="/servicios"
                className="border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* VISUAL / PLACEHOLDER IMAGEN */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-xl">
              <p className="text-sm text-slate-400 mb-4">
                Servicios destacados
              </p>
              <ul className="space-y-3 text-sm">
                <li>✔ Desarrollo Web & Sistemas</li>
                <li>✔ Infraestructura TI</li>
                <li>✔ Soporte Técnico Empresarial</li>
                <li>✔ Consultoría Tecnológica</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Qué hacemos
            </span>

            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Nuestros servicios
            </h2>

            <p className="text-slate-800 text-lg">
              Ofrecemos soluciones tecnológicas integrales adaptadas a las
              necesidades de cada empresa.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD */}
            <div className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-600/40 hover:shadow-2xl transition">
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center mb-6 text-2xl">
                💻
              </div>

              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition">
                Desarrollo de Software
              </h3>

              <p className="text-slate-800">
                Aplicaciones web y sistemas a medida, diseñados para optimizar
                procesos y mejorar la productividad.
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-600/40 hover:shadow-2xl transition">
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center mb-6 text-2xl">
                🖧
              </div>

              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition">
                Infraestructura TI
              </h3>

              <p className="text-slate-800">
                Implementación y mantención de infraestructura segura,
                escalable y moderna.
              </p>
            </div>

            {/* CARD */}
            <div className="group bg-white p-10 rounded-2xl border border-slate-200 hover:border-blue-600/40 hover:shadow-2xl transition">
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center mb-6 text-2xl">
                🛠️
              </div>

              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition">
                Soporte y Consultoría
              </h3>

              <p className="text-slate-800">
                Soporte técnico especializado y asesoría estratégica para
                acompañar el crecimiento de tu negocio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 to-black text-white overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            ¿Listo para llevar tu tecnología al siguiente nivel?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Conversemos y diseñemos juntos una solución tecnológica alineada
            a los objetivos de tu empresa.
          </p>

          <a
            href="/contacto"
            className="inline-block bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
          >
            Hablar con un especialista
          </a>
        </div>
      </section>

    </main>
  );
}
