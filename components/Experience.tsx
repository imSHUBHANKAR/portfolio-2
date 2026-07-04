"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    company: "GRIHA Council",
    role: "Product Designer",
    duration: "2023 – Present",
    location: "New Delhi, India",
    current: true,
    responsibilities: [
      "Designed enterprise sustainability certification platform.",
      "Created 50+ responsive product screens.",
      "Built scalable design systems and reusable components.",
      "Collaborated with developers, product managers and stakeholders.",
      "Improved complex certification workflows through UX research.",
    ],
  },
  {
    company: "Freelance",
    role: "UI/UX Designer",
    duration: "2022 – 2023",
    location: "Remote",
    current: false,
    responsibilities: [
      "Designed SaaS dashboards and business websites.",
      "Created mobile-first responsive interfaces.",
      "Conducted UX audits and usability improvements.",
      "Delivered high-fidelity prototypes in Figma.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Career Journey
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Experience Timeline
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Building enterprise platforms, SaaS products and user-centered
            digital experiences through collaboration, research and design.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-1 rounded-full bg-blue-100 md:block"></div>

          <div className="space-y-12">

            {experiences.map((job, index) => (

              <div
                key={index}
                className="relative flex flex-col gap-6 md:flex-row"
              >

                {/* Timeline Circle */}

                <div className="relative z-10 hidden md:flex">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                    <Briefcase size={18} />

                  </div>

                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Header */}

                  <div className="flex flex-col justify-between gap-5 lg:flex-row">

                    <div>

                      <div className="flex items-center gap-3">

                        <h3 className="text-2xl font-bold text-gray-900">
                          {job.role}
                        </h3>

                        {job.current && (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Current
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-lg font-semibold text-blue-600">
                        {job.company}
                      </p>

                    </div>

                    <div className="space-y-2 text-sm text-gray-500">

                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {job.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </div>

                    </div>

                  </div>

                  {/* Responsibilities */}

                  <div className="mt-8 space-y-4">

                    {job.responsibilities.map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className="mt-1 text-blue-600"
                        />

                        <p className="leading-7 text-gray-600">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}