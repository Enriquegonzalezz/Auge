import Image from "next/image";

const VIDEO_URL = "/AUGE_HD.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/20">
        <nav className="flex items-center justify-center gap-6 md:gap-16 py-5 px-4 md:px-8">
          <a
            href="#"
            className="hidden md:block text-white text-sm tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#categorias"
            className="hidden md:block text-white text-sm tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors"
          >
            Productos
          </a>
          <Image src="/logo.svg" alt="AUGE" width={55} height={34} priority style={{ width: "auto", height: "auto" }} />
          <a
            href="#galeria"
            className="hidden md:block text-white text-sm tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors"
          >
            Galería
          </a>
          <a
            href="#contacto"
            className="hidden md:block text-white text-sm tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs tracking-[0.6em] uppercase font-light mb-3">
          AUGE
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.12em] uppercase mb-3 px-4">
          LA IMPORTANCIA DEL DETALLE
        </h1>
        <p className="text-[10px] tracking-[0.5em] uppercase font-light">
          VALENCIA-CARABOBO
        </p>
      </div>

      {/* Footer Button */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
        <button className="border border-white/80 text-white text-xs tracking-[0.35em] uppercase py-3 px-10 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          EXPLORAR
        </button>
      </div>
    </section>
  );
}
