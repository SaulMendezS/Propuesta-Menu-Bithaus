export default function Proyectos() {
  return (
    <main>
      {/* HERO */}
      <section className="py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Proyectos destacados
            </h1>

            <p className="text-lg text-slate-900 max-w-xl leading-relaxed">
              Desarrollamos soluciones tecnológicas enfocadas en resolver
              problemas reales, mejorar procesos y escalar negocios.
            </p>
          </div>

          {/* BLOQUE VISUAL */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10">
            <ul className="space-y-4 text-slate-900 text-lg font-medium">
              <li>✔ Proyectos a medida</li>
              <li>✔ Enfoque empresarial</li>
              <li>✔ Tecnología moderna</li>
              <li>✔ Implementaciones seguras</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            {/* PROYECTO */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition">
              <div className="h-12 w-12 rounded-xl bg-blue-600 mb-6 flex items-center justify-center text-white font-bold">
                SW
              </div>

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Plataforma de Gestión Interna
              </h3>

              <p className="text-slate-900 leading-relaxed mb-6">
                Sistema web desarrollado para automatizar procesos
                administrativos y mejorar la eficiencia operativa.
              </p>

              <span className="text-sm font-semibold text-blue-600">
                Desarrollo de Software
              </span>
            </div>

            {/* PROYECTO */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition">
              <div className="h-12 w-12 rounded-xl bg-blue-600 mb-6 flex items-center justify-center text-white font-bold">
                IT
              </div>

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Infraestructura Empresarial
              </h3>

              <p className="text-slate-900 leading-relaxed mb-6">
                Diseño e implementación de infraestructura de redes,
                servidores y seguridad corporativa.
              </p>

              <span className="text-sm font-semibold text-blue-600">
                Infraestructura TI
              </span>
            </div>

            {/* PROYECTO */}
            <div className="group bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-2xl transition">
              <div className="h-12 w-12 rounded-xl bg-blue-600 mb-6 flex items-center justify-center text-white font-bold">
                UX
              </div>

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Portal de Clientes
              </h3>

              <p className="text-slate-900 leading-relaxed mb-6">
                Plataforma digital con acceso personalizado para mejorar
                la comunicación y experiencia del cliente.
              </p>

              <span className="text-sm font-semibold text-blue-600">
                Experiencia de Usuario
              </span>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
