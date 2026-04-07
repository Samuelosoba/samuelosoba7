import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Samuelosoba",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/samuel-osoba-9351b023b",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:samuelosoba7@gmail.com", label: "Email" },
  ];

  return (
    <footer className="grid-bg backdrop-blur-sm  border-t border-white/10 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
         

          <div className="flex items-center mx-auto justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className=" hover:text-blue-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-red-500" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className=" text-sm">
            © {new Date().getFullYear()} Samuel Osoba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
