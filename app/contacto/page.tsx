export default function Contacto() {
  return (
    <main className="bg-white">
      <section className="relative min-h-[55vh] flex items-center text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>

        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-blue-600/25 blur-[110px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-indigo-500/20 blur-[110px] rounded-full"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.1)_80%,transparent_100%)]"></div>
        </div>

        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl w-fit">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
              Contacto
            </span>

            <h1 className="text-5xl font-extrabold mt-3">
              Hablemos
            </h1>

            <p className="text-slate-300 text-lg mt-4 max-w-2xl">
              Cuéntanos tu idea o necesidad y nuestro equipo te ayudará a convertirla
              en una solución tecnológica real y eficiente.
            </p>
          </div>
        </div>

      </section>

      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Información de contacto
            </h2>

            <p className="text-slate-700 mb-8 text-lg">
              Nuestro equipo está disponible para evaluar tu proyecto,
              resolver dudas y acompañarte en todo el proceso.
            </p>

            <div className="space-y-6 text-slate-900">

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center text-2xl">
                  📧
                </span>
                <div>
                  <p className="font-semibold">Correo</p>
                  <p className="text-slate-700">hola@bithaus.cl</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center text-2xl">
                  📍
                </span>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-slate-700">
                    Tomás Moro 1075, Of 1502<br />
                    Las Condes, Santiago, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-700 flex items-center justify-center text-2xl">
                  📞
                </span>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-slate-700">
                    +56 9 9419 1736
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envíanos un mensaje
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nombre"
                className="w-full border border-slate-300 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border border-slate-300 rounded-xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                className="w-full border border-slate-300 rounded-xl p-4 h-36 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
              >
                Enviar mensaje
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
