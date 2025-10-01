import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiGit,
  SiGithub,
  SiSocketdotio,
  SiJsonwebtokens,
  SiExpo,
  SiChartdotjs,
  SiReactivex,
} from "react-icons/si";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  year: string;
};

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="text-sky-400 text-2xl" />,
  "React Native": <SiReactivex className="text-sky-400 text-2xl" />,
  Nodejs: <SiNodedotjs className="text-green-500 text-2xl" />,
  "Node.js": <SiNodedotjs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Express: <SiExpress className="text-gray-300 text-2xl" />,
  Postman: <SiPostman className="text-orange-500 text-2xl" />,
  Vercel: <SiVercel className="text-white text-2xl" />,
  Git: <SiGit className="text-red-500 text-2xl" />,
  GitHub: <SiGithub className="text-gray-200 text-2xl" />,
  "Socket.io": <SiSocketdotio className="text-gray-200 text-2xl" />,
  JWT: <SiJsonwebtokens className="text-yellow-500 text-2xl" />,
  Expo: <SiExpo className="text-black dark:text-white text-2xl" />,
  "Chart.js": <SiChartdotjs className="text-pink-500 text-2xl" />,
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Technologies as icons */}
        <div className="flex space-x-4 mb-4">
          {project.technologies.map((tech) => (
            <div key={tech} className="hover:scale-110 transition-transform">
              {techIcons[tech] || <span className="text-gray-400">{tech}</span>}
            </div>
          ))}
        </div>

        {/* Links */}
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
