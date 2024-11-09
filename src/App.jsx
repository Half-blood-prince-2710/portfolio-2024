// import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden text-white/70 bg-black"
>
      <Header />
       <Hero />
       <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
