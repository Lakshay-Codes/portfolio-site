
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import POR from "@/components/POR";
import Education from "@/components/Education";
// import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Education />
      <POR />
      {/* <Experience /> */}
      <Skills />
      <Footer />
    </main>
  );
}
