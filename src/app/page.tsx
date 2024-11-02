import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/Footer"
import Image from "next/image";


export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     <About/>
     <Main/>
     <Projects/>
     <Contact/>
     <Footer/>
     </div>
  );
}
