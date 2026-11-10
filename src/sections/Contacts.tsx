import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../component/ContactForm";
import SectionHeading from "../component/SectionHeading";
import { EMAIL, socialLinks } from "../data/links";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 807 677 6945",
    href: "tel:+2348076776945",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

export default function Contacts() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-zinc-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="contact-heading"
          title="Contact"
          subtitle="Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your ideas to life."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact info + socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:text-accent">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </span>
                    <span className="block text-zinc-900">{item.value}</span>
                  </span>
                </>
              );
              const cardClass =
                "group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition-colors";

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${cardClass} hover:border-zinc-900`}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={cardClass}>
                  {content}
                </div>
              );
            })}

            <ul className="flex gap-3 pt-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
