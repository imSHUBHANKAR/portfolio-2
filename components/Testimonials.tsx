"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Project Manager",
    company: "GRIHA Council",
    role: "Senior Project Manager",
    feedback:
      "Shubhankar consistently transformed complex certification workflows into intuitive user experiences. His design thinking and attention to detail significantly improved our product usability.",
  },
  {
    name: "Frontend Developer",
    company: "Development Team",
    role: "Frontend Engineer",
    feedback:
      "The design files were well organized, developer-friendly and based on reusable components, making implementation much faster.",
  },
  {
    name: "UX Reviewer",
    company: "Enterprise Product",
    role: "Design Reviewer",
    feedback:
      "His ability to balance business requirements with user needs resulted in interfaces that were both elegant and highly functional.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            What People Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Feedback from teammates and collaborators on product design,
            collaboration and delivery.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Quote */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                <Quote size={26} />

              </div>

              {/* Stars */}

              <div className="mt-6 flex gap-1">

                {[...Array(5)].map((_, index) => (

                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Feedback */}

              <p className="mt-6 leading-8 text-gray-600">
                "{item.feedback}"
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-gray-200"></div>

              {/* User */}

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-blue-600">
                    {item.role}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 text-center text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Interested in Working Together?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            I'm always excited to collaborate on meaningful products,
            solve challenging UX problems and create experiences users love.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
            Let's Connect
          </button>

        </div>

      </div>
    </section>
  );
}