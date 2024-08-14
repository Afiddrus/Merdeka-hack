"use client";
import DataImages from "@/app/data/data-image";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { createContext } from "react";
import { fadeIn } from "@/app/components/ui/variant";
import { Playfair_Display, Lora } from "next/font/google";
import DataSejarah from "@/app/data/data-sejarah";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Sesuaikan berat font sesuai kebutuhan
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Sesuaikan berat font sesuai kebutuhan
});

export default function Sejarah() {
  return (
    <main className="min-h-screen">
      <div className="z">
        <div className=" px-8 py-8  relative">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-4xl text-3xl font-bold text-black text-center"
          >
            SEJARAH <span className="text-[#FF2323]">INDONESIA</span>
          </motion.h1>
          {DataSejarah.map((data) => (
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              key={data.id}
              className="flex flex-col md:flex-col lg:flex-row items-center bg-gray-50 justify-center lg:gap-8 mt-12 pt-4 pb-6 border-b border-gray-300"
            >
              <div className="flex lg:flex-col flex-row justify-center items-center ">
                <h2 className="text-3xl text-gray-700 font-semibold">1062</h2>
                <h2 className="text-3xl text-gray-700 font-semibold">-</h2>
                <h2 className="text-3xl text-gray-700 font-semibold">1945</h2>
              </div>
              <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
                <Image
                  src={data.image}
                  alt="VOC Image"
                  className="mt-6 lg:w-[250px] w-full object-cover h-48"
                />
                <div className="gap-y-4">
                  <div className={playfair.className}>
                    <h3 className="lg:text-4xl text-xl font-normal text-gray-800">
                      {data.title}
                    </h3>
                  </div>
                  <div className={lora.className}>
                    <p className="text-gray-600 mt-4 text-xs">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
