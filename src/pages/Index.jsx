import React from "react";

import Nav from "../component/Nav";
import Hero from "../component/Hero";
import About from "../component/About";
import Event from "../component/Event";
import Pemateri from "../component/Pemateri";
import Timeline from "../component/Timeline";
import Faq from "../component/Faq";
import Sosmed from "../component/Sosmed";
import Footer from "../component/Footer";

function Home() {
  return (
    <main className="bg-myText dark:bg-myBg">
      <Nav />
      <Hero />
      <About />
      <Event />
      <Pemateri />
      <Timeline />
      <Faq />
      <Sosmed />
      <Footer />
    </main>
  );
}

export default Home;
