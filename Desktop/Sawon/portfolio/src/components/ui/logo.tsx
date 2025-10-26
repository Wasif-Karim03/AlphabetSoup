export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Uttara Cricket Academy"
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="16" fill="currentColor" className="text-bangladesh-green" />
      
      {/* Letter T */}
      <rect x="12" y="14" width="8" height="2" fill="white" rx="0.5" />
      <rect x="14" y="14" width="4" height="10" fill="white" rx="0.5" />
      
      {/* Letter B */}
      <rect x="24" y="14" width="2" height="10" fill="white" rx="0.5" />
      <rect x="24" y="14" width="6" height="3" fill="white" rx="0.5" />
      <rect x="24" y="17.5" width="6" height="3" fill="white" rx="0.5" />
      
      {/* Letter D */}
      <rect x="32" y="14" width="2" height="10" fill="white" rx="0.5" />
      <path
        d="M 32 14 Q 36 14 36 18 Q 36 20 34.8 20.8 Q 36 21.5 36 24 Q 36 26 32 26 L 32 20 L 32 14 Z"
        fill="white"
        opacity="0.9"
      />
      
      {/* Name wordmark */}
      <text
        x="8"
        y="34"
        fontSize="8"
        fontWeight="600"
        fill="currentColor"
        className="text-foreground font-poppins"
      >
        TAREQ
      </text>
    </svg>
  );
}

