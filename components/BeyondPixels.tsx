"use client";

import {
  Brain,
  Lightbulb,
  Users,
  MessageSquare,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const competencies = [
  {
    icon: <Brain size={18} />,
    title: "UX Research",
    description: "Transform user insights into actionable product decisions.",
  },
  {
    icon: <Target size={18} />,
    title: "Product Thinking",
    description: "Balance business goals with user needs and technical feasibility.",
  },
  {
    icon: <Users size={18} />,
    title: "Collaboration",
    description: "Work closely with PMs, developers and stakeholders.",
  },
  {
    icon: <Lightbulb size={18} />,
    title: "Problem Solving",
    description: "Simplify complex enterprise workflows into intuitive experiences.",
  },
  {
    icon: <MessageSquare size={18} />,
    title: "Communication",
    description: "Present ideas clearly through storytelling and design rationale.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Continuous Learning",
    description: "Always exploring AI, emerging UX patterns and new technologies.",
  },
];

export default function BeyondPixels() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Beyond Pixels
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Designing products isn't just about beautiful interfaces.
            It's about understanding people, solving business problems
            and creating experiences that make technology feel effortless.
          </p>
        </div>

        {/* Main Layout */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* About Card */}

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition hover:shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">
              My Philosophy
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I believe great digital products are created where user empathy,
              business strategy and technology intersect.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Over the past few years, I've worked on enterprise dashboards,
              sustainability certification platforms and SaaS applications,
              helping organizations transform complicated workflows into
              intuitive digital experiences.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Every project starts with understanding the problem deeply before
              moving into research, ideation, prototyping and iterative testing.
            </p>

            <button className="mt-10 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-4">
              Learn More

              <ArrowRight size={18} />
            </button>
          </div>

          {/* Competencies */}

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900">
              Core Competencies
            </h3>

            <div className="mt-8 space-y-6">
              {competencies.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-gray-100 p-5 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold">
            "Good design isn't decoration. It's clarity, empathy and measurable impact."
          </h3>

          <p className="mt-4 text-blue-100">
            — Shubhankar Kumar
          </p>
        </div>
      </div>
    </section>
  );
}