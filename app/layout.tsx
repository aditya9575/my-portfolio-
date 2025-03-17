import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditya Mehto | MERN Stack Web Developer",
  description:
    "Personal portfolio of Aditya Mehto, a MERN Stack Web Developer specializing in building responsive, user-friendly web applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark bg-background text-foreground`}>{children}</body>
    </html>
  )
}



import './globals.css'