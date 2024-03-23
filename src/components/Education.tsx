'use client'
import { HoverEffect } from "./ui/card-hover-effect";

function Education() {

  const featuredInstitutes = [
    {
      title: 'Delhi Technological University (2021-2025)',
      description:
        'B.Tech(Computer Engineering) : 9.42 CGPA (till sem 5)',  
      link: 'http://www.dtu.ac.in/',
    },
    {
      title: 'Darbari Lal D.A.V. Model School (2021)',
      description:
      'CBSE (Class XII)(PCM) : 95.8%',
      link: 'https://dldavpp.in/',
    },
    {
      title: 'Darbari Lal D.A.V. Model School (2019)',
      description:
      'CBSE (Class X) : 92.8%',
      link: 'https://dldavpp.in/',
    }
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-teal-600 sm:text-4xl">EDUCATION</p>
          <h2 className="text-base text-white font-semibold tracking-wide">Here is a list of the institutes I have attended or am currently pursuing.</h2>
        </div>
        <div className="mt-5">
          <HoverEffect
          items={featuredInstitutes.map(institutes => (
            {
              title: institutes.title,
              description: institutes.description,
              link: institutes.link
            }
          ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Education