"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "../component/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "samuelosoba7@gmail.com",
    href: "mailto:samuelosoba7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+2348076776945",
    href: "tel:+2348076776945",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

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

export default function Contacts() {
  return (
    <section id="contact" className="py-24 bg-gray-200 grid-black text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold  mb-6 relative inline-block "
          >
            <p className="relative inline-block font-bold text-4xl md:text-5xl pb-2">
              CONTACT
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[2px] bg-red-500"></span>{" "}
            </p>
          </motion.h1>
          <p className="text-lg  max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 border-2 border-gray-400 p-4"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center border-2 border--400">
                  <item.icon className="h-6 w-6 text-gray-500 transition" />
                </div>
                <div>
                  <p className="text-sm text-black font-bold">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-black transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-black">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-2 border-t border-white/10">
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-white/10 text-gray-500 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=""
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
