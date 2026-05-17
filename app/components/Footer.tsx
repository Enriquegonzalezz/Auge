import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto" className="w-full bg-[#0F0F0F] px-6 pt-12 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-light text-center mb-8">
          Contáctanos
        </h2>

        {/* Main card */}
        <div className="bg-[#1A1A1A] rounded-t-xl px-8 py-10">
          {/* Header: Tagline */}
          <p className="text-white text-base md:text-lg font-light text-center mb-8">
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
              <span className="text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                Teléfono
              </span>
              <span className="text-white text-sm">0414-3412189</span>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                WhatsApp
              </span>
              <span className="text-white text-sm">0414-3412189</span>
            </div>

            {/* Correo */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                Correo
              </span>
              <span className="text-white text-sm">joyeriaauge@gmail.com</span>
            </div>

            {/* Redes Sociales */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-zinc-400 text-xs font-semibold tracking-wide uppercase">
                Redes Sociales
              </span>
              <span className="text-white text-sm">@auge_vzla</span>
            </div>
          </div>

          {/* Bottom border + Copyright */}
          <div className="border-t border-zinc-700 pt-4">
            <p className="text-zinc-500 text-xs text-center">
              Auge 2026, todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
