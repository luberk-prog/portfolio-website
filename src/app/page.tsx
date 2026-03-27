import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section id="about" title="About Me" subtitle="A bit about who I am and what I do.">
        <About />
      </Section>

      <Section id="skills" title="My Toolkit" subtitle="Technologies and tools I use to bring ideas to life." className="bg-white/5">
        <Skills />
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work and personal projects.">
        <Projects />
      </Section>

      <Section id="experience" title="Education & Experience" subtitle="My academic journey and professional growth." className="bg-white/5">
        <Experience />
      </Section>

      <Section id="contact" title="Get In Touch" subtitle="Let's discuss how we can work together.">
        <Contact />
      </Section>
    </>
  );
}
