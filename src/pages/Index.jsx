import React from "react";

import Nav from "../component/Nav";
import Hero from "../component/Hero";
import About from "../component/About";
import Event from "../component/Event";
import Pemateri from "../component/Pemateri";

function Home() {
  return (
    <main className="bg-myBg">
      <Nav />
      <Hero />
      <About />
      <Event />
      <Pemateri />
    </main>
  );
}

export default Home;
