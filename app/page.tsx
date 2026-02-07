import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen">
      <Background />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <ResumeSection />
      </div>
    </div>
  );
}
