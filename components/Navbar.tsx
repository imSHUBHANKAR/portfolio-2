// "use client";



// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Download } from "lucide-react";
// import { MorphIcon, Home, User, Mail } from 'morphicons';

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "Projects", href: "#projects" },
//   { name: "Case Studies", href: "#case-study" },
//   { name: "Process", href: "#process" },
//   { name: "Skills", href: "#skills" },
//   { name: "About Us", href: "#beyond-pixels" },
//   { name: "Contact Us", href: "#contact" },
// ];




// export default function Navbar() {
//     const [activeSection, setActiveSection] = useState("home");
//   return (
//     <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
//         >
//           Shubhankar Kumar
//         </Link>

//         {/* Desktop Navigation */}
//         {/* <nav className="hidden items-center gap-8 lg:flex">
//           {navLinks.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`text-sm font-medium transition duration-300 ${
//                 item.name === "Home"
//                   ? "text-gray-900"
//                   : "text-gray-500 hover:text-gray-900"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav> */}

//         <nav className="hidden items-center gap-8 lg:flex">
//   {navLinks.map((item) => {
//     const sectionId = item.href.replace("#", "");

//     return (
//       <Link
//         key={item.name}
//         href={item.href}
//         onClick={() => setActiveSection(sectionId)}
//         className={`relative text-sm font-medium transition duration-300 ${
//           activeSection === sectionId
//             ? "text-blue-600"
//             : "text-gray-500 hover:text-gray-900"
//         }`}
//       >
//         {item.name}

//         {activeSection === sectionId && (
//           <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-600"></span>
//         )}
//       </Link>
//     );
//   })}
// </nav>

//         {/* Resume Button */}
//         <a
//   href="/Shubhankar_Kumar_UIUX_Resume.pdf"
//   download="Shubhankar_Kumar_UIUX_Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 lg:flex"
// >
//   <Download size={16} />
//   Download Resume
// </a>

//         {/* Mobile Menu Button */}
//         <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="3" y1="6" x2="21" y2="6" />
//             <line x1="3" y1="12" x2="21" y2="12" />
//             <line x1="3" y1="18" x2="21" y2="18" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Download,
  Home,
  FolderKanban,
  BookOpen,
  Workflow,
  Sparkles,
  User,
  Mail,
} from "lucide-react";

import { Menu, X } from "lucide";
import { MorphIcon } from "morphicons/react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    name: "Case Studies",
    href: "#case-study",
    icon: BookOpen,
  },
  {
    name: "Process",
    href: "#process",
    icon: Workflow,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Sparkles,
  },
  {
    name: "About Us",
    href: "#beyond-pixels",
    icon: User,
  },
  {
    name: "Contact Us",
    href: "#contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
        >
          Shubhankar Kumar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const sectionId = item.href.replace("#", "");

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                className={`relative flex items-center gap-2 text-sm font-medium transition duration-300 ${
                  activeSection === sectionId
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <item.icon
                  size={16}
                  strokeWidth={1.8}
                />

                {item.name}

                {activeSection === sectionId && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Resume Button */}
        <a
          href="/Shubhankar_Kumar_UIUX_Resume.pdf"
          download="Shubhankar_Kumar_UIUX_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 lg:flex"
        >
          <Download size={16} />
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          <MorphIcon
            icon={isOpen ? X : Menu}
            size={24}
            spring="snappy"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200/60 bg-white/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === sectionId
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    size={19}
                    strokeWidth={1.8}
                  />

                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Resume */}
            <a
              href="/Shubhankar_Kumar_UIUX_Resume.pdf"
              download="Shubhankar_Kumar_UIUX_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20"
            >
              <Download size={17} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

