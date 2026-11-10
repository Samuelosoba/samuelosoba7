import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const EMAIL = "samuelosoba7@gmail.com";
export const RESUME_URL = "/resume.pdf";

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Samuelosoba",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samuel-osoba-9351b023b",
    icon: FaLinkedin,
  },
];

export const emailLink = {
  label: "Email",
  href: `mailto:${EMAIL}`,
  icon: Mail,
};
