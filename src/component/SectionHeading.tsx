import { motion } from "framer-motion";

type SectionHeadingProps = {
  /** id for the <h2>, so the section can reference it with aria-labelledby */
  id: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  id,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 text-center md:mb-16"
    >
      <h2
        id={id}
        className="relative inline-block pb-3 text-4xl font-bold uppercase tracking-tight md:text-5xl"
      >
        {title}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-0.5 w-20 -translate-x-1/2 bg-accent"
        />
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-zinc-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
