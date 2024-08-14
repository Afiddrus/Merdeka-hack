"use client";
import Button from "../ui/button";
import Container from "../ui/container";
import { motion } from "framer-motion";
import { createContext } from "react";
import { fadeIn } from "../ui/variant";
import DataImages from "@/app/data/data-image";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Container>
        <section className="min-h-screen lg:flex-row flex flex-col lg:items-center lg:justify-between justify-start lg:px-12 md:px-8 sm:px-6 px-6 py-8">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="left lg:mt-12"
          >
            <div className="flex items-center  px-6 h-10 rounded-full border max-w-max text-sm font-semibold text-[#FF2323]">
              Indenpendecy Day
            </div>
            <div className="mt-6">
              <h1 className="text-5xl  leading-tight lg:max-w-[400px] md:max-w-max md:flex flex-wrap max-w-[400px] text-[#555555] font-bold">
                Semangat <span className="text-[#FF2323]">Juang</span> Tidak
                Boleh <span className="text-[#FF2323]">Padam</span>
              </h1>
            </div>
            <p className="text-sm max-w-md text-gray-500 mt-4">
              kita harus terus menjaga dan meneruskan semangat perjuangan yang
              telah ditunjukkan oleh para pahlawan dan pelopor perubahan.{" "}
              <span className="text-black font-bold">
                Perjuangan belum berakhir
              </span>
            </p>
            <div className="mt-6">
              <Button name="Scroll Down" />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="right lg:mt-12"
          >
            <div>
              <Image
                src={DataImages.AnimasiUi}
                className="lg:block hidden w-[450px]"
                alt="ui"
              />
              <Image
                src={DataImages.Uimobile}
                className="lg:hidden  block"
                alt="ui"
              />
            </div>
          </motion.div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
