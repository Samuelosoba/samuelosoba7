import React from "react";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Home = () => {
  const fullText = `<PORTFOLIO`;
  const [displayedText, setDisplayedText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="grid-bg min-h-[90vh]  mt-16">
      {" "}
      <section
        id="home"
        className="flex flex-col items-center my-auto justify-center text-center py-20 px-6"
      >
        {/* Typing Animation Title */}
        <div className="relative">
          {/* Transparent text locks space to prevent jumping */}
          <h1 className="text-4xl md:text-5xl font-bold whitespace-pre-line opacity-0">
            {fullText}
          </h1>
          {/* Animated typing text */}
          <h1 className="absolute inset-0 text-4xl md:text-5xl font-bold whitespace-pre-line">
            {displayedText.includes(fullText) ? (
              <>
                {displayedText.split(fullText)[0]}
                <span className="">{fullText}</span>
                {displayedText.split(fullText)[1]}
              </>
            ) : (
              displayedText
            )}
            <span className="animate-blink">/&gt;</span>
          </h1>
          <div>
            <h2 className="mt-4 relative inline-block font-bold text-xl pb-2">
              OSOBA SAMUEL
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>
            </h2>
          </div>
        </div>

        {/* Description slides from the right */}
        <motion.div
          className=" max-w-2xl text-lg text-gray-500 " // reserve height
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: typingDone ? 1 : 0, x: typingDone ? 0 : 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="max-w-xl leading-loose mt-6">
            <span className=" bg-black p-1 font-bold text-white ">
              FULLSTACK DEVELOPER
            </span>{" "}
            with 3+ years experience | React, Node.js & Modern Web Technologies
            | Passionate about creating seamless user experiences.
          </p>
        </motion.div>

        {/* Buttons staggered animation */}
        {/* Buttons animation from left */}
        <motion.div
          className="flex gap-4 mt-8 flex-wrap justify-center "
          initial={{ opacity: 0, x: -50 }} // start from left
          animate={typingDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // animate to position
          transition={{ duration: 0.8, ease: "easeOut" }} // animate together
        >
          {["RESUME", "PROJECTS"].map((btn, i) => (
            <a
              key={btn}
              href={i === 0 ? "#contact" : "#projects"}
              className={`px-5 py-2 rounded-full font-medium transition ${
                i === 0
                  ? "bg-white border-b text-black hover:bg-black hover:text-white"
                  : "border-b bg-black text-white hover:bg-white hover:text-black"
              }`}
            >
              {btn}
            </a>
          ))}
        </motion.div>

        {/* Social Icons fade up */}
        <motion.div
          className="flex gap-6 mt-10 text-2xl text-gray-400 " // reserve space
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="https://github.com/samuelosoba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            title="GitHub profile"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/samuel-osoba-9351b023b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            title="Linkedin profile"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            title="Twitter profile"
          >
            <Twitter />
          </a>
        </motion.div>
      </section>
    </div>
  );
};
