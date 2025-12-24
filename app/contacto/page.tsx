export default function Contacto() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6">
            Hablemos
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Cuéntanos tu idea o necesidad y te ayudamos a convertirla
            en una solución tecnológica real.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* INFO */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Información de contacto
            </h2>

            <p className="text-slate-800 mb-8 text-lg">
              Nuestro equipo está disponible para evaluar tu proyecto,
              resolver dudas y acompañarte en todo el proceso.
            </p>

            <div className="space-y-6 text-slate-900">
              <div>
                <p className="font-semibold">Correo</p>
                <p>hola@bithaus.cl</p>
              </div>

              <div>
                <p className="font-semibold">Ubicación</p>
                <p>Tomás Moro 1075, Of 1502 Las Condes</p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border">

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
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
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
