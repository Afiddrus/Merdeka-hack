"use client";

import { Herogambar, HeroName } from "@/app/data/data-pahlawan";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Pahlawan() {
  const [hoveredHero, setHoveredHero] = useState(1); // Set default hovered hero to ID 1

  useEffect(() => {
    // Do nothing, we don't need to set the state again
  }, []);

  const handleHover = (id) => {
    setHoveredHero(id);
  };

  const backgroundImage = hoveredHero
    ? Herogambar.find((hero) => hero.id === hoveredHero).img
    : images.DefaultBackgroundImg; // default background image

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-screen z-0"
      >
        <Image
          src={backgroundImage}
          alt="Background Image"
          className="object-cover w-full h-screen absolute top-0 left-0 z-0 object-top"
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        />
      </motion.div>

      {/* Hero Names */}
      <div className="relative h-screen z-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center  px-12 py-2">
        {HeroName.map((item, index) => (
          <motion.div
            key={item.id}
            className="border border-gray-400  lg:mb-4 shadow-lg lg:h-[270px] lg:py-0  h-max py-8 w-full relative"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={() => handleHover(item.id)}
          >
            <div className="w-full lg:h-[270px] lg:py-0  h-max py-8  absolute bg-white opacity-0 lg:opacity-20"></div>
            <div className="flex items-center justify-center inset-y-0 h-full">
              <p className="text-2xl text-white font-semibold">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
