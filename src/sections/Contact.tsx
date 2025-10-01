import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "../component/ContactForm";

function Contact() {
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

  return (
    <div className="min-h-screen pt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                  <item.icon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10 text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
