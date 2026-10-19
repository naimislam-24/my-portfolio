import Banner from "./components/homepage/Banner";
import AboutSection from "./components/shared/AboutSection";
import ContactSection from "./components/shared/ContactSection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import ProjectsSection from "./components/shared/ProjectsSection";
import SkillsSection from "./components/shared/SkillsSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      {/* <div className="h-80 w-80 bg-[#0B101D]">
        <h2>Home Page</h2>
      </div> */}
    </div>
  );
}
