"use client";

import Link from "next/link";
import { Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Work", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "About", href: "#" },
  { name: "Process", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
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
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition duration-300 ${
                item.name === "Home"
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        {/* <button className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 lg:flex">
          <Download size={16} />
          Download Resume
        </button> */}
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
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}