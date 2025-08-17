import { Github, Linkedin, Mail } from "lucide-react";

// --- Reusable components ---
function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export default function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Somnath Bhattarai. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:sumanbhattarai200@gmail.com" 
                className="inline-flex items-center gap-2 hover:underline"
                aria-label="Email"
              >
                <Mail className="h-4 w-4"/> Email
              </a>
              <a 
                href="https://www.linkedin.com/in/somnath-bhattarai" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 hover:underline"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4"/> LinkedIn
              </a>
              <a 
                href="https://github.com/somnath271" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 hover:underline"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4"/> GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
