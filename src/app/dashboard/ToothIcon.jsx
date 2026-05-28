export default function ToothIcon({ className = "", strokeWidth = 1.75 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M8.4 3.5c1.15 0 2.08.55 3.6.55s2.45-.55 3.6-.55c2.45 0 4.4 2.05 4.4 4.85 0 2.2-1.05 3.9-1.85 5.7-.72 1.62-.98 4.45-1.92 5.78-.5.72-1.38.88-1.98.25-.7-.72-.72-2.13-.95-3.22-.25-1.2-.55-2.36-1.3-2.36s-1.05 1.16-1.3 2.36c-.23 1.09-.25 2.5-.95 3.22-.6.63-1.48.47-1.98-.25-.94-1.33-1.2-4.16-1.92-5.78C5.05 12.25 4 10.55 4 8.35 4 5.55 5.95 3.5 8.4 3.5Z" />
            <path d="M9.25 6.2c.72.32 1.58.5 2.75.5s2.03-.18 2.75-.5" />
        </svg>
    );
}
