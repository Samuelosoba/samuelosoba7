import { motion } from "framer-motion";
import SectionHeading from "../component/SectionHeading";

type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

const experiences: Job[] = [
  {
    role: "Web & LMS Administrator",
    company: "RETTI",
    period: "2026 – Present",
    points: [
      "Manage and maintain the organization's learning management system (LMS)",
      "Improve search visibility through ongoing SEO optimization",
      "Keep website pages and content up to date",
      "Track indexing, search rankings and traffic with Google Search Console and analytics",
      "Provide technical support to staff and students using the platform",
    ],
  },
  {
    role: "Freelance Fullstack Developer",
    company: "Independent / Freelance",
    period: "2024 – Present",
    points: [
      "Design and build responsive, high-performance web apps with React and modern JavaScript",
      "Work with clients to turn requirements into scalable solutions",
      "Own projects end to end: frontend, state management, API integration and testing",
      "Delivered production sites for Klar Institut and NewGold22 Travels",
    ],
  },
  {
    role: "Frontend Developer",
    company: "FlexiSAF Edusoft",
    period: "2025",
    points: [
      "Lead frontend developer on Mindease, a mental health web app",
      "Worked with the design team, a backend developer and an AI engineer to integrate an in-app chatbot",
      "Ran cross-browser and device testing and wrote technical documentation",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Tech Studio Academy",
    period: "2024 – 2025",
    points: [
      "Built two full-stack MERN applications with authentication, dashboards and API integrations",
      "Developed Eventra, an event web app with integrated admin and user interfaces",
      "Took part in Agile sprint planning and code reviews",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading id="experience-heading" title="Experience" />

        <ol className="relative border-l border-zinc-200 pl-8 md:pl-10">
          {experiences.map((exp, index) => (
            <motion.li
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-7 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-white md:-left-[47px]"
              />

              <article className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <span className="shrink-0 font-mono text-sm text-zinc-500">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-zinc-600">{exp.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 marker:text-zinc-400">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
