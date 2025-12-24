export default function Nosotros() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Sobre Bithaus
          </h1>

          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Somos una empresa tecnológica enfocada en crear soluciones sólidas,
            seguras y escalables para empresas que buscan crecer con confianza.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Quiénes somos
            </h2>

            <p className="text-slate-800 mb-4 leading-relaxed">
              En <strong>Bithaus</strong> combinamos tecnología, experiencia y
              visión estratégica para ayudar a empresas a optimizar sus procesos
              y construir infraestructuras tecnológicas confiables.
            </p>

            <p className="text-slate-800 leading-relaxed">
              Trabajamos de forma cercana con nuestros clientes, entendiendo sus
              necesidades y proponiendo soluciones reales, eficientes y
              alineadas a los objetivos de su negocio.
            </p>
          </div>

          {/* BLOQUE VISUAL */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10">
            <ul className="space-y-4 text-slate-900 text-lg font-medium">
              <li>✔ Enfoque empresarial</li>
              <li>✔ Soluciones a medida</li>
              <li>✔ Seguridad y escalabilidad</li>
              <li>✔ Acompañamiento continuo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Compromiso
              </h3>
              <p className="text-slate-800">
                Nos involucramos en cada proyecto como si fuera propio,
                asegurando resultados de calidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Confianza
              </h3>
              <p className="text-slate-800">
                Construimos relaciones duraderas basadas en transparencia y
                comunicación constante.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Innovación
              </h3>
              <p className="text-slate-800">
                Aplicamos tecnologías modernas para entregar soluciones
                eficientes y escalables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Construyamos soluciones juntos
          </h2>

          <p className="text-slate-200 max-w-2xl mx-auto mb-10">
            Si buscas un partner tecnológico confiable, en Bithaus estamos listos
            para ayudarte.
          </p>

          <a
            href="/contacto"
            className="inline-block bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </main>
  );
}
