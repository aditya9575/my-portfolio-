import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ThreeBackground from "@/components/three-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}

