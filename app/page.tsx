import NavbarComponent from "@/components/layout/Navbar";
import FooterComponent from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TikTokFunnelSection from "@/components/sections/TikTokFunnelSection";
import ContactSection from "@/components/sections/ContactSection";
import ChatWidget from "@/components/ui/ChatWidget";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <>
      <NavbarComponent links={navLinks} resumeDownloadUrl="/resume/lawrence-cortes-resume.pdf" />

      <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <HeroSection
          headline="Building thoughtful software, brands, and AI experiences."
          subheadline="I design and build fast, user-centered products that blend modern web development, creative brand thinking, and practical AI solutions."
          ctaPrimaryLabel="View Projects"
          ctaPrimaryHref="#projects"
          ctaSecondaryLabel="Let's Connect"
          ctaSecondaryHref="#contact"
        />

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <CertificationsSection />
        <TikTokFunnelSection />
        <ContactSection />
      </main>

      <FooterComponent />
      <ChatWidget
        systemPromptSummary="Lawrence is a software developer and brand designer based in Cebu, Philippines, focused on Next.js, AI products, and portfolio storytelling."
        placeholderText="Ask about projects, skills, or availability..."
      />
    </>
  );
}
