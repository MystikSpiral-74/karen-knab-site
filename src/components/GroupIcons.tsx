// Thin-line icons for the "Who I work with" grid. Order matches who.groups in copy.ts.
const paths: React.ReactNode[] = [
  // Founders, owners, executives: building
  <g key="b"><path d="M5 21V8l7-5 7 5v13" /><path d="M3 21h18" /><path d="M10 21v-5h4v5" /><path d="M9.5 10.5h5" /></g>,
  // Attorneys: scales
  <g key="a"><path d="M12 4v16" /><path d="M8 20h8" /><path d="M5 7h14" /><path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0L5 7z" /><path d="M19 7l-2.5 6a2.5 2.5 0 0 0 5 0L19 7z" /></g>,
  // Finance: rising line
  <g key="f"><path d="M4 20h16" /><path d="M5 15l4-4 3 3 6-7" /><path d="M15 7h3v3" /></g>,
  // Physicians: cross in circle
  <g key="p"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v9" /><path d="M7.5 12h9" /></g>,
  // Family-owned businesses: connected nodes
  <g key="n"><circle cx="12" cy="6" r="2.5" /><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M10.8 8.2L7.2 14.8" /><path d="M13.2 8.2l3.6 6.6" /><path d="M8.5 17h7" /></g>,
  // Other high achievers: peak
  <g key="m"><path d="M3 20l6.5-11 4 6.5 2-3L21 20z" /><path d="M9.5 9L12 6" /></g>,
];

export function GroupIcon({ index }: { index: number }) {
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-taupe text-petrol">
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[index % paths.length]}
      </svg>
    </span>
  );
}
