"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "PloAltoSoft",
    role: "Product Designer",
    duration: "Dec 24 – Present",
    logo: "/PaloAltoSoft.jpg",
    location: "New Delhi, India",
    current: true,
    responsibilities: [
      "Designed UI/UX for an enterprise sustainability certification platform",
      "Designed complex dashboard, appraisal, and data-driven workflows in Figma",
      "Created responsive screens, wireframes, prototypes, and reusable components",
      "Simplified complex sustainability and certification processes through user-focused UX design",
      "Collaborated with developers, product teams, and stakeholders to deliver scalable interfaces",
      "Improved existing product flows by identifying user pain points and usability issues",
    ],
    process:[
      "UX Research → Information Architecture → User Flows → Wireframing → UI Design → Design System → Prototyping → Edge Cases → Developer Handoff → Stakeholder Collaboration",
    ],
  },
  {
    company: "Freelance",
    role: "UI/UX Designer",
    duration: "Nov 24 – Present",
    logo: "/PCL.jpg",
    location: "Remote",
    current: false,
    responsibilities: [
      "Designed SaaS dashboards and business websites.",
      "Created mobile-first responsive interfaces.",
      "Conducted UX audits and usability improvements.",
      "Delivered high-fidelity prototypes in Figma.",
    ],
    process: [
      "UX Research → Information Architecture → User Flows → Wireframing → UI Design → Design System → Prototyping → Edge Cases → Developer Handoff → Stakeholder Collaboration",
    ],
  },
  {
    company: "Agsure Innovation Pvt. Ltd.",
    role: "React.js Intern",
    duration: "Aug 24 – Oct 24",
    logo: "/agsure_in_logo.jpg",
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

                      <div className="flex gap-5">
                        
                        <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 object-contain"/>
                
                      <div className="gap-0">
                        <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {job.company}
                        </h3>

                        {job.current && (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Current
                          </span>
                        )}

                      </div>
                      <p className="text-lg font-semibold text-blue-600">
                        {job.role}
                      </p>
                      </div>
                      </div>

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
        {/* ////////////// */}
        {/* <div className="w-full bg-white">
      
      <div
        className="
          relative
          w-full
          min-h-[307px]
          rounded-[28px]
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.14)]
          flex
          flex-col
          items-center
          justify-center
          overflow-visible
        "
      >
        
        <div
          className="
            absolute
            -top-[14px]
            left-[40px]
            w-[28px]
            h-[18px]
            bg-[#1F3967]
            rounded-tl-[14px]
          "
        />

        
        <div className="
            absolute
            -top-[14px]
            left-[63px]
            h-[59px]
            px-[15px]
            flex
            items-center
            bg-[#2F5596]
            rounded-bl-[17px]
            rounded-br-[17px]
            rounded-tr-[17px]
          ">
              <h2 className="text-white
              text-[21px]
              leading-none
              font-semibold
              tracking-[-0.2px]
              whitespace-nowrap">
                Journey
              </h2>
        </div>

        
        <div className="mt-[27px] flex items-center justify-center">
          <img
            src="/images/empty-container.png"
            alt="No data available"
            className="
              w-[150px]
              h-[100px]
              object-contain
            "
          />
        </div>

        
        <h3
          className="
            mt-[5px]
            text-[24px]
            leading-[29px]
            font-normal
            text-black
            tracking-[-0.3px]
          "
        >
          No data available
        </h3>

        
        <p
          className="
            mt-[12px]
            text-center
            text-[21px]
            leading-[26px]
            font-normal
            text-[#657A99]
            tracking-[-0.15px]
          "
        >
          Submit the required project data
          <br />
          to view this metrics
        </p>
        
      </div>
        </div> */}
        {/* /////////// */}
      </div>


    
    </section>
  );
}