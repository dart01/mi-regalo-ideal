import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Catalog from "./components/Catalog";
import Occasions from "./components/Occasions";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Stats />
      <Catalog />
      <Occasions />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}