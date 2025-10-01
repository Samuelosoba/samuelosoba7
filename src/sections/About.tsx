// src/sections/About.tsx
import { FC } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { Code, Database, Globe, Server, LucideIcon } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

/* ---------- types ---------- */
interface Skill {
  category: string;
  icon: LucideIcon;
  technologies: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

/* ---------- variants ---------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ---------- small helper component for spinning icons ---------- */
const SpinIcon: FC<{ Icon: React.ElementType }> = ({ Icon }) => {
  const controls = useAnimation();

  const handleHoverStart = async () => {
    await controls.start({
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    controls.set({ rotate: 0 });
  };

  return (
    <motion.div
      animate={controls}
      onHoverStart={handleHoverStart}
      className="flex items-center justify-center p-4 bg-gray-800/50 rounded-xl border border-white/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
      style={{ transformOrigin: "50% 50%" }}
      whileHover={{ scale: 1.2 }}
    >
      <Icon className="h-12 w-12 text-blue-400" />
    </motion.div>
  );
};

/* ---------- main About component ---------- */
const About: FC = () => {
  const skills: Skill[] = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication",
        "Middleware",
      ],
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MongoDB", "Mongoose"],
    },
    {
      category: "Tools",
      icon: Code,
      technologies: ["Git", "npm", "Postman", "Vercel"],
    },
  ];
  const icons = [
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiVercel,
    SiGit,
    SiGithub,
    SiTailwindcss,
  ];

  const experience: Experience[] = [
    {
      title: "Full Stack Developer (Intern)",
      company: "Tech Studio Academy, Onipanu",
      period: "2024 - 2025",
      description:
        "As a Web Development Intern at TechStudio, I collaborated in a fast-paced, agile environment to design, develop, and optimize responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). We developed an event planner web application, where users can buy book and buy tickets for listed events. My role involved writing clean, maintainable code and building full-stack features.",
    },
    {
      title: "Frontend Developer (Intern)",
      company: "FlexiSAF edusoft solution",
      period: "2025 - Present",
      description:
        "Developed and enhanced dynamic product pages using Javascript and React, improving user experience and page responsiveness. I also collaborated with the content and design teams to implement visually engaging layouts aligned with brand guidelines. I gained hands-on experience in frontend web development, content management, and working in a remote team environment.",
    },
  ];

  return (
    <div className="py-10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            I'm a passionate full-stack developer who loves creating digital
            solutions that make a difference. With expertise in the MERN stack,
            I build scalable, user-friendly applications that solve real-world
            problems.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 my-20"
        >
          {/* Personal Info */}
          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all order-2 col-span-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm a dedicated full-stack developer with a passion for
                creating innovative web applications. My journey began with
                curiosity about how websites work, and it has evolved into a
                love for building complete digital experiences.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express.js, React,
                Node.js) and enjoy working on projects that challenge me to grow
                as a developer. From database design to user interface creation,
                I handle every aspect of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={item}
            className="md:flex items-center hidden order-1 col-span-6"
          >
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              <div className="w-50 h-50 rounded-full bg-blue-400 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Code className="h-32 w-32 text-blue-400" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/20 to-white/50 animate-pulse"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <section className="">
          <div className="lg:flex justify-between items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center justify-center items-center text-white mb-12"
            >
              Technical Skills
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center"
            >
              {icons.map((Icon, index) => (
                <SpinIcon key={index} Icon={Icon} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-20 grid lg:grid-cols-12 justify-between items-center">
            <h2 className="text-4xl font-bold text-white mb-12 col-span-12 lg:col-span-6 lg:text-start text-center">
              Experience
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8 col-span-12 lg:col-span-6"
            >
              {experience.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
