import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10"
    >
      {/* Name */}
      <div>
        <label htmlFor="from_name" className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          placeholder="Enter your full name"
          title="Your full name"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="from_email" className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          placeholder="Enter your email"
          title="Your email address"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Type your message here"
          title="Your message"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-all duration-300"
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-400 mt-4 text-center">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-4 text-center">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
