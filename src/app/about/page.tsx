import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function About() {
  return (
    <BackgroundLines className="flex items-start justify-center w-full flex-col px-36">
      <h1 className="text-lg tracking-widest text-blue-200">A B O U T</h1>
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:text-blue-200 text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-extrabold tracking-tight whitespace-pre-line ">
        a frontend developer with affinity for design, intuitive user experience
        and pixel-perfect user interfaces
      </h2>
      <div className="flex justify-center flex-row gap-20 text-lg text-blue-200 tracking-wider leading-relaxed">
        <div className="flex flex-1 flex-col gap-8">
          <p>
            Results-driven Industrial & Manufacturing Engineer with 3 years of
            expertise in production engineering. Successfully completed an
            inventory management project and led the installation of a new
            rewinding line. Eager to transition into a Frontend Developer to
            fulfill my passion for innovation and to bring transformative ideas
            to life.
          </p>
          <p>
            I&apos;m doing AI course from leading tech school in Pakistan to
            enhance my skill upto the current industry standard
          </p>
        </div>
        <div className="flex-1">
          <p>
            Currently, I am a Begineer Software Engineer, focusing on the
            frontend. On a daily basis, I work with{" "}
            <span className="inline-flex items-center mr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 shadow-lg px-3 rounded-full text-white">
              <Image
                width={20}
                height={20}
                src="/react.png"
                alt=""
                className="mr-2"
              />{" "}
              React JS
            </span>
            ,
            <span className="inline-flex items-center mr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 shadow-lg px-3 rounded-full text-white">
              <Image
                width={20}
                height={20}
                src="/nextjs.png"
                alt=""
                className="mr-2"
              />{" "}
              Next JS
            </span>
            ,
            <span className="inline-flex items-center mr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 shadow-lg px-3 rounded-full text-white">
              <Image
                width={20}
                height={20}
                src="/reduxtoolkit.png"
                alt=""
                className="mr-2"
              />{" "}
              Redux Toolkit
            </span>
            ,
            <span className="inline-flex items-center mr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 shadow-lg px-3 rounded-full text-white">
              <Image
                width={20}
                height={20}
                src="/typeScript.png"
                alt=""
                className="mr-2"
              />{" "}
              TypeScript
            </span>
            ,
            <span className="inline-flex items-center mr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-80 shadow-lg px-3 rounded-full text-white">
              <Image
                width={20}
                height={20}
                src="/tailwind.png"
                alt=""
                className="mr-2"
              />{" "}
              Tailwind CSS
            </span>
            among others, to build and maintain web applications and design
            systems —{" "}
            <span className="font-extrabold">
              all crafted from the ground up
            </span>
            .
          </p>
        </div>
      </div>
    </BackgroundLines>
  );
}
