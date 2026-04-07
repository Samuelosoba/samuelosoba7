// src/sections/Experience.tsx
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "FlexiSAF edusoft",
    period: "2025",
    description:
      "Lead frontend developer for a mental health project (Mindease). Collaborated with the Design team, backend developer and an AI engineer",
  },
  {
    role: "Frontend Developer Intern",
    company: "GAO Tek Inc.",
    period: "2025",
    description:
      "Worked on building responsive UI components using React, improving user experience and collaborating with a global team.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Techstudio Academy",
    period: "2023 - 2025",
    description:
      "Built two full-stack applications using MERN stack,which including authentication systems, dashboards, and API integrations.",
  },
];

export default function Experience() {
  return (
    <section className="grid-bg py-16 min-h-screen" id="experience">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-bold  mb-6 relative inline-block "
        >
          <h2 className="relative inline-block font-bold text-4xl md:text-5xl pb-2">
            EXPERIENCE
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>{" "}
          </h2>
        </motion.h1>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-0.5 h-full bg-gray-300"></div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-12 relative text-start"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-md hover:scale-125 transition"></div>

              {/* Card */}
              <div className="bg-white p-4  shadow-md hover:shadow-xl hover:border-b-2 hover:border-red-500 transition">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600 text-sm">{exp.company}</p>
                <span className="text-xs text-gray-400">{exp.period}</span>
                <p className="mt-3 text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
