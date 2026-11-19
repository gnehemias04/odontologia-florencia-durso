import "./App.css";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import LocationSection from "./components/LocationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  /*
  components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
  */

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <LocationSection />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
