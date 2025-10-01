import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../component/ProjectCard";
import { Filter } from "lucide-react";

import link from "../assets/link.jpeg";
import budge from "../assets/budge.jpeg";
import instashots from "../assets/taskduty.png";
import instashot from "../assets/instashots.png";
import klar from "../assets/klar.png";
import newgold from "../assets/newgold.png";

// Define a Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  year: string;
}

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "klar-Institut",
      description:
        "I built a web application for Klar Institut, a German language school, using the MERN stack. The platform allows students to register and pay for courses online with a smooth, responsive interface. It includes a blog page for updates and an events page for showcasing school activities. An admin dashboard was developed to manage courses, blog posts, and events efficiently.I worked as the solo developer, collaborating with a Figma designer on the UI/UX.The app was deployed for production use, making it fully accessible to students and administrators.",
      image: klar,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "",
      demo: "https://klarinstitut.vercel.app",
      category: "Full Stack",
      year: "2025",
    },

    {
      id: 2,
      title: "Instashots",
      description:
        "I developed a full-featured Instagram clone using React, Node.js, and MongoDB. The app allows users to share photos and videos seamlessly. It includes like and comment functionality for interactive engagement.Users can follow and unfollow each other to build social connections.The platform features a responsive design for both web and mobile use.I handled the end-to-end development, including frontend, backend, and database.",
      image: instashot,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Samuelosoba/INSTASHOT",
      demo: "https://instashot-swart.vercel.app/",
      category: "Full Stack",
      year: "2025",
    },
    {
      id: 3,
      title: "Task Duty",
      description:
        "Task Duty is a streamlined task management web application that allows users to efficiently organize their daily activities. Users can register and log in securely, then create, edit, and delete tasks in a user-friendly interface. The app supports real-time updates and ensures data persistence, enabling users to stay productive and in control of their to-do lists.",
      image: instashots,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Samuelosoba/Task-Duty",
      demo: "https://task-duty-client.vercel.app/",
      category: "Full Stack",
      year: "2025",
    },
    {
      id: 4,
      title: "Newgold22 Travels",
      description:
        "I designed and developed a modern landing page for New Gold 22, a travel agency. The page showcases destinations, travel packages, and services in an engaging layout. It features a fully responsive design optimized for desktop and mobile users.I added clear call-to-actions to drive customer inquiries and bookings.The UI was built with React and TailwindCSS for speed and flexibility. I worked independently to deliver a professional and client-focused solution..",
      image: newgold,
      technologies: ["React", "Node.js"],
      github: "",
      demo: "https://newgold22travels.ng",
      category: "Frontend",
      year: "2025",
    },
    // {
    //   id: 4,
    //   title: "LINK",
    //   description:
    //     "A custom URL shortening service with analytics dashboard, custom aliases, and click tracking capabilities.",
    //   image: budge,
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    //   github: "https://github.com/Samuelosoba/LINK",
    //   demo: "https://url-shortener-demo.com",
    //   category: "Full Stack",
    //   year: "2025",
    // },
    // {
    //   id: 5,
    //   title: "Budge",
    //   description:
    //     "Budge is a modern and intelligent personal finance app built with React Native, designed to help users effortlessly manage their income and expenses. It offers a clean and responsive UI with full dark mode support, enabling users to create custom categories, log transactions, and set optional monthly budgets. The app features an interactive analytics chart to visualize spending patterns and category distributions, helping users make informed financial decisions. Additionally, Budge includes an integrated AI-powered chatbot that provides budgeting tips, answers user questions, and offers personalized financial insights.",
    //   image: link,
    //   technologies: [
    //     "Bolt.new",
    //     "Expo",
    //     "React Native",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "Recharts",
    //   ],
    //   github: "",
    //   demo: "https://budge-demo.com",
    //   category: "Full Stack",
    //   year: "2025",
    // },
  ];

  const filters: string[] = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="min-h-screen pt-20 " id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="text-blue-400">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've built using the different tools. Each
            project showcases different aspects of full-stack development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Filter className="h-5 w-5 text-gray-400" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-blue-400 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Projects;
