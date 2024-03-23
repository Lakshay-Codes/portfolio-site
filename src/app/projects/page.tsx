'use client';

import React from 'react';
import Image from "next/image"
import { BackgroundBeams } from '@/components/ui/background-beams';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectsData from "@/data/projects.json"
import { TracingBeam } from '@/components/ui/tracing-beam';
import Link from 'next/link';

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <TracingBeam>

      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          My Projects
      </h1>
      <div className="flex flex-wrap justify-center">
            {projectsData.projects.map((project) => (
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                      />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                      Check project →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                      <Link href={project.link} target="_blank">
                        Visit
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div> 
      </div>
      </TracingBeam>
    </div>
  );
}

export default ProjectsPage;