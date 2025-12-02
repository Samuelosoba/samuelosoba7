import { motion, type Variants } from "framer-motion";
import type { FC } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiGit,
  SiGithub as SiGithubIcon,
  SiSocketdotio,
  SiJsonwebtokens,
  SiExpo,
  SiChartdotjs,
  SiReactivex,
} from "react-icons/si";
import { useNavigate } from "react-router";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category?: string;
  year?: string;
  route: string;
}

const techIcons: Record<string, FC<{ className?: string }>> = {
  React: SiReact,
  "React Native": SiReactivex,
  Nodejs: SiNodedotjs,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Postman: SiPostman,
  Vercel: SiVercel,
  Git: SiGit,
  GitHub: SiGithubIcon,
  "Socket.io": SiSocketdotio,
  JWT: SiJsonwebtokens,
  Expo: SiExpo,
  "Chart.js": SiChartdotjs,
};

// Motion variants with custom prop for stagger
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectCard: FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
 
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
      onClick={() => project.route && window.open(project.route, "_blank")}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.year && (
            <span className="text-sm text-gray-400">{project.year}</span>
          )}
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex space-x-4 mb-4">
          {project.technologies.map((tech) => {
            const Icon = techIcons[tech];
            if (!Icon)
              return (
                <span key={tech} className="text-gray-400">
                  {tech}
                </span>
              );
            const colorClass = {
              React: "text-sky-400",
              "React Native": "text-sky-400",
              Nodejs: "text-green-500",
              "Node.js": "text-green-500",
              MongoDB: "text-green-600",
              Express: "text-gray-300",
              Postman: "text-orange-500",
              Vercel: "text-white",
              Git: "text-red-500",
              GitHub: "text-gray-200",
              "Socket.io": "text-gray-200",
              JWT: "text-yellow-500",
              Expo: "text-black dark:text-white",
              "Chart.js": "text-pink-500",
            }[tech];
            return (
              <Icon
                key={tech}
                className={`text-2xl hover:scale-110 transition-transform ${colorClass}`}
              />
            );
          })}
        </div>

        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-white"
            >
              <FaGithub /> <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-white"
            >
              <FaExternalLinkAlt /> <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
