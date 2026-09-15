"use client";

import {
  Search,
  Lightbulb,
  PencilRuler,
  Rocket,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    number: "01",
    icon: <Search size={28} />,
    img: "/PCL.jpg",
    title: "Research",
    description:
      "Understand users, stakeholders and business objectives through interviews, audits, competitor analysis and usability observations.",
    points: [
      "Stakeholder Interviews",
      "Competitor Analysis",
      "User Personas",
      "Journey Mapping",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: <Lightbulb size={28} />,
    img: "/Define.jpg",
    title: "Define",
    description:
      "Transform research findings into clear problem statements, product goals and measurable UX opportunities.",
    points: [
      "Information Architecture",
      "User Flows",
      "Problem Framing",
      "Feature Prioritization",
    ],
    color: "from-violet-500 to-indigo-500",
  },
  {
    number: "03",
    icon: <PencilRuler size={28} />,
    img: "/Design.jpg",
    title: "Design",
    description:
      "Create wireframes, interactive prototypes and scalable design systems that align user needs with business goals.",
    points: [
      "Wireframes",
      "UI Design",
      "Design System",
      "Interactive Prototype",
    ],
    color: "from-orange-500 to-pink-500",
  },
  {
    number: "04",
    icon: <Rocket size={28} />,
    img: "/PCL.jpg",
    title: "Deliver",
    description:
      "Validate solutions through usability testing, collaborate with developers and continuously improve after launch.",
    points: [
      "Developer Handoff",
      "Usability Testing",
      "Iteration",
      "Product Launch",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            My Workflow
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Design Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Every successful product begins with understanding people,
            defining the right problems and iterating until the experience
            feels effortless.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {process.map((step) => (

            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Number */}

              <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100 transition group-hover:text-blue-100">
                {step.number}
              </div>

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
              >
                {step.icon}
              </div>
              <div className="mt-[27px] flex items-center justify-center">
          <img
            src={step.img}
            alt={`${step.title} image`}
            className="
              w-[250px]
              h-[200px]
              object-contain
            "
          />
          <img src={step.img} alt={`${step.title} logo`} className="w-16 h-16 object-contain"/>
        </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-7 text-gray-600">
                {step.description}
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-gray-200"></div>

              {/* Points */}

              <div className="space-y-4">

                {step.points.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* Button */}

              <button className="mt-10 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
                Learn More

                <ArrowRight size={16} />

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}