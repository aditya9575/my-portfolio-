"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 flex flex-col justify-center items-start max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <span className="text-primary font-mono text-sm md:text-base">
            Hello, I&apos;m
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4 text-foreground">
            Aditya Mehto
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
            MERN Stack Web Developer
          </h2>
          <p className="text-lg max-w-2xl mb-8 text-muted-foreground">
            Passionate about transforming business requirements into elegant
            technical solutions. I specialize in building responsive,
            user-friendly web applications using modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/Aditya Resume pdf.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/aditya9575"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.linkedin.com/in/aditya-m-0bb92b110/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://x.com/AdityaMehto3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://leetcode.com/u/adityamehto19/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
