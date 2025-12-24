export default function Servicios() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-slate-900 to-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-slate-300 text-lg">
            Soluciones tecnológicas diseñadas para escalar tu negocio.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Desarrollo de Software
            </h3>
            <p className="text-slate-800">
              Sistemas web, aplicaciones a medida y automatización de procesos
              orientados a eficiencia y crecimiento.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Infraestructura TI
            </h3>
            <p className="text-slate-800">
              Diseño e implementación de infraestructura segura, escalable
              y preparada para el futuro.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Soporte & Consultoría
            </h3>
            <p className="text-slate-800">
              Soporte técnico especializado y asesoría estratégica para
              garantizar continuidad operativa.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
