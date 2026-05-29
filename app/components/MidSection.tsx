"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const galleryItems = [
  { id: 1, src: "/imag/c1.png", alt: "Joya 1" },
  { id: 2, src: "/imag/c2.png", alt: "Joya 2" },
  { id: 3, src: "/imag/c3.png", alt: "Joya 3" },
  { id: 4, src: "/imag/c4.png", alt: "Joya 4" },
  { id: 5, src: "/imag/MANO_JELI_AUGE.png", alt: "Mano Jeli Auge" },
  { id: 6, src: "/imag/Mesa_de_trabajo_10.png", alt: "Joya 6" },
  { id: 7, src: "/imag/Mesa_de_trabajo_4.png", alt: "Joya 7" },
  { id: 8, src: "/imag/Mesa_de_trabajo_7.png", alt: "Joya 8" },
];

export default function MidSection() {
  const scrollHelperRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const helper = scrollHelperRef.current;
    if (!helper) return;

    // Animate scroll helper with continuous loop
    gsap.to(helper, {
      x: 10,
      duration: 0.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Fade out after 5 seconds
    gsap.to(helper, {
      opacity: 0,
      duration: 0.5,
      delay: 5,
      pointerEvents: "none",
    });
  }, []);

  return (
    <div id="galeria" className="w-screen">
      {/* Top half: Image with card overlay */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/midsection.png"
          alt="Absolutamente inigualable"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* White card overlay */}
        <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="bg-white p-5 md:p-[40px] w-[75vw] md:max-w-[17vw] md:w-auto shadow-md rounded-[4px]">
          <h2 className="text-black text-2xl font-semibold leading-tight mb-2">
            Absolutamente inigualable
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            Diseñamos momentos que no se repiten, detalles que no se olvidan.
          </p>
          <a
            href="https://api.whatsapp.com/message/BHBXUFOB7IERH1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black text-xs tracking-widest uppercase px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 inline-block text-center"
          >
            CONTÁCTANOS
          </a>
        </div>
        </div>
        </div>
      </div>

      {/* Bottom half: Gallery carousel */}
      <div className="w-full h-[50vh] md:h-[60vh] bg-white flex flex-col justify-center py-6">
        <div className="w-full max-w-[1200px] mx-auto pl-4 md:px-10 flex flex-col h-full justify-center">
        <h3 className="text-black text-3xl md:text-4xl font-light text-center ">Galería</h3>
        
        {/* Scroll Helper - Desktop only */}
        <div className="hidden md:flex justify-center mb-4">
          <div
            ref={scrollHelperRef}
            className="flex items-center gap-2 text-zinc-500 text-xs"
          >
            <span>Desliza</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 relative rounded-sm overflow-hidden bg-zinc-100 w-[200px] h-[180px] md:w-[300px] md:h-[270px] cursor-pointer"
              onClick={() => {
                setSelectedImage(item.src);
                setIsModalOpen(true);
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 200px, 300px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => {
            setIsModalOpen(false);
            setSelectedImage(null);
          }}
        >
          <div
            className="flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ring-1 ring-white/10"
            style={{ maxWidth: "min(560px, 88vw)", maxHeight: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-t-2xl overflow-hidden" style={{ maxHeight: "75vh" }}>
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                style={{ maxHeight: "75vh" }}
              />
            </div>
            <div className="flex items-center justify-between px-6 py-3 bg-[#1A1A1A] rounded-b-2xl">
              <span className="text-white text-sm">Galería</span>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedImage(null);
                }}
                className="text-white text-sm hover:text-zinc-300 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
