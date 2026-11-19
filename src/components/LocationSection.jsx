function LocationSection() {
  return (
    <section id="ubicacion" className="bg-[#F4FAFA] px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Location information */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Dónde encontrarnos
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Estamos cerca para cuidar tu sonrisa
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            Encontrá nuestro consultorio y conocé cómo llegar para tu próxima
            consulta odontológica.
          </p>

          {/* Address */}
          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Ubicación</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Odontología Florencia Durso
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Horarios de atención
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Consultá los horarios disponibles por WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Directions button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Odontolog%C3%ADa+Florencia+Durso"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800">
            Cómo llegar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </a>
        </div>

        {/* Google Maps */}
        <div className="overflow-hidden rounded-4xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.8023414242557!2d-58.38306262065429!3d-34.914417399999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2bf77e97c759%3A0x565a7e5124ea4dbe!2sOdontolog%C3%ADa%20Florencia%20Durso!5e1!3m2!1ses!2sar!4v1795130779150!5m2!1ses!2sar"
            title="Ubicación de Odontología Florencia Durso en Google Maps"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block"
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
