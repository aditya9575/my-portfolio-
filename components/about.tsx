"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-xl overflow-hidden border-4 border-primary/20">
              <Image
                src="/resume-pic.png?height=400&width=400"
                alt="Aditya Mehto"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              MERN Stack Web Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate web developer with expertise in the MERN stack.
              My journey in web development started with a curiosity to build
              interactive and user-friendly applications that solve real-world
              problems.
            </p>
            <p className="text-muted-foreground mb-6">
              I have experience working as a Web Developer Intern at Oasis
              Infobyte, where I honed my skills in building responsive and
              scalable web applications. I enjoy the process of transforming
              ideas into functional and aesthetically pleasing websites. Beyond
              my internship, I have cultivated a robust freelance career,
              collaborating with diverse clients to deliver custom web
              solutions. This experience has allowed me to refine my ability to
              manage projects independently, communicate effectively with
              clients, and consistently deliver high-quality, tailored web
              applications that meet their specific needs.
            </p>
            {/* <p className="text-muted-foreground mb-6">
              Beyond my internship, I have cultivated a robust freelance career,
              collaborating with diverse clients to deliver custom web
              solutions. This experience has allowed me to refine my ability to
              manage projects independently, communicate effectively with
              clients, and consistently deliver high-quality, tailored web
              applications that meet their specific needs.
            </p> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      Master of Computer Applications, Sikkim Manipal University
                    </li>
                    <li>
                      Bachelor of Commerce, The Bhopal School Of Social Sciences
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Web Developer Intern, Oasis Infobyte</li>
                  </ul>
                  <hr /> <br />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Freelance Web Developer, Self-Employed</li>
                    <li>Developed and deployed responsive web applications.</li>
                    <li>
                      Implemented client-specific features and functionalities.
                    </li>
                    <li>Provided ongoing website maintenance and support.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
