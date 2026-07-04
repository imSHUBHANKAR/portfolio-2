"use client";

import {
  Briefcase,
  CircleCheckBig,
  ClipboardList,
  LayoutDashboard,
  Search,
  Users,
} from "lucide-react";

const roleItems = [
  "UX Research",
  "User Flow Design",
  "Wireframing",
  "UI Design",
  "Prototype",
  "Developer Handoff",
];

const processItems = [
  "Stakeholder Interviews",
  "Competitive Analysis",
  "Information Architecture",
  "Design System",
  "Usability Testing",
  "Iteration",
];

const screens = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboard",
    desc: "Admin & Reviewer Dashboard",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Assessment",
    desc: "Certification Criteria Forms",
  },
  {
    icon: <Users size={24} />,
    title: "Site Visit",
    desc: "Inspection Workflow",
  },
  {
    icon: <Search size={24} />,
    title: "Reports",
    desc: "Analytics & Documentation",
  },
];

const outcomes = [
  "Reduced task complexity through structured workflows.",
  "Improved navigation across certification modules.",
  "Created reusable enterprise design components.",
  "Enhanced reviewer and admin productivity.",
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Case Study
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Metro GRIHA Certification Platform
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Designing an enterprise sustainability certification platform
            that simplifies complex evaluation workflows for reviewers,
            administrators and project teams.
          </p>
        </div>

        {/* Challenge */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-sm">

          <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <Briefcase className="text-blue-600" />

            Challenge
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            Existing certification workflows involved multiple disconnected
            systems, large documentation requirements and inefficient reviewer
            collaboration. The objective was to create a unified platform that
            improves usability while supporting enterprise-level compliance.
          </p>

        </div>

        {/* Role + Process */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* My Role */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              My Role
            </h3>

            <div className="space-y-4">

              {roleItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CircleCheckBig
                    className="text-blue-600"
                    size={18}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Process */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Process
            </h3>

            <div className="space-y-4">

              {processItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CircleCheckBig
                    className="text-indigo-600"
                    size={18}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Key Screens */}

        <div className="mt-20">

          <h3 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Key Screens
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {screens.map((screen) => (

              <div
                key={screen.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  {screen.icon}
                </div>

                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  {screen.title}
                </h4>

                <p className="mt-3 text-gray-600">
                  {screen.desc}
                </p>
              </div>

            ))}

          </div>

        </div>

        {/* Outcomes */}

        <div className="mt-20 rounded-3xl bg-gray-50 p-10">

          <h3 className="mb-8 text-3xl font-bold text-gray-900">
            Outcomes & Impact
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            {outcomes.map((item) => (

              <div
                key={item}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <CircleCheckBig
                  className="mt-1 text-green-600"
                />

                <p className="leading-7 text-gray-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}