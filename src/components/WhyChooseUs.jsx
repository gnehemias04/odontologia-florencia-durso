const reasons = [
  {
    number: "01",
    title: "Atención personalizada",
    description:
      "Cada paciente es único. Buscamos brindar una atención cercana, escuchando sus necesidades y expectativas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Compromiso con tu salud",
    description:
      "Promovemos el cuidado de la salud bucal y la importancia de mantener controles odontológicos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12 3 7.5 3v5.25c0 4.5-3.25 7.75-7.5 9.75-4.25-2-7.5-5.25-7.5-9.75V6L12 3Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Un espacio de confianza",
    description:
      "Queremos que cada visita sea una experiencia agradable, con comunicación clara y un trato cordial.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9.75h7.5m-7.5 3h4.5m-6.75 7.5 3.75-3h6.75a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3Z"
        />
      </svg>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 size-28 rounded-4xl bg-teal-100 sm:-left-6 sm:-top-6" />

          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
            alt="Atención en un consultorio odontológico"
            className="relative z-10 h-80 w-full rounded-4xl object-cover shadow-lg sm:h-105 lg:h-130"
          />

          <div className="absolute -bottom-6 right-4 z-20 rounded-2xl bg-teal-700 px-6 py-5 text-white shadow-lg sm:right-8">
            <p className="text-2xl font-semibold">Tu sonrisa</p>
            <p className="mt-1 text-sm text-teal-50">
              merece atención y cuidado
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="pt-6 lg:pt-0">
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Tu salud bucal merece atención y dedicación
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Creemos que una buena experiencia odontológica comienza con la
            confianza, la comunicación y el compromiso con cada paciente.
          </p>

          <div className="mt-10 space-y-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  {reason.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800">
            Quiero hacer una consulta
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
