'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const PORs = [
  {
    quote:
      'I volunteered to support 10th and 12th-grade students from Delhi Government Schools. Guiding them through challenges, I empowered over 10 students to realize their full capabilities and navigate their educational journey with confidence and resilience.',
    name: 'Mentor',
    title: 'Desh Ke Mentor (Jan to March 2022)',
  },
  {
    quote:
    'During one semester, I represented and advocated for my 75 classmates, facilitating effective communication between students and faculty while offering guidance and mentorship throughout that time.',
    name: 'Class Representative',
    title: 'Mathematical Economics (HU 308 ME) (Semester 5)',
  },
  {
    quote:
      'I mentor and monitor the progress and performance of 15 students assigned to me, under the co-founder of VMC, Mr. Manmohan Gupta during the corona outbreak.This has been introduced to compensate the loss of personal interaction of students with their teachers.',
    name: 'Education Mentor',
    title: 'VidyaMandir Classes (2022-23)',
  },
  {
    quote:
      'Throughout a single semester, For the first time, I acted as a representative and advocate for my 75 classmates, fostering clear communication between students and faculty, and providing guidance and mentorship throughout the duration.',
    name: 'Class Representative',
    title: 'Universal Ethics and Human Values (FEC 56) (Semester 3)',
  },
  {
    quote:
      ' I served as GeeksforGeeks "Campus Mantri". I orchestrated promotional campaigns on LinkedIn, amassing over 10,000 views. Engaged with 250+ individuals from various universities via GeeksforGeeks WhatsApp groups, facilitating course sales and fostering community interaction.',
    name: 'Campus Representative',
    title: 'GeeksforGeeks-“Campus Mantri” Programme (2022-23)',
  },
    {
      quote:
        'Supported and advocated for my 75 peers throughout one semester, ensuring seamless communication between students and faculty, while providing guidance and mentorship during that period.',
      name: 'Class Representative',
      title: 'Object Oriented Software Design (OOSE E3 S2) (Semester 5)',
    },
  ];

function POR() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">POSITIONS OF RESPONSIBILITY</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={PORs}
                direction="left"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default POR