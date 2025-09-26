import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Card from "./Card";
import Pill from "./Pill";

export default function ProjectCard({ p }) {
  return (
    <Card className="hover:scale-[1.02]">
      <div className="flex flex-col gap-4">
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {p.description}
            </p>
          </div>
          <ArrowUpRight className="mt-1 opacity-40 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-1 flex items-center gap-3">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>

        {/* Accent gradient ring on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
          <div className="h-full w-full rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        </div>
      </div>
    </Card>
  );
}
