import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <BackgroundLines className="flex items-start justify-center w-full flex-col px-36">
      <h1 className="text-lg tracking-widest text-blue-200">C O N T A C T </h1>
      <h2 className="whitespace-pre-line dark:text-blue text-tuscan xl:text-7xl text-5xl font-extrabold text-blue-200 py-8">
        <div className="flex lg:flex-row flex-col lg:gap-4 items-start">
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              L
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              e
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              t
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              &apos;
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              s
            </span>
          </div>
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              k
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              e
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              e
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              p
            </span>
          </div>
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              i
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              n
            </span>
          </div>
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              t
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              o
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              u
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              c
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              h
            </span>
          </div>
        </div>
      </h2>
      <div className="flex justify-center flex-row gap-20 text-lg text-blue-200 tracking-wider leading-relaxed pt-4">
        <div className="flex flex-1 flex-col items-start gap-16">
          <div className="flex gap-8 flex-col">
            <p>
              If you have an exciting opportunity for me, or if you just simply
              want to say hello, feel free to reach out!
            </p>
            <p>syedmahsan053@gmail.com</p>
          </div>
          <div className="flex gap-8 flex-col">
            <p>
              Alternatively, you can also send me a message on
              <Link
                className="cursor-pointer"
                href="https://www.linkedin.com/in/syedmahsan053/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg px-3 rounded-full text-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600">
                  <Image
                    width={20}
                    height={20}
                    src="/linkedin.png"
                    alt="LinkedIn logo"
                  />
                  <span>LinkedIn</span>
                </span>
              </Link>
            </p>
            <p className="text-sm">
              This site is still in the works, check back often. ☺
            </p>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}

export default Contact;
