import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="w-full bg-[#0F0F0F] px-6 pt-12 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-light text-center mb-8">
          Contáctanos
        </h2>

        {/* Main card */}
        <div className="bg-[#1A1A1A] rounded-t-xl px-8 py-10">
          {/* Header: Tagline */}
          <p className="text-white text-lg md:text-xl font-light text-center mb-8">
            Haz tus sueños realidad, contáctanos
          </p>

          {/* Contact items: flex justify-around */}
          <div className="flex flex-col sm:flex-row justify-around items-start sm:items-center gap-8 mb-8">
            {/* Logo - hidden on mobile */}
            <div className="hidden sm:flex flex-col items-center gap-2">
              <Image src="/logo.svg" alt="AUGE" width={50} height={32} />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-sm font-semibold tracking-wide uppercase">
                Teléfono
              </span>
              <a
                href="https://api.whatsapp.com/message/BHBXUFOB7IERH1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base hover:text-zinc-300 transition-colors"
              >
                0414-3412189
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-sm font-semibold tracking-wide uppercase">
                WhatsApp
              </span>
              <a
                href="https://api.whatsapp.com/message/BHBXUFOB7IERH1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base hover:text-zinc-300 transition-colors"
              >
                0414-3412189
              </a>
            </div>

            {/* Correo */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-sm font-semibold tracking-wide uppercase">
                Correo
              </span>
              <a
                href="mailto:joyeriaauge@gmail.com"
                className="text-white text-base hover:text-zinc-300 transition-colors"
              >
                joyeriaauge@gmail.com
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-sm font-semibold tracking-wide uppercase">
                Redes Sociales
              </span>
              <a
                href="https://instagram.com/auge_vzla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base hover:text-zinc-300 transition-colors"
              >
                @auge_vzla
              </a>
            </div>
          </div>

          {/* Bottom border + Copyright */}
          <div className="border-t border-zinc-700 pt-4">
            <p className="text-zinc-500 text-sm text-center">
              Auge 2026, todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
