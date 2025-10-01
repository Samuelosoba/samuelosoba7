// src/sections/Hero.tsx
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../assets/sam.png";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  GithubIcon,
} from "lucide-react";

interface HeroProps {
  name: string;
  role: string;
  description: string;
}

export const Hero: FC<HeroProps> = ({ name, role, description }) => {
  const fullText = `Hey, I'm ${name} ✨\n${role}`;
  const [displayedText, setDisplayedText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samuelosoba",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samuel-osoba-9351b023b",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
  ];

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
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 px-6  text-white min-h-screen"
    >
      {/* Avatar */}
      <img
        src={profileImg}
        alt={`${name} profile`}
        className="w-28 h-28 rounded-full mb-6 border-none  object-cover"
      />

      {/* Typing Animation Title */}
      <div className="relative">
        {/* Transparent text locks space */}
        <h1 className="text-4xl md:text-5xl font-bold whitespace-pre-line opacity-0">
          {fullText}
        </h1>
        {/* Animated typing text */}
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
      {typingDone && (
        <motion.p
          className="mt-6 md:mt-16 max-w-2xl text-lg text-gray-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      )}

      {/* Buttons staggered animation */}
      {typingDone && (
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          {["Contact Me", "View Projects"].map((btn, i) => (
            <motion.a
              key={btn}
              href={i === 0 ? "#contact" : "#projects"}
              className={`px-5 py-2 rounded-full font-medium transition ${
                i === 0
                  ? "bg-white text-black hover:bg-blue-400 hover:text-white"
                  : "border border-gray-400 hover:bg-blue-400 hover:border-blue-400 hover:text-white"
              }`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {btn}
            </motion.a>
          ))}
        </div>
      )}

      {/* Social Icons fade up */}
      {typingDone && (
        <motion.div
          className="flex gap-6 mt-10 text-2xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="https://github.com/samuelosoba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/samuel-osoba-9351b023b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter />
          </a>
        </motion.div>
      )}
    </section>
  );
};
