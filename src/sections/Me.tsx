import { type FC } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiFigma,
} from "react-icons/si";
import SectionHeading from "../component/SectionHeading";

type Skill = { name: string; Icon: IconType; color: string };

const stack: { group: string; skills: Skill[] }[] = [
  {
    group: "Frontend",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#E6C700" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#149ECA" },
      { name: "React Native", Icon: SiReact, color: "#149ECA" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    group: "Tools & deployment",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#000000" },
      { name: "Render", Icon: SiRender, color: "#000000" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const Me: FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-zinc-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="about-heading" title="About" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-700"
        >
          <p>
            I specialize in modern <strong>full-stack</strong> web development.
            On the <strong>frontend</strong> I use React, Next.js and React
            Native to build responsive, user-friendly interfaces.
          </p>
          <p>
            On the <strong>backend</strong> I work with Node.js and Express to
            build scalable APIs, using MongoDB and MySQL for efficient data
            management. I also handle <strong>deployment</strong> on platforms
            like Vercel, Render and Pxxl, so applications ship smoothly and run
            reliably.
          </p>
          <p>
            I use GitHub for version control and collaboration, and I enjoy
            working closely with Figma designers to turn UI/UX concepts into
            seamless digital experiences.
          </p>
        </motion.div>

        {/* Stack */}
        <h3 className="mt-16 text-center text-xl font-bold uppercase tracking-wide">
          Stack
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stack.map(({ group, skills }, i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                {group}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map(({ name, Icon, color }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-800 transition-colors hover:border-zinc-900"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4"
                      style={{ color }}
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Me;
