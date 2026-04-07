// src/sections/About.tsx
import { type FC } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code } from "lucide-react";
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

/* ---------- variants ---------- */

const SpinIcon: FC<{ Icon: React.ElementType; color: string }> = ({
  Icon,
  color,
}) => {
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
      className="flex items-center justify-center p-4 rounded-xl border border-black hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
      style={{ transformOrigin: "50% 50%" }}
      whileHover={{ scale: 1.2 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }} // 👈 bounce
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon className="h-12 w-12" style={{ color }} />
      </motion.div>
    </motion.div>
  );
};

/* ---------- main About component ---------- */
const Me: FC = () => {
  const icons = [
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiNextdotjs, color: "#000000" },
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiExpress, color: "#000000" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiPostman, color: "#FF6C37" },
    { Icon: SiVercel, color: "#000000" },
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiGithub, color: "#181717" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
  ];

  return (
    <div className="py-4 grid-black bg-gray-100 " id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            className="text-5xl font-bold  mb-6 relative inline-block"
          >
            <h2 className="relative inline-block font-bold text-4xl md:text-5xl pb-2">
              ABOUT
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>{" "}
            </h2>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:p-0 p-2 max-w-4xl text-black  md:mx-auto text-start leading-loose"
          >
            <p>
              I specialize in modern{" "}
              <span className="font-bold">FULL-STACK</span> web development,
              with strong proficiency on the{" "}
              <span className="font-bold">FRONTEND</span> using React, Next.js,
              and React Native to build responsive and user-friendly interfaces.
              On the <span className=" text-black font-bold ">BACKEND</span>, I
              work with Node.js and Express.js to develop scalable APIs, using
              MongoDB and MySQL for efficient data management. I also handle
              <span className=" text-black font-bold"> DEPLOYMENT</span> using
              platforms like Vercel, Render, and Pxxl, ensuring smooth and
              reliable application delivery. I actively use GitHub for version
              control and collaboration, and I enjoy working closely with Figma
              designers to translate UI/UX concepts into seamless digital
              experiences.
            </p>
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <section className="">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-center text-black mb-2 mt-6"
          >
            STACK
          </motion.h2>

          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {icons.concat(icons).map(({ Icon, color }, index) => (
                <SpinIcon key={index} Icon={Icon} color={color} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Me;
