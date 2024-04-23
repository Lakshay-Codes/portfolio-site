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
      <DirectionAwareHover imageUrl="">
        <p className="font-bold text-xl">Position, Programme Name</p>
        <p className="font-bold text-xl">company</p>
        <p className="font-bold text-xl">(Duration)</p>
        <p className="font-normal text-sm">What u did</p>
      </DirectionAwareHover>
      </div>
    </div>
  )
}

export default Experience