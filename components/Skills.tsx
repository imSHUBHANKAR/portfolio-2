"use client";

import {
  PenTool,
  LayoutDashboard,
  Brain,
  Code2,
  Sparkles,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

const skillCategories = [
  {
    title: "UI / UX Design",
    icon: <PenTool size={22} />,
    skills: [
      { name: "User Experience", level: 95 },
      { name: "User Interface", level: 96 },
      { name: "Wireframing", level: 94 },
      { name: "Prototyping", level: 92 },
    ],
  },
  {
    title: "Product Design",
    icon: <LayoutDashboard size={22} />,
    skills: [
      { name: "Design Systems", level: 93 },
      { name: "Information Architecture", level: 88 },
      { name: "User Research", level: 89 },
      { name: "Usability Testing", level: 86 },
    ],
  },
  {
    title: "AI & Emerging Tools",
    icon: <Brain size={22} />,
    skills: [
      { name: "Figma AI", level: 95 },
      { name: "ChatGPT", level: 98 },
      { name: "Lovable AI", level: 90 },
      { name: "Cursor AI", level: 84 },
    ],
  },
];

const tools = [
  "Figma",
  "FigJam",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Miro",
  "Notion",
  "Jira",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Next.js",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Expertise
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Skills & Tools
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Combining UX strategy, visual design and modern AI-powered workflows
            to build scalable digital products.
          </p>

        </div>

        {/* Skills */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                {category.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {category.title}
              </h3>

              <div className="mt-8 space-y-6">

                {category.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="mb-2 flex items-center justify-between">

                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>

                      <span className="text-sm font-semibold text-blue-600">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Tools */}

        <div className="mt-24 rounded-3xl border border-gray-200 bg-[#F8FAFC] p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white">

              <FaFigma size={28} />

            </div>

            <div>

              <h3 className="text-3xl font-bold text-gray-900">
                Design & Development Tools
              </h3>

              <p className="mt-2 text-gray-600">
                Everyday tools used for research, design, collaboration and development.
              </p>

            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            {tools.map((tool) => (

              <div
                key={tool}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {tool}
              </div>

            ))}

          </div>

        </div>

        {/* Highlights */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">

            <Sparkles size={34} />

            <h4 className="mt-5 text-4xl font-bold">
              50+
            </h4>

            <p className="mt-2 text-blue-100">
              Screens Designed
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-xl">

            <Brain size={34} />

            <h4 className="mt-5 text-4xl font-bold">
              AI First
            </h4>

            <p className="mt-2 text-violet-100">
              Modern Design Workflow
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 p-8 text-white shadow-xl">

            <Code2 size={34} />

            <h4 className="mt-5 text-4xl font-bold">
              Frontend
            </h4>

            <p className="mt-2 text-green-100">
              HTML • CSS • Tailwind • Next.js
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}