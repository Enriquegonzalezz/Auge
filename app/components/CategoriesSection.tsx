"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface Category {
  name: string;
  description: string;
  materials?: string[];
  karats?: string[];
  gems?: string[];
}

const categories: Category[] = [
  {
    name: "Anillos de Grados",
    description:
      "Creamos joyas, fusionando la materia artesanal con los materiales más sublimes para inmortalizar sus momentos especiales.",
    materials: ["Oro amarillo", "Oro blanco", "Oro rosado", "Plata Ley .925"],
    karats: ["10k", "14k", "18k"],
    gems: ["Diamante", "Rubí", "Esmeralda", "Zafiro", "Alejandrita", "Circón"],
  },
  {
    name: "Anillos de compromisos",
    description: "Anillos únicos para momentos inolvidables.",
    materials: ["Oro amarillo", "Oro blanco", "Platino"],
    karats: ["14k", "18k"],
    gems: ["Diamante", "Zafiro", "Esmeralda"],
  },
  {
    name: "Aros de Boda",
    description: "Simboliza tu amor eterno con nuestros aros de boda.",
    materials: ["Oro amarillo", "Oro blanco", "Platino"],
    karats: ["14k", "18k"],
  },
  {
    name: "Cadenas",
    description: "Cadenas elegantes para cualquier ocasión.",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Pulseras",
    description: "Pulseras únicas que expresan tu estilo.",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Esclavas",
    description: "Esclavas de lujo para ocasiones especiales.",
    materials: ["Oro amarillo", "Oro blanco", "Platino"],
    karats: ["14k", "18k"],
  },
  {
    name: "Dijes",
    description: "Dijes personalizados con significado.",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Fabricación personalizada",
    description: "Diseñamos tu joya única a medida.",
    materials: ["Oro amarillo", "Oro blanco", "Oro rosado", "Platino"],
    karats: ["10k", "14k", "18k"],
  },
];

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileContentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    [contentRefs, mobileContentRefs].forEach((refs) => {
      Object.keys(refs.current).forEach((id) => {
        const element = refs.current[id];
        if (!element) return;

        if (id === selectedCategory) {
          gsap.to(element, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(element, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      });
    });
  }, [selectedCategory]);

  return (
    <section id="categorias" className="relative w-screen min-h-screen md:h-screen flex flex-col md:items-center md:justify-center bg-[#1B1B1D] p-4 md:p-8">
      {/* Top Image - Desktop only */}
      <div className="hidden md:block absolute top-0 left-0 right-0 w-full h-[50%] z-0">
        <Image
          src="/hero auge.png"
          alt="Top banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile Expandible List */}
      <div className="sm:hidden w-full flex flex-col gap-3 z-10 px-4 py-8">
        <h2 className="text-white text-2xl font-light mb-2">Categorías</h2>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`transition-all duration-300 ${
              selectedCategory === category.name
                ? "bg-[#1E1E20] text-white z-10"
                : "bg-[#1E1E20] text-white hover:bg-[#2A2A2D] z-20"
            }`}
            style={{
              borderRadius: "12px 20px 20px 12px",
              width: "fit-content",
            }}
          >
            <button
              onClick={() => setSelectedCategory(category.name)}
              className="text-left text-sm px-7 py-4 font-medium"
            >
              {category.name}
            </button>
            <div
              ref={(el) => {
                mobileContentRefs.current[category.name] = el;
              }}
              className="overflow-hidden pointer-events-none"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="mt-2 px-7 pb-4 space-y-3 pointer-events-none">
                <p className="text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.materials && (
                    <div>
                      <h4 className="text-xs font-semibold mb-1">Materiales:</h4>
                      <ul className="list-disc list-inside text-sm space-y-0.5">
                        {category.materials.map((material, idx) => (
                          <li key={idx}>{material}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.karats && (
                    <div>
                      <h4 className="text-xs font-semibold mb-1">Kilataje:</h4>
                      <ul className="list-disc list-inside text-sm space-y-0.5">
                        {category.karats.map((karat, idx) => (
                          <li key={idx}>{karat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.gems && (
                    <div>
                      <h4 className="text-xs font-semibold mb-1">Gemas:</h4>
                      <ul className="list-disc list-inside text-sm space-y-0.5">
                        {category.gems.map((gem, idx) => (
                          <li key={idx}>{gem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href="https://api.whatsapp.com/message/BHBXUFOB7IERH1?autoload=1&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block px-7 py-2 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-center mt-3 pointer-events-auto"
                >
                  CONTÁCTANOS
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex flex-col md:flex-row w-full max-w-7xl md:h-[80vh] bg-[#0F0F0F] rounded-3xl z-1 overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col md:h-full">
          <h2 className="text-white text-2xl font-light mb-6">Categorías</h2>
          <div className="flex flex-col gap-3 overflow-y-auto flex-1 pr-2" style={{ scrollbarWidth: "thin", scrollbarColor: "#2A2A2D transparent" }}>
            {categories.map((category) => (
              <div
                key={category.name}
                className={`transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-[#1E1E20]  text-white z-10"
                    : "bg-[#1E1E20] text-white hover:bg-[#2A2A2D] z-20"
                }`}
                style={{
                  borderRadius: "12px 20px 20px 12px",
                  width: "fit-content",
                }}
              >
                <button
                  onClick={() => setSelectedCategory(category.name)}
                  className="text-left text-sm px-7 py-4 w-full"
                >
                  {category.name}
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[category.name] = el;
                  }}
                  className="overflow-hidden pointer-events-none"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="mt-2 px-7 pb-4 space-y-3 pointer-events-none">
                    <p className="text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex justify-around gap-4 ">
                      {category.materials && (
                        <div>
                          <h4 className="text-xs font-semibold mb-1">Materiales:</h4>
                          <ul className="list-disc list-inside text-sm space-y-0.5">
                            {category.materials.map((material, idx) => (
                              <li key={idx}>{material}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="w-px h-36 bg-zinc-600"></div>

                      {category.karats && (
                        <div>
                          <h4 className="text-xs text-left font-semibold mb-1">Kilataje:</h4>
                          <ul className="list-disc list-inside text-sm space-y-0.5">
                            {category.karats.map((karat, idx) => (
                              <li key={idx}>{karat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="w-px h-36 bg-zinc-600"></div>

                      {category.gems && (
                        <div>
                          <h4 className="text-xs font-semibold mb-1">Gemas:</h4>
                          <ul className="list-disc list-inside text-sm space-y-0.5">
                            {category.gems.map((gem, idx) => (
                              <li key={idx}>{gem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <a
                      href="https://api.whatsapp.com/message/BHBXUFOB7IERH1?autoload=1&app_absent=0&utm_source=ig"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block px-5 py-2 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto text-center"
                    >
                      CONTÁCTANOS
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-1/2 relative items-center justify-center p-8">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/cardimage.png"
              alt={selectedCategory}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
