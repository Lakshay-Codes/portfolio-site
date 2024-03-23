'use client'
import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";


function Experience() {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">EXPERIENCE →</h2>
      </div>
      <div>
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dpslrv5a3/image/upload/v1711191271/ffsytiplfw1bv135bgb0.jpg">
        <p className="font-bold text-xl">Intern, USIP(DTU)</p>
        <p className="font-bold text-xl">University Students Internship Program</p>
        <p className="font-bold text-xl">(March 2023-May 2023)</p>
        <p className="font-normal text-sm">Developed Login Page and Application Form for Hostel Website using ReactJS</p>
      </DirectionAwareHover>
      </div>
    </div>
  )
}

export default Experience