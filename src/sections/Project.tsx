import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "../component/SectionHeading";
import klar from "../assets/klar.webp";
import newgold from "../assets/newgold.webp";
import assessmentDesk from "../assets/assessmentdesk.webp";
import mindease from "../assets/mindease.webp";
import instashot from "../assets/instashot.webp";

type Category = "Fullstack" | "Frontend" | "Backend";

type Project = {
  id: number;
  title: string;
  summary: string;
  role?: string;
  highlights: string[];
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  category: Category;
  date: string;
};

// Screenshots are 1200x750 WebP files cropped from the top of each site.
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 750;

const projectsData: Project[] = [
  {
    id: 1,
    title: "Klar Institut",
    summary: "Course booking platform for a German language school.",
    role: "Solo full-stack developer, working with a Figma designer",
    highlights: [
      "Students register and pay for courses online",
      "Blog and events pages keep students up to date on school activities",
      "Admin dashboard to manage courses, blog posts and events",
      "Deployed to production for students and administrators",
    ],
    image: klar,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://klar.ng",
    category: "Fullstack",
    date: "Mar 2026",
  },
  {
    id: 2,
    title: "NewGold Travels",
    summary: "Marketing landing page for a travel agency.",
    role: "Solo designer and developer",
    highlights: [
      "Showcases destinations, travel packages and services",
      "Clear calls to action that drive inquiries and bookings",
      "Fully responsive for desktop and mobile visitors",
    ],
    image: newgold,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://newgold22travels.ng",
    category: "Frontend",
    date: "Feb 2026",
  },
  {
    id: 3,
    title: "Assessment Desk",
    summary:
      "Online exam platform for schools, training providers and certification bodies.",
    highlights: [
      "Question banks with five question types, plus scheduled, timed exams",
      "Integrity monitoring with privacy-first camera checks",
      "Automatic grading and verifiable certificates",
      "Four roles with separate permissions",
      "Public API so other platforms can plug in assessments",
    ],
    image: assessmentDesk,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://assessmentdesk-web.vercel.app/welcome",
    category: "Fullstack",
    date: "2025",
  },
  {
    id: 4,
    title: "Mindease",
    summary:
      "Mental health web app with stress-management tools and an AI chatbot.",
    role: "Lead frontend developer (FlexiSAF Edusoft)",
    highlights: [
      "Stress-management, sleep-optimization and time-management features",
      "AI chatbot integrated together with the backend developer and AI engineer",
      "Animated, responsive UI built with React, Tailwind CSS and Framer Motion",
    ],
    image: mindease,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Samuelosoba/MindEase",
    live: "https://mindeaseproject.vercel.app",
    category: "Frontend",
    date: "Sep 2025",
  },
  {
    id: 5,
    title: "Instashot",
    summary: "Social media app with real-time messaging and a live feed.",
    role: "Solo full-stack developer",
    highlights: [
      "Share photos and videos, with likes and comments",
      "Follow and unfollow other users to build connections",
      "Real-time messaging powered by Socket.io",
      "Responsive design for web and mobile",
    ],
    image: instashot,
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/Samuelosoba/INSTASHOT",
    live: "https://instashot-swart.vercel.app/",
    category: "Fullstack",
    date: "Sep 2024",
  },
];

// Only offer filters that actually have projects.
const categories: ("All" | Category)[] = [
  "All",
  ...Array.from(new Set(projectsData.map((p) => p.category))),
];

function TechPills({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-700"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({
  project,
  variant,
}: {
  project: Project;
  variant: "card" | "modal";
}) {
  const base =
    variant === "card"
      ? "inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-accent"
      : "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm transition-colors";

  return (
    <>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the ${project.title} live site`}
          className={
            variant === "card"
              ? base
              : `${base} bg-zinc-900 text-white hover:bg-accent`
          }
        >
          <ExternalLink className="h-4 w-4" />
          Live site
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the ${project.title} source code on GitHub`}
          className={
            variant === "card"
              ? base
              : `${base} border border-zinc-300 text-zinc-900 hover:border-zinc-900`
          }
        >
          <FaGithub className="h-4 w-4" />
          Code
        </a>
      )}
    </>
  );
}

function ProjectCard({
  project,
  featured,
  onOpen,
  ref,
}: {
  project: Project;
  featured: boolean;
  onOpen: (project: Project) => void;
  /** Passed by AnimatePresence (popLayout) to measure the exiting card */
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-zinc-900 ${
        featured ? "sm:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100 md:border-b-0">
        <img
          src={project.image}
          alt=""
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`flex flex-1 flex-col p-6 ${featured ? "md:justify-center md:p-10" : ""}`}
      >
        <div className="flex items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <span>{project.category}</span>
          <span>{project.date}</span>
        </div>

        <h3
          className={`mt-2 font-bold ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}
        >
          {/* Stretched button: the whole card opens the details */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left transition-colors after:absolute after:inset-0 focus-visible:outline-none group-hover:text-accent"
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-2 text-zinc-600">{project.summary}</p>

        <div className="mt-4">
          <TechPills tech={project.tech} />
        </div>

        {/* Links sit above the stretched button so they stay clickable */}
        <div className="relative z-10 mt-auto flex items-center gap-5 pt-5">
          <ProjectLinks project={project} variant="card" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    // Lock page scroll behind the modal
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep keyboard focus inside the dialog
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      root.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="h-56 w-full object-cover object-top sm:h-72"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-black/80"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="font-mono text-xs text-zinc-500">
            {project.category} · {project.date}
          </div>
          <h2
            id="project-modal-title"
            className="mt-1 text-2xl font-bold sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-lg text-zinc-700">{project.summary}</p>

          {project.role && (
            <p className="mt-4 text-zinc-700">
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Role:{" "}
              </span>
              {project.role}
            </p>
          )}

          <h3 className="mt-6 font-mono text-sm font-semibold uppercase tracking-wider text-zinc-500">
            What I built
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700 marker:text-accent">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h3 className="mt-6 font-mono text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Tech stack
          </h3>
          <div className="mt-3">
            <TechPills tech={project.tech} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectLinks project={project} variant="modal" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter,
  );
  // With an odd number of cards, feature the first one across both columns
  // so the grid never ends with a lone card.
  const featureFirst = filteredProjects.length % 2 === 1;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-zinc-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          subtitle="A selection of web applications I've built with performance and beautiful design in mind."
        />

        {/* Filter tabs */}
        <div
          role="group"
          aria-label="Filter projects by type"
          className="mb-10 flex flex-wrap justify-center gap-3 md:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full px-5 py-2 font-mono text-sm transition-colors ${
                filter === cat
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900 hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={featureFirst && index === 0}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={closeModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
