'use client';
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-3 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "View Projects",
      link: "/projects",
      icon: <IconUser className="h-3 w-8 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}