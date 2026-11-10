import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "../component/SectionHeading";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  /** Optional link that backs up the testimonial (company site, LinkedIn, project) */
  companyUrl?: string;
  quote: string;
  rating: number;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ibukunolu A.",
    role: "German Instructor",
    company: "Goethe Institut",
    quote:
      "Excellent, professional and prompt and detailed explanation and feedback at every stage from idea to concept, to design draft and implementation, it was an experience I wish for in every project in the future. Attention to details and customer satisfaction is excellent. Price is also superb.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr Rufus Osoba",
    role: "CEO",
    company: "NewGold22 Travels & Tours",
    companyUrl: "https://newgold22travels.ng",
    quote: "Excellent delivery in web and email services",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Bello",
    role: "Product Manager",
    company: "LocalBuka",
    quote:
      "Samuel delivered outstanding work on our food-tech platform. His attention to detail and proactive attitude made him a valuable addition to the team.",
    rating: 4,
  },
];

function initials(name: string) {
  return name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="testimonials-heading"
          title="Testimonials"
          subtitle="What clients and teammates say about working with me."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.map((t, index) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8"
            >
              <Quote aria-hidden="true" className="h-8 w-8 text-accent" />

              <div
                className="mt-4 flex gap-1"
                role="img"
                aria-label={`Rated ${t.rating} out of 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-zinc-900 text-zinc-900"
                        : "text-zinc-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mt-4 leading-relaxed text-zinc-800">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-4 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 font-mono text-sm font-semibold text-white"
                >
                  {initials(t.name)}
                </span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-zinc-600">
                    {t.role},{" "}
                    {t.companyUrl ? (
                      <a
                        href={t.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {t.company}
                      </a>
                    ) : (
                      <span className="font-medium text-zinc-900">
                        {t.company}
                      </span>
                    )}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
