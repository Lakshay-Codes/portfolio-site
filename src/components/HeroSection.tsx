'use client'
import Link from "next/link"
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

function HeroSection() {
  const words1 = [
    {
      text: "Hello,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Lakshay",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Nijhawan",
      className: "text-blue-500 dark:text-blue-500",
    }
  ];
  const me = [
    {
      id: 1,
      name: 'Lakshay Nijhawan', 
      designation: 'Web Developer',
      image:
        'https://res.cloudinary.com/dpslrv5a3/image/upload/v1711115662/puhxr3yw6wyfifzbedot.png',
    }
  ];

  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
      <br/>
        <div className="p-4 relative z-10 w-full text-center" >
            <div className="flex flex-row items-center justify-center mb-0 w-full">
            <TypewriterEffect className="text-center" words={words1}/>
            <AnimatedTooltip items={me} />
            </div>
            <p
            className="mt-4 text-white-500 font-normal text-base md:text-lg max-w-lg mx-auto"
            >
            COE DTU (2025 batch), Delhi Technological University
            </p>
            <p
            className="mt-4 font-normal text-base sm:text-sm md:text-sm text-neutral-300 max-w-sm mx-auto"
            >
Motivated by a deep curiosity for technology, I thrive in computer engineering, consistently achieving top grades. Skilled in programming and full-stack web development, I approach challenges with creativity and precision. Committed to continuous learning, I strive to innovate within the dynamic realm of computer engineering.            
            </p>
            <div className="ml-4">
                <Link href={"https://drive.google.com/file/d/1G6XC-oni9zt8JKughIfs2C5KaBpHzAl8/view"} target="_blank">
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    View Resume
                    </Button>
                </Link>
            </div>
        </div>
        </WavyBackground>
        
        </div>
  )
}

export default HeroSection