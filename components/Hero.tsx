"use client";

import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F7F9FC] pt-32 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[130px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-10">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-3 w-3">
              {/* Animated Ring */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

              {/* Solid Dot */}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>

            <span className="text-sm font-medium text-green-600">
              Product Designer • Available for Work
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Designing Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Enterprise Products
            </span>
            <br />
            that Users Love
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            I'm a Product Designer focused on building intuitive enterprise
            platforms, AI-powered SaaS products, and delightful digital
            experiences that combine business goals with exceptional usability.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              View My Work
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-4 font-medium text-gray-800 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white">
              <Download size={18} />
              Resume
            </button>
          </div>

          {/* Small Info */}

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">3+</h2>

              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">25+</h2>

              <p className="text-gray-500">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">15+</h2>

              <p className="text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PLACEHOLDER */}

        <div className="relative flex h-[600px] w-full items-center justify-center lg:w-[560px]">
          {/* Background Circle */}

          <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/20 blur-3xl" />

          {/* Dashboard will come here */}

          {/* <div className="flex h-[420px] w-[520px] items-center justify-center rounded-[35px] border border-white/60 bg-white/70 shadow-2xl backdrop-blur-xl">

            <p className="text-lg font-semibold text-gray-400">
              Dashboard Preview
            </p>

          </div> */}
          {/* Main Dashboard */}

          <div className="relative h-[480px] w-[520px]">
            {/* Background Card */}

            <div className="absolute inset-0 rounded-[36px] border border-white/70 bg-white p-7 shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Enterprise Dashboard</p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Product Analytics
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  Live
                </div>
              </div>

              {/* Graph */}

              <div className="mt-8 h-52 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="flex h-full items-end justify-between gap-3">
                  <div className="h-24 w-8 rounded-full bg-blue-200"></div>

                  <div className="h-36 w-8 rounded-full bg-blue-300"></div>

                  <div className="h-28 w-8 rounded-full bg-blue-400"></div>

                  <div className="h-44 w-8 rounded-full bg-blue-500"></div>

                  <div className="h-36 w-8 rounded-full bg-blue-600"></div>

                  <div className="h-48 w-8 rounded-full bg-indigo-600"></div>
                </div>
              </div>

              {/* Bottom Cards */}

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Active Projects</p>

                  <h4 className="mt-2 text-3xl font-bold text-gray-900">24</h4>

                  <p className="mt-2 text-sm text-green-600">+12% this month</p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">User Satisfaction</p>

                  <h4 className="mt-2 text-3xl font-bold text-gray-900">98%</h4>

                  <p className="mt-2 text-sm text-green-600">Excellent</p>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}

            <div className="absolute -left-10 top-20 rounded-3xl border border-white bg-white p-5 shadow-2xl">
              <p className="text-sm text-gray-500">UX Score</p>

              <h2 className="mt-1 text-4xl font-bold text-blue-600">94</h2>

              <p className="mt-2 text-sm text-green-500">▲ +8%</p>
            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-10 bottom-16 rounded-3xl border border-white bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                <div>
                  <h4 className="font-semibold text-gray-900">Research</h4>

                  <p className="text-sm text-gray-500">16 Interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
