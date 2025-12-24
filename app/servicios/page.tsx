import Image from "next/image";

export default function Servicios() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">

        <Image
          src="/fondobithaus.jpg"
          alt="Fondo Bithaus"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Nuestros Servicios
          </h1>
          <p className="text-lg drop-shadow-md">
            Soluciones tecnológicas diseñadas para escalar tu negocio.
          </p>
        </div>

      </section>

      {/* CONTENIDO */}
      <section className="pt-24 pb-24 bg-slate-50">
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
