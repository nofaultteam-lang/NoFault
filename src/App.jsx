import React from "react";
import Hero from "./components/component/Hero";
import Services from "./components/component/Services";
import Portfolio from "./components/component/Portfolio";
import AboutUs from "./components/component/AboutUs";
import WhyChooseUs from "./components/component/WhyChooseUs";
import ContactUs from "./components/component/ContactUs";
import Footer from "./components/component/Footer";
import WhatsAppButton from "./components/component/WhatsAppButton";
import Testimonials from "./components/component/Testimonials";

function App() {
  return (
    <>
      
      <Hero />
      <Services />
      <WhatsAppButton />
      <Portfolio />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
