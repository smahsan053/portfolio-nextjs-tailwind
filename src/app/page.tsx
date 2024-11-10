// import { Hero } from "@/components/Hero";

import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col md:px-36 px-6">
      <p className="text-xl text-blue-200 text-nowrap">
        <span className="tracking-widest font-extrabold">H E L L O!</span>
        <span className="tracking-[1rem]">&nbsp;</span>
        <span className="tracking-[1rem]">MY NAME IS</span>
      </p>
      <h2 className="whitespace-pre-line dark:text-blue text-tuscan xl:text-8xl text-5xl text-center font-extrabold text-blue-200 pt-10 text-nowrap">
        <div className="flex lg:flex-row flex-col lg:gap-10 items-center justify-center">
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              S
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              y
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              e
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              d
            </span>
          </div>
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              M
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              u
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              h
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              a
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              m
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              m
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              a
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              d
            </span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-10 items-center justify-center">
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              A
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              h
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              s
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              a
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              n
            </span>
          </div>
          <div>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              A
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              l
            </span>
            <span className="inline-block translate-x-0 translate-y-0 transition-all duration-200 ease-in-out hover:origin-[50%_100%] hover:-rotate-3 hover:scale-110 dark:text-blue">
              i
            </span>
          </div>
        </div>
      </h2>
      <div className="flex text-lg text-center text-blue-200 tracking-wider leading-relaxed pt-10">
        <div className="md:w-[450px] w-full">
          <p>
            I am a frontend developer who loves to work on the web. I am
            passionate about building simple and elegant solutions to complex
            problems.
          </p>
        </div>
      </div>
    </BackgroundLines>
  );
}
