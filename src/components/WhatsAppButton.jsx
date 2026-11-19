function WhatsAppButton() {
  const whatsappNumber = "5491170153125";

  const message = encodeURIComponent("Hola, quisiera realizar una consulta.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-green-600 sm:right-8 sm:bottom-8 sm:size-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.91-5.34 11.92-11.91a11.84 11.84 0 0 0-3.45-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.92 9.9Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
