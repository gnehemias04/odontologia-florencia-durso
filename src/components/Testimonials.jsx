const testimonials = [
  {
    name: "Delia Borba Ramirez",
    date: "Hace un año",
    text: "Súper agradecida con la doctora Florencia, por el carisma, amabilidad y buena atención. Siempre pendiente de la evolución de mi hijo. Más que recomendable.",
  },
  {
    name: "Belen Alvarez",
    date: "Hace 2 años",
    text: "Primer consulta para mi hijo de 4 años y la verdad que tenía más miedo yo q él y la Dra una genia total. Mi hijo ni una queja! La próxima iré con total confianza.",
  },
  {
    name: "Camila Lozzia",
    date: "Hace un año",
    text: "Excelente atención. Flor es súper amable y profesional, te hace sentir cómoda en todo momento y explica cada paso del tratamiento con mucha paciencia. Se nota que le importa que sus pacientes estén tranquilos y entiendan lo que les hace. La recomiendo 100%!",
  },
  {
    name: "Luciana Maggi",
    date: "Hace 8 meses",
    text: "Excelente odonto, muy amorosa y amable! La boca de mi peque quedó de 10, siempre le explicó todo lo que le iba a hacer y fue muy atenta con el 💖 Te queremos Flor, la recomendamos al 💯…",
  },
];

function Testimonials() {
  return (
    <section id="opiniones" className="bg-[#F4FAFA] px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Opiniones de pacientes
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            La confianza de nuestros pacientes es lo más importante
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Conocé las experiencias de quienes ya confiaron en la atención de la
            Dra. Florencia Durso.
          </p>

          {/* Google rating */}
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-8 py-5 shadow-sm sm:flex-row sm:gap-5">
            <div className="text-4xl font-bold text-slate-900">5.0</div>

            <div className="text-center sm:text-left">
              <div className="flex justify-center gap-1 text-amber-400 sm:justify-start">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5">
                    <path d="m9.049 2.927 1.902 3.854 4.253.618-3.077 3 .726 4.236L9.049 12.64l-3.804 1.995.726-4.236-3.077-3 4.253-.618 1.902-3.854Z" />
                  </svg>
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Valoración en Google
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-4xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Stars */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4">
                    <path d="m9.049 2.927 1.902 3.854 4.253.618-3.077 3 .726 4.236L9.049 12.64l-3.804 1.995.726-4.236-3.077-3 4.253-.618 1.902-3.854Z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 flex-1 text-sm leading-relaxed text-slate-600">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-8 border-t border-slate-100 pt-5">
                <h3 className="font-semibold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {testimonial.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Google link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Las opiniones reflejan experiencias compartidas por pacientes en
            Google.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
