"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface Category {
  name: string;
  description: string;
  image: string;
  materials?: string[];
  karats?: string[];
  gems?: string[];
}

const categories: Category[] = [
  {
    name: "Anillos de Grados",
    description:
      "Creamos joyas, fusionando la materia artesanal con los materiales más sublimes para inmortalizar sus momentos especiales.",
    image: "/cardimage.png",
    materials: ["Oro amarillo", "Oro blanco", "Oro rosado", "Plata Ley .925"],
    karats: ["10k", "14k", "18k"],
    gems: ["Diamante", "Rubí", "Esmeralda", "Zafiro", "Alejandrita", "Circón"],
  },
  {
    name: "Anillos de compromisos",
    description: "Anillos únicos para momentos inolvidables.",
    image: "/Anillos compromiso AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Platino"],
    karats: ["14k", "18k"],
    gems: ["Diamante", "Zafiro", "Esmeralda"],
  },
  // {
  //   name: "Aros de Boda",
  //   description: "Simboliza tu amor eterno con nuestros aros de boda.",
  //   image: "/cardimage.png",
  //   materials: ["Oro amarillo", "Oro blanco", "Platino"],
  //   karats: ["14k", "18k"],
  // },
  {
    name: "Cadenas",
    description: "Cadenas elegantes para cualquier ocasión.",
    image: "/Cadenas AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Pulseras",
    description: "Pulseras únicas que expresan tu estilo.",
    image: "/Pulseras AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Esclavas",
    description: "Esclavas de lujo para ocasiones especiales.",
    image: "/Eslcavas AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Platino"],
    karats: ["14k", "18k"],
  },
  {
    name: "Dijes",
    description: "Dijes personalizados con significado.",
    image: "/Cruz AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Plata"],
    karats: ["10k", "14k", "18k"],
  },
  {
    name: "Fabricación personalizada",
    description: "Diseñamos tu joya única a medida.",
    image: "/Avion AUGE.png",
    materials: ["Oro amarillo", "Oro blanco", "Oro rosado", "Platino"],
    karats: ["10k", "14k", "18k"],
  },
];

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [displayedImage, setDisplayedImage] = useState(categories[0].image);
  const [imageOpacity, setImageOpacity] = useState(1);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileContentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const newImage = categories.find((c) => c.name === selectedCategory)?.image ?? "/cardimage.png";
    setImageOpacity(0);
    const timer = setTimeout(() => {
      setDisplayedImage(newImage);
      setImageOpacity(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

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
        <h2 className="text-white text-3xl md:text-4xl font-light mb-2">Categorías</h2>
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
              className="text-left text-base px-7 py-4 font-medium w-full flex items-center justify-between"
            >
              <span className="flex items-center gap-1">
                {category.name}
                <span className={`text-sm transition-transform duration-300 ${selectedCategory === category.name ? 'rotate-90' : 'rotate-0'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>
            <div
              ref={(el) => {
                mobileContentRefs.current[category.name] = el;
              }}
              className="overflow-hidden pointer-events-none"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="mt-2 px-7 pb-4 space-y-3 pointer-events-none">
                <p className="text-base leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.materials && (
                    <div>
                      <h4 className="text-base font-semibold mb-1">Materiales:</h4>
                      <ul className="list-disc list-inside text-base space-y-0.5">
                        {category.materials.map((material, idx) => (
                          <li key={idx}>{material}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.karats && (
                    <div>
                      <h4 className="text-base font-semibold mb-1">Kilataje:</h4>
                      <ul className="list-disc list-inside text-base space-y-0.5">
                        {category.karats.map((karat, idx) => (
                          <li key={idx}>{karat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.gems && (
                    <div>
                      <h4 className="text-base font-semibold mb-1">Gemas:</h4>
                      <ul className="list-disc list-inside text-base space-y-0.5">
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
                  className="w-full inline-block px-7 py-2 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-center mt-3 pointer-events-auto"
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
          <h2 className="text-white text-3xl md:text-4xl font-light mb-6">Categorías</h2>
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
                  className="text-left text-base px-7 py-4 font-medium w-full flex items-center justify-between"
                >
                  <span className="flex items-center gap-1">
                    {category.name}
                    <span className={`text-sm transition-transform duration-300 ${selectedCategory === category.name ? 'rotate-0' : 'rotate-90'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[category.name] = el;
                  }}
                  className="overflow-hidden pointer-events-none"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="mt-2 px-7 pb-4 space-y-3 pointer-events-none">
                    <p className="text-base leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex justify-around gap-4 ">
                      {category.materials && (
                        <div>
                          <h4 className="text-base font-semibold mb-1">Materiales:</h4>
                          <ul className="list-disc list-inside text-base space-y-0.5">
                            {category.materials.map((material, idx) => (
                              <li key={idx}>{material}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="w-px h-36 bg-zinc-600"></div>

                      {category.karats && (
                        <div>
                          <h4 className="text-base text-left font-semibold mb-1">Kilataje:</h4>
                          <ul className="list-disc list-inside text-base space-y-0.5">
                            {category.karats.map((karat, idx) => (
                              <li key={idx}>{karat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="w-px h-36 bg-zinc-600"></div>

                      {category.gems && (
                        <div>
                          <h4 className="text-base font-semibold mb-1">Gemas:</h4>
                          <ul className="list-disc list-inside text-base space-y-0.5">
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
                      className="mt-2 inline-block px-5 py-2 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto text-center"
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
              src={displayedImage}
              alt={selectedCategory}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ opacity: imageOpacity, transition: "opacity 0.3s ease" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
