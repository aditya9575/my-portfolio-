"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiBootstrap,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiNginx,
  SiDocker,
  SiLinux,
  SiVite,
  SiNodedotjs,
  SiGithub,
  SiVercel,
  SiPostman,
  SiCanva,
  SiFigma,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { FaSearchengin } from "react-icons/fa"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
        { name: "REST API", icon: <TbApi /> },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Git/GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Thunder Client", icon: <TbApi className="text-[#6B57FF]" /> },
      ],
    },
    {
      name: "Other Skills",
      skills: [
        { name: "SEO", icon: <FaSearchengin /> },
        { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "MongoDB Compass", icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-background/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I have experience working with a variety of technologies and tools in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 border-primary/20 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center text-center gap-2"
                        variants={item}
                      >
                        <div className="text-3xl">{skill.icon}</div>
                        <span className="text-sm">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

