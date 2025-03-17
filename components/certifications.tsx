"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Development",
      issuer: "Udemy",
    },
    {
      id: 2,
      title: "SEO",
      issuer: "Jaipuria School Of Business",
    },
    {
      id: 3,
      title: "Basics of SQL",
      issuer: "Geekster",
    },
    {
      id: 4,
      title: "Basics of Docker",
      issuer: "Great Learning",
    },
    {
      id: 5,
      title: "Cloud Foundations",
      issuer: "Great Learning",
    },
    {
      id: 6,
      title: "Kafka Basics",
      issuer: "Great Learning",
    },
    {
      id: 7,
      title: "Building And Consuming Rest Apis",
      issuer: "Geekster",
    },
    {
      id: 8,
      title: "Prompt Engineering",
      issuer: "Geekster",
    },
    {
      id: 9,
      title: "Redis Basics",
      issuer: "Geekster",
    },
  ];

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
    <section id="certifications" className="py-20 bg-background/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I am committed to continuous learning and professional development.
            Here are some of my certifications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={item}>
              <Card className="bg-background/50 border-primary/20 h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
