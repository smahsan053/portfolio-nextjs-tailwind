import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

export default function Projects() {
  return (
    <BackgroundLines className="flex items-center md:items-start justify-start w-full flex-col md:px-36 pt-24">
      <h1 className="text-lg tracking-widest text-blue-200">
        P R O J E C T S{" "}
      </h1>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect className="pt-10" items={projects} />
      </div>
    </BackgroundLines>
  );
}

const projects = [
  {
    title: "Travel Agency Landing Page",
    github: "https://www.github.com/smahsan053/Travel-Agency-Landing-Page",
    description:
      "This is a landing page designed in Nextjs using tailwind CSS. This website contains pixel perfect cod of Figma designed web.",
  },
  {
    title: "Music Nextjs",
    github: "https://www.github.com/smahsan053/musicnextjs",
    description:
      "Musicnextjs is a modern music school website built using Next.js, styled with Tailwind CSS, and enhanced with Aceternity UI components. It features dynamic interactions with Framer Motion for a smooth user experience. The website is designed to showcase courses, contact information, and offer a visually appealing, responsive interface.",
  },
  {
    title: "NoteNexus",
    github: "https://www.github.com/smahsan053/NoteNexus",
    description:
      "NoteNexus is a full-stack application designed to manage and organize notes efficiently. This project showcases the use of React for the frontend and Node.js with Express and MongoDB for the backend. :)",
  },
  {
    title: "MyOnlineMeal",
    github: "https://www.github.com/smahsan053/MyOnlineMeal",
    description: "An online food restaurant website built using HTML & CSS",
  },
];
