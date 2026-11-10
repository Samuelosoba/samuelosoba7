import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RESUME_URL, socialLinks } from "../data/links";

const EYEBROW = "<PORTFOLIO ";

function useTypewriter(text: string, speed = 60) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, reduceMotion]);

  return reduceMotion ? text : text.slice(0, count);
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const Home = () => {
  const typed = useTypewriter(EYEBROW);

  return (
    <section
      id="home"
      className="grid-bg flex min-h-[90vh] items-center justify-center px-6 pb-20 pt-28 text-center"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        {/* Decorative typing eyebrow; the real headline is the h1 below */}
        <p
          aria-hidden="true"
          className="relative font-mono text-lg text-zinc-500 md:text-2xl"
        >
          <span className="invisible">{EYEBROW}/&gt;</span>
          <span className="absolute inset-0 whitespace-pre text-left">
            {typed}
            <span className="animate-blink">/&gt;</span>
          </span>
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Samuel Osoba
        </h1>
        <span aria-hidden="true" className="mt-5 block h-0.5 w-20 bg-accent" />

        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 font-mono text-sm uppercase tracking-widest"
        >
          <span className="bg-zinc-900 px-2 py-1 text-white">
            Full-stack developer
          </span>
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600"
        >
          I design and build fast, production-ready web apps, from course
          booking platforms and admin dashboards to business websites, with
          React, Node.js and MongoDB.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-sm"
        >
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-accent"
          >
            View projects
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-900 bg-white px-6 py-3 text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Resume
          </a>
        </motion.div>

        <motion.ul {...fadeUp(0.6)} className="mt-8 flex gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} profile`}
                className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-white hover:text-accent"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
