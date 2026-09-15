"use client";

import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";

import { FaLinkedin,FaGithub, FaDribbble } from "react-icons/fa";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide"; // data, not components

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">

      {/* Gradient Line */}

      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* About */}

          <div>

            <h2 className="text-3xl font-bold">
              Shubhankar Kumar
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Product Designer passionate about creating intuitive,
              accessible and impactful digital experiences.
              I bridge business goals with user needs through
              thoughtful UX strategy and modern visual design.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-semibold">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>
                <a
                  href="#"
                  className="transition hover:text-blue-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-blue-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="transition hover:text-blue-400"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="transition hover:text-blue-400"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-blue-400"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold">
              Expertise
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>UX Research</li>
              <li>UI Design</li>
              <li>Design Systems</li>
              <li>Product Strategy</li>
              <li>Wireframing</li>
              <li>Prototyping</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold">
              Connect
            </h3>

            <p className="mt-6 text-slate-300">
              Let's build meaningful digital experiences together.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.linkedin.com/in/mrshubhankar/"
                className="rounded-2xl bg-slate-800 p-4 transition hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/imSHUBHANKAR"
                className="rounded-2xl bg-slate-800 p-4 transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://dribbble.com/shubhankar-ux"
                className="rounded-2xl bg-slate-800 p-4 transition hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaDribbble size={20} />
              </a>

              <a
                href="mailto:shubhankar.kr24@gmail.com"
                className="rounded-2xl bg-slate-800 p-4 transition hover:-translate-y-1 hover:bg-green-600"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-slate-700" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="flex items-center gap-2 text-slate-400">

            © {new Date().getFullYear()}

            (Made with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            by Shubhankar Kumar)

          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium transition hover:scale-105"
          >

            Back to Top

            <ArrowUp size={18} />

          </button>

        </div>

      </div>

      {/* Background Blur */}

      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

    </footer>
  );
}