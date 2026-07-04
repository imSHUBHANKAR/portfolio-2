"use client";

import {
  Palette,
  Type,
  LayoutGrid,
  MoveHorizontal,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const colors = [
  { name: "Primary", color: "#2563EB" },
  { name: "Secondary", color: "#7C3AED" },
  { name: "Success", color: "#16A34A" },
  { name: "Warning", color: "#F59E0B" },
  { name: "Background", color: "#F8FAFC" },
  { name: "Dark", color: "#111827" },
];

const principles = [
  {
    icon: <Palette size={22} />,
    title: "Color System",
    description:
      "Consistent semantic colors for branding, status and accessibility.",
  },
  {
    icon: <Type size={22} />,
    title: "Typography",
    description:
      "Clear hierarchy using scalable type sizes, spacing and readability.",
  },
  {
    icon: <LayoutGrid size={22} />,
    title: "Components",
    description:
      "Reusable buttons, cards, forms and navigation built as a design system.",
  },
  {
    icon: <MoveHorizontal size={22} />,
    title: "Spacing",
    description:
      "8-point grid ensuring visual rhythm and consistency across screens.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Responsive",
    description:
      "Layouts optimized for desktop, tablet and mobile experiences.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Accessibility",
    description:
      "WCAG-friendly contrast, semantic structure and keyboard accessibility.",
  },
];

export default function DesignSystem() {
  return (
    <section
      id="design-system"
      className="bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Foundation
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Design System
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Building scalable digital products through reusable components,
            consistent visual language and accessible design principles.
          </p>

        </div>

        {/* Color Palette */}

        <div className="mt-20">

          <h3 className="mb-8 text-3xl font-bold text-gray-900">
            Color Palette
          </h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

            {colors.map((color) => (

              <div
                key={color.name}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className="h-24 rounded-2xl"
                  style={{ background: color.color }}
                ></div>

                <h4 className="mt-5 font-semibold text-gray-900">
                  {color.name}
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  {color.color}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Principles */}

        <div className="mt-24">

          <h3 className="mb-10 text-3xl font-bold text-gray-900">
            System Principles
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {principles.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                  {item.icon}

                </div>

                <h4 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Design Tokens */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-white shadow-xl">

          <h3 className="text-3xl font-bold">
            Design Tokens
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-blue-100">
            Every interface is built using reusable tokens including colors,
            typography, spacing, border radius, shadows and components.
            This ensures consistency across every screen while making future
            product development faster and easier.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-4">

            <div>
              <h4 className="text-4xl font-bold">
                60+
              </h4>
              <p className="mt-2 text-blue-100">
                Components
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">
                12
              </h4>
              <p className="mt-2 text-blue-100">
                Color Tokens
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">
                8pt
              </h4>
              <p className="mt-2 text-blue-100">
                Grid System
              </p>
            </div>

            <div>
              <h4 className="text-4xl font-bold">
                WCAG
              </h4>
              <p className="mt-2 text-blue-100">
                Accessibility
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}