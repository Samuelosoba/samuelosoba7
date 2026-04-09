import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Code2, Play, X } from "lucide-react";
import { useState } from "react";
import mindease from "../assets/image.png";
import instashot from "../assets/instashots.png";
import klar from "../assets/klar.png";
import newgold from "../assets/newgold.png";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: "Fullstack" | "Frontend" | "Backend" | "All";
  date: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "KLAR-INSTITUT",
    description: "German language course booking web-app.",
    longDescription:
      "A German language learning school website, using the MERN stack. The platform allows students to register and pay for courses online with a smooth, responsive interface. It includes a blog page for updates and an events page for showcasing school activities. An admin dashboard was developed to manage courses, blog posts, and events efficiently.I worked as the solo developer, collaborating with a Figma designer on the UI/UX.The app was deployed for production use, making it fully accessible to students and administrators.",
    image: klar,
    tech: ["React", "Node.js", "Mongodb", "Tailwind"],
    github: "https://github.com/yourusername/livestream-pro",
    live: "https://klarinstitut.vercel.app",
    category: "Fullstack",
    date: "Mar 2026",
  },
  {
    id: 2,
    title: "NEWGOLD TRAVELS",
    description: "Modern Landing page for a travel agency.",
    longDescription:
      "I designed and developed a modern landing page for New Gold 22, a travel agency. The page showcases destinations, travel packages, and services in an engaging layout. I added clear call-to-actions to drive customer inquiries and bookings.The UI was built with React and TailwindCSS for speed and flexibility. I worked independently to deliver a professional and client-focused solution.",
    image: newgold,
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "",
    live: "https://newgold22travels.ng",
    category: "Frontend",
    date: "Feb 2026",
  },
  {
    id: 3,
    title: "MINDEASE",
    description:
      "A mental health web-app that has a stress-mangagement and Ai feature.",
    longDescription:
      "A mental health app, that consist of Stress-management, sleep-optimization and time management features. It also has an Ai integrated chatbot feature. It was built with react, tailwindwcss, framer-motion ",
    image: mindease,
    tech: ["React", "Tailwindcss", "Framer-motion"],
    github: "https://github.com/Samuelosoba/MindEase",
    live: "https://mindeaseproject.vercel.app",
    category: "Frontend",
    date: "Sept 2025",
  },
  {
    id: 4,
    title: "INSTASHOT",
    description: "A social media app, with real-time messaging and live feed.",
    longDescription:
      "I developed a full-featured Instagram clone using React, Node.js, and MongoDB. The app allows users to share photos and videos seamlessly. It includes like and comment functionality for interactive engagement.Users can follow and unfollow each other to build social connections.The platform features a responsive design for both web and mobile use.I handled the end-to-end development, including frontend, backend, and database.",
    image: instashot,
    tech: ["React", "Express", "Socket-io", "Nodejs", "Nodejs"],
    github: "https://github.com/Samuelosoba/INSTASHOT",
    live: "https://instashot-swart.vercel.app/",
    category: "Fullstack",
    date: "Sept 2024",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Project["category"]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) =>
    filter === "All" ? true : project.category === filter,
  );

  const categories: Project["category"][] = [
    "All",
    "Fullstack",
    "Frontend",
    "Backend",
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 grid-black text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold  mb-6 relative inline-block "
          >
            <p className="relative inline-block font-bold text-4xl md:text-5xl pb-2">
              PROJECTS
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>{" "}
            </p>
          </motion.h1>
          <p className="text-zinc-600 text-base md:text-lg max-w-md mx-auto">
            A selection of web applications I&apos;ve built with performance and
            beautiful design in mind.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-6 md:py-3 rounded-2xl text-sm md:text-base font-medium transition-all ${
                filter === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-white hover:bg-zinc-800 text-zinc-900"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Play className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-red-500">
                      {project.date}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Visit my GitHub profile"
                        className="text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Visit my GitHub profile"
                          className="text-zinc-500 hover:text-zinc-900 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm md:text-base line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] md:text-xs px-3 py-1 bg-zinc-200 text-zinc-900 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project"
                    type="button"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedProject.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl transition-colors text-sm sm:text-base"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        Code
                      </a>
                      {selectedProject.live !== "#" && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-700 leading-relaxed mb-6 text-sm sm:text-base">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-4 h-4 text-emerald-500" />
                      <span className="uppercase text-xs tracking-widest font-medium text-zinc-500">
                        Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-zinc-200 text-zinc-900 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
