"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CalendarDays,
} from "lucide-react";

import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Whether you're hiring a Product Designer, discussing a startup
            idea, or looking for UX consultation, I'd love to hear from you.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-5">

          {/* LEFT */}

          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">

              <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                🟢 Available for Full-time | Freelancer Opportunities
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                Ready to create meaningful digital experiences.
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                I'm currently open to Product Designer, UI/UX Designer,
                and UX Research opportunities across startups,
                enterprise companies and global remote teams.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="space-y-5">

              <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold text-gray-900">
                    shubhankar.ux@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold text-gray-900">
                    +91 78087 09989
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold text-gray-900">
                    Delhi NCR | Noida (India)
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-8 shadow-sm lg:col-span-3">

            <h3 className="text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-2xl border border-gray-300 text-gray-900 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-gray-300 text-gray-900 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full rounded-2xl border border-gray-300 text-gray-900 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="mt-6 w-full resize-none rounded-2xl border border-gray-300 text-gray-900 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <button className="mt-8 flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105">

              <Send size={18} />

              Send Message

            </button>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <button className="rounded-xl border border-gray-300 text-gray-900 p-4 transition hover:bg-blue-600 hover:text-white">
                <FaLinkedin size={20} />
              </button>

              <button className="rounded-xl border border-gray-300 text-gray-900 p-4 transition hover:bg-gray-900 hover:text-white">
                <FaGithub size={20} />
              </button>

              <button className="rounded-xl border border-gray-300 text-gray-900 p-4 transition hover:bg-green-600 hover:text-white">
                <CalendarDays size={20} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}