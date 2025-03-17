"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Quiz App (Quizzy)",
      description:
        "A quiz application with user authentication, multiple-choice questions, and performance results with interactive graphs.",
      image: "/quizzy project.png?height=400&width=600",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "fullstack",
      links: {
        live: "https://mern-based-quiz-app-rvud.vercel.app/",
        github: "https://github.com/adityamehto/quizzy",
      },
    },
    {
      id: 2,
      title: "URL-Shortener-App (LinkSnip)",
      description:
        "A backend focused website for shortening URLs, making them easier to share and track.",
      image: "/url shortner project.png?height=400&width=600",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "fullstack",
      links: {
        live: "https://linksnip.vercel.app",
        github: "https://github.com/adityamehto/linksnip",
      },
    },
    {
      id: 3,
      title: "Restaurant App (FoodGenie) - User Panel",
      description:
        "A React-based restaurant web app allowing for menu browsing, order placement, and live status updates.",
      image: "/food genie project.png?height=400&width=600",
      tags: ["React", "Firebase"],
      category: "frontend",
      links: {
        live: "https://foodgenieuserpart.vercel.app/",
        github: "https://github.com/adityamehto/foodgenie-user",
      },
    },
    {
      id: 4,
      title: "Restaurant App (FoodGenie) - Admin Panel",
      description:
        "The admin panel for the FoodGenie app, enabling menu management, order processing, and business analytics.",
      image: "/food genie project.png?height=400&width=600",
      tags: ["React", "Firebase"],
      category: "frontend",
      links: {
        live: "https://foodgenieadminpart.vercel.app/",
        github: "https://github.com/adityamehto/foodgenie-admin",
      },
    },
    {
      id: 5,
      title: "Music Player App (Symphony Stream)",
      description:
        "A React-based music player web app allowing for users to browse music, and listen to previews.",
      image: "/react music player project.png?height=400&width=600",
      tags: ["React", "Limited Time Usage Music Api"],
      category: "frontend",
      links: {
        live: "https://symphony-stream-the-react-based-music-finder-player-app.vercel.app/",
        github: "https://github.com/adityamehto/foodgenie-admin",
      },
    },
    {
      id: 6,
      title: "Health Calculator App (Fab Wellness)",
      description:
        "A React-based health calculator web app , to track your daily fitness goals",
      image: "/react health calculator project.png?height=400&width=600",
      tags: ["React"],
      category: "frontend",
      links: {
        live: "https://fab-wellness-your-health-guardian.vercel.app/",
        github: "https://github.com/adityamehto/foodgenie-admin",
      },
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project
            demonstrates different skills and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 p-1 bg-muted rounded-lg">
            {["all", "fullstack", "frontend", "backend"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab === "all" ? "All Projects" : `${tab} Projects`}
              </Button>
            ))}
          </div>
        </div>

        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden bg-background/50 border-primary/20 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div> */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial={false} // Prevent re-initializing the animation
          animate="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              layout // <-- This ensures a smooth transition between tabs
            >
              <Card className="overflow-hidden bg-background/50 border-primary/20 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    priority={project.id === 1}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
