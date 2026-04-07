"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Adeola Johnson",
    role: "Content Director",
    company: "The Connecting Bridge",
    image: "https://picsum.photos/id/64/200/200",
    quote:
      "Samuel is an exceptional operations intern. His ability to source high-quality models quickly and manage production logistics has significantly improved our workflow.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chinedu Okoro",
    role: "Lead Developer",
    company: "Bakkaz Information & Technology",
    image: "https://picsum.photos/id/91/200/200",
    quote:
      "Working with Samuel on our streaming projects was a pleasure. He writes clean, efficient code and has a great eye for both design and functionality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Bello",
    role: "Product Manager",
    company: "LocalBuka",
    image: "https://picsum.photos/id/1027/200/200",
    quote:
      "Samuel delivered outstanding work on our food-tech platform. His attention to detail and proactive attitude made him a valuable addition to the team.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);

  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );

  return (
    <section id="testimonials" className="py-12 grid-bg text-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold  mb-6 relative inline-block"
          >
            <h2 className="relative inline-block font-bold text-4xl md:text-5xl pb-2">
              TESTIMONIAL
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>{" "}
            </h2>
          </motion.h1>
          <p className="text-zinc-400 text-lg">
            Trusted by colleagues and clients across media and tech
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonialsData
              .filter((_, i) => i === currentIndex)
              .map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gray-200 grid-black text-black rounded-3xl p-6 md:p-10 shadow-2xl"
                >
                  <Quote className="w-10 h-10 text-red-500 mb-4" />

                  <p className=" md:text-xl leading-relaxed mb-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-6">
                   
                    <div>
                      <h4 className="text-xl font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-zinc-400">
                        {testimonial.role} at{" "}
                        <span className="text-black font-bold">
                          {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  {/* <div className="flex gap-1 mt-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-zinc-700"
                        }`}
                      />
                    ))}
                  </div> */}
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-colors border border-zinc-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-colors border border-zinc-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-red-500 scale-125"
                    : "bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
