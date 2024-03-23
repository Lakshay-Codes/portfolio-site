import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Fun Fact </h2>
          <p className="mb-4">
          I got facility for putting thoughts into eloquent words, keeping every inch of my activities in the form of digital notebook
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Coding Profiles</h2>
          <ul>
            <li>
            <Link
              target="_blank"
              href="https://leetcode.com/nijhawanlakshay06/"
              className="hover:text-white transition-colors duration-300"
            >
              LeetCode
            </Link>
            </li>
            <li>
            <Link
              target="_blank"
              href="https://www.codechef.com/users/nijhawan3codes"
              className="hover:text-white transition-colors duration-300"
            >
              CodeChef
            </Link>
            </li>
            <li>
            <Link
              target="_blank"
              href="https://codeforces.com/profile/Lakshay-Codes"
              className="hover:text-white transition-colors duration-300"
            >
              CodeForces
            </Link>
            </li>
            <li>
            <Link
              target="_blank"
              href="https://auth.geeksforgeeks.org/user/nijhawanlakshay06"
              className="hover:text-white transition-colors duration-300"
            >
              GeeksForGeeks
            </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Handles</h2>
          <div className="flex space-x-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/lakshay-nijhawan-818419124/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Lakshay-Codes"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>New Delhi, India</p>
          <p>nijhawanlakshay06@gmail.com</p>
          <p>Phone: (+91) 8287403276</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">Lakshay Nijhawan © 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer