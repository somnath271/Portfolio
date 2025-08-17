import { useState } from "react";
import Section from "./Section";
import Card from "./Card";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xgvwezoq", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  }

  return (
    <Section
      id="contact"
      heading="Let's build something"
      sub="I'm open to work, freelance, and collaboration."
    >
      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Your name</label>
            <input
              name="name"
              required
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm">
              <a
                href="mailto:sumanbhattarai200@gmail.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/somnath-bhattarai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/somnath271"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500"
            >
              Send
            </button>
          </div>

          {/* ✅ Success/Error Feedback */}
          {status === "SUCCESS" && (
            <p className="text-green-600 text-sm font-medium mt-2">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-600 text-sm font-medium mt-2">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </Card>
    </Section>
  );
}
