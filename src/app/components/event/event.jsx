"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import { EventName, EventImage } from "@/app/data/data-event";

export default function Carousel({
  autoSlide = true, // Mengaktifkan auto-slide secara default
  autoSlideInterval = 3000, // Interval auto-slide (dalam milidetik)
}) {
  const [curr, setCurr] = useState(0);

  // Menggunakan EventImage untuk slides dan EventName untuk alt dan caption
  const slides = EventImage.map((eventImage, index) => ({
    src: eventImage.img,
    alt: EventName[index]?.name || "",
    caption: EventName[index]?.name || ""
  }));

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval); // Membersihkan interval saat komponen tidak aktif
  }, [autoSlide, autoSlideInterval, curr]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Teks di atas carousel */}
      <div className="text-center mb-8 p-4">
        <div className="border border-red-500 text-red-500 px-4 py-2 rounded-full shadow-lg inline-block mb-4">
          <p className="text-lg font-bold">EVENT</p>
        </div>
        <div className="text-[#000000] mb-4">
          <p className="text-4xl font-bold mb-2">Senyum Semangat, Juara Bersama</p>
          <p className="text-lg text-[#585454]">
            Mari rayakan kemerdekaan Indonesia dengan semangat yang membara! Lomba 17 Agustus ini tidak hanya sekadar perlombaan, tetapi juga ajang untuk mempererat tali silaturahmi dan menumbuhkan rasa cinta tanah air.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-700"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full flex flex-col items-center justify-center">
              <div className="relative w-full pb-[56.25%] max-w-[90%] mx-auto">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="absolute top-0 left-0 object-cover rounded-xl"
                />
              </div>
              <p className="text-2xl font-bold text-[#000000] mt-4">{slide.caption}</p>
            </div>
          ))}
        </div>

        {/* Tombol navigasi */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-transform hover:scale-110"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-transform hover:scale-110"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Indikator posisi slide */}
        <div className="absolute bottom-4 right-0 left-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                w-3 h-3 rounded-full transition-all
                ${curr === i ? "bg-red-500 w-6" : "bg-gray-400"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
