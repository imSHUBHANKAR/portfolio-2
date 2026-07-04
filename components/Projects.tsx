"use client";

import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Metro GRIHA Certification Platform",
    description:
      "Enterprise sustainability certification platform for project registration, documentation, review workflows and compliance.",
    badge: "Enterprise",
    color: "bg-blue-600",
    tags: ["UX Research", "Dashboard", "Enterprise"],
  },
  {
    id: 2,
    title: "Renewable Analytics Dashboard",
    description:
      "Analytics dashboard helping stakeholders monitor sustainability metrics and certification progress.",
    badge: "Dashboard",
    color: "bg-violet-600",
    tags: ["Analytics", "UI Design", "Charts"],
  },
  {
    id: 3,
    title: "AI UX Research Platform",
    description:
      "AI-powered UX platform for heuristic reviews, usability insights and design recommendations.",
    badge: "AI Product",
    color: "bg-cyan-500",
    tags: ["AI", "UX", "SaaS"],
  },
  {
    id: 4,
    title: "Design System Library",
    description:
      "Reusable enterprise component library with scalable tokens, accessibility and documentation.",
    badge: "Design System",
    color: "bg-indigo-600",
    tags: ["Figma", "Components", "Design System"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Selected Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            A collection of enterprise products, SaaS platforms and UX case
            studies designed to solve complex business challenges.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              {/* Badge */}

              <div
                className={`mb-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white ${project.color}`}
              >
                {project.badge}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-7 text-gray-600">
                {project.description}
              </p>

              {/* Tags */}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}

              <button className="mt-10 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4">
                View Case Study

                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}