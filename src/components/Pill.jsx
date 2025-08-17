export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-200">
      {children}
    </span>
  );
}
