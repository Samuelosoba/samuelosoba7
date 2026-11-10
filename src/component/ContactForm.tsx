import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL } from "../data/links";

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder:text-zinc-500 transition-colors focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/15";

const labelClass = "mb-2 block font-mono text-sm font-medium text-zinc-700";

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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
        },
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
    >
      <div>
        <label htmlFor="from_name" className={labelClass}>
          Name
        </label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          autoComplete="name"
          placeholder="Your full name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="from_email" className={labelClass}>
          Email
        </label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project"
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-zinc-900 px-6 py-3 font-mono text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send message"}
      </button>

      <p role="status" aria-live="polite" className="text-center text-sm">
        {status === "success" && (
          <span className="text-green-700">
            Message sent. I'll get back to you soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-red-700">
            Something went wrong. Please try again or email me at {EMAIL}.
          </span>
        )}
      </p>
    </form>
  );
};

export default ContactForm;
