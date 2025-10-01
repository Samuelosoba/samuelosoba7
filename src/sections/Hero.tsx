import { useEffect, useState } from "react";
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";

import profileImg from "../assets/sam.png";
import { Github, Linkedin, Twitter } from "lucide-react";

interface HeroProps {
  name: string;
  role: string;
  description: string;
}

export const Hero: FC<HeroProps> = ({ name, role, description }) => {
  const fullText = `Hey, I'm ${name} ✨\n${role}`;
  const [displayedText, setDisplayedText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullText]);

  // motion variants
  const buttonContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 px-6 text-white min-h-screen"
    >
      {/* Avatar */}
      <img
        src={profileImg}
        alt={`${name} profile`}
        className="w-28 h-28 rounded-full mb-6 border-none object-cover"
      />

      {/* Typing Animation Title */}
      <div className="relative">
        {/* Transparent text locks space to prevent jumping */}
        <h1 className="text-4xl md:text-5xl font-bold whitespace-pre-line opacity-0">
          {fullText}
        </h1>
        {/* Animated typing text */}
        <h1 className="absolute inset-0 text-4xl md:text-5xl font-bold whitespace-pre-line">
          {displayedText.includes(name) ? (
            <>
              {displayedText.split(name)[0]}
              <span className="text-blue-400">{name}</span>
              {displayedText.split(name)[1]}
            </>
          ) : (
            displayedText
          )}
          <span className="animate-blink">|</span>
        </h1>
      </div>

      {/* Description slides from the right */}
      <motion.p
        className="mt-6 md:mt-16 max-w-2xl text-lg text-gray-300 min-h-[3rem]" // reserve height
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: typingDone ? 1 : 0, x: typingDone ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {description}
      </motion.p>

      {/* Buttons staggered animation */}
      {/* Buttons animation from left */}
      <motion.div
        className="flex gap-4 mt-8 flex-wrap justify-center min-h-[3rem]"
        initial={{ opacity: 0, x: -50 }} // start from left
        animate={typingDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // animate to position
        transition={{ duration: 0.8, ease: "easeOut" }} // animate together
      >
        {["Contact Me", "View Projects"].map((btn, i) => (
          <a
            key={btn}
            href={i === 0 ? "#contact" : "#projects"}
            className={`px-5 py-2 rounded-full font-medium transition ${
              i === 0
                ? "bg-white text-black hover:bg-blue-400 hover:text-white"
                : "border border-gray-400 hover:bg-blue-400 hover:border-blue-400 hover:text-white"
            }`}
          >
            {btn}
          </a>
        ))}
      </motion.div>

      {/* Social Icons fade up */}
      <motion.div
        className="flex gap-6 mt-10 text-2xl text-gray-400 min-h-[2.5rem]" // reserve space
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 20 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="https://github.com/samuelosoba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="GitHub profile"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/samuel-osoba-9351b023b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="Linkedin profile"
        >
          <Linkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="Twitter profile"
        >
          <Twitter />
        </a>
      </motion.div>
    </section>
  );
};
