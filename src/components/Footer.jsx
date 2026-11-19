const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block">
              <h2 className="text-xl font-semibold tracking-wide">
                Florencia Durso
              </h2>

              <p className="mt-1 text-xs font-medium tracking-[0.2em] text-teal-400 uppercase">
                Odontología
              </p>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Cuidamos tu sonrisa con dedicación, compromiso y atención
              personalizada.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Navegación</h3>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-teal-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contacto</h3>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              ¿Tenés alguna consulta? Comunicate con nosotros y conocé la
              disponibilidad de turnos.
            </p>

            <a
              href="#contacto"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:text-teal-300">
              Solicitar información
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Odontología Florencia Durso. Todos los
            derechos reservados.
          </p>

          <a
            href="#inicio"
            className="text-xs text-slate-500 transition hover:text-teal-400">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
