import Image from "next/image";
import Hero from "../components/Hero/hero";

import "../styles/hero.css";
import Sejarah from "../components/sejarah/sejarah";
import Pahlawan from "../components/pahlawan/pahlawan";
import Footer from "../components/footer";
import Event from "../components/event/event";
import Contact from "../contact/contact";
import { Toaster } from 'react-hot-toast';

export default function Home() {

    
  return (
    <main className=" overflow-x-hidden">
      <Toaster/>
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="sejarah">
        <Sejarah />
      </section>
      <section id="pahlawan">
        <Pahlawan />
      </section>
      <section id="event">
        <Event />
      </section>
    </main>
  );
}
