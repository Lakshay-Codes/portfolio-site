'use client'
import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";


function Experience() {
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <div>
      <h2 className="text-3xl text-white font-bold text-center mb-8 z-10">EXPERIENCE →</h2>
      </div>
      <div>
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dpslrv5a3/image/upload/v1711191271/ffsytiplfw1bv135bgb0.jpg">
        <p className="font-bold text-xl">Web Developer Intern, USIP</p>
        <p className="font-bold text-xl">Delhi Technological University(DTU)</p>
        <p className="font-bold text-xl">(March-May 2023)</p>
        <p className="font-normal text-sm">Developed login page and application form for DTU Hostel Website using ReactJS by working on Frontend</p>
      </DirectionAwareHover>
      </div>
      <div>
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dpslrv5a3/image/upload/v1719662405/toksw2ys70uavqhvhn05.jpg">
        <p className="font-bold text-xl">Advanced App. Engineering Intern</p>
        <p className="font-bold text-xl">Accenture Gurugram</p>
        <p className="font-bold text-xl">(May-July 2024)</p>
        <p className="font-normal text-sm">Worked on ISMS(Information Security Management System) using ISO27001 in TPRM(Third Party Risk Management) under Cyber Security</p>
      </DirectionAwareHover>
      </div>
    </div>
  )
}

export default Experience