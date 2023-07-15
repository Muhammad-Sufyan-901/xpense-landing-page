import React from "react";

// import components
import { Header, Hero, Overview, Brands, Features, Product, Pricing, Testimonials, Cta, Footer } from "./components";

// import aos
import Aos from "aos";

// import aos css
import "aos/dist/aos.css";

function App() {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Features />
      <Product />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
