import Link from "next/link";
import { Michroma } from "next/font/google";
import MobileNav from "./MobileNav";
import { getDashboardSectionsForRole } from "@/lib/dashboard-access";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Dashboard",
    description: "Panel de administración",
};

function sectionIcon(icon) {
    const commonProps = {
        className: "h-4 w-4",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1.6,
    };

    switch (icon) {
        case "home":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            );
        case "calendar":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            );
        case "user":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            );
        case "document":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case "image":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            );
        case "settings":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case "academia":
            return (
                <svg {...commonProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            );
        default:
            return null;
    }
}

function DesktopSection({ title, icon, items }) {
    return (
        <details className="group" open>
            <summary className="flex items-center justify-between rounded-xl px-3 py-2 cursor-pointer list-none select-none transition-all duration-200 hover:bg-white/[0.04]">
                <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-400 ring-1 ring-white/[0.08]">
                        {sectionIcon(icon)}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 group-hover:text-white/80 transition-colors duration-200">{title}</span>
                </span>
                <svg className="h-3.5 w-3.5 text-white/25 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
            </summary>
            <div className="mt-1 ml-[22px] space-y-0.5 border-l border-white/[0.06] pl-4">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group/link flex items-center gap-3 rounded-lg px-3 py-[7px] text-[12px] font-normal text-white/45 transition-all duration-200 hover:bg-gradient-to-r hover:from-cyan-500/[0.08] hover:to-indigo-500/[0.04] hover:text-white/90"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-all duration-300 group-hover/link:bg-cyan-400 group-hover/link:shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                        {item.label}
                    </Link>
                ))}
            </div>
        </details>
    );
}

export default async function DashboardLayout({ children }) {
    const role = "admin";
    const desktopSections = getDashboardSectionsForRole(role);

    return (
        <div className="h-screen w-full overflow-hidden bg-white">
            <div className="flex h-full w-full">
                <aside className="hidden h-screen w-[260px] shrink-0 flex-col bg-[linear-gradient(180deg,#0a0e1a_0%,#0d1324_40%,#0f172a_100%)] font-[family-name:var(--font-inter)] text-white lg:flex">

                        <div className="relative shrink-0 px-5 pb-4 pt-5">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/[0.04] blur-3xl" />
                                <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-indigo-500/[0.04] blur-3xl" />
                            </div>

                            <div className="relative flex justify-center">
                                <img
                                    src="/logo.png"
                                    alt="AgendaClinica"
                                    className="relative h-28 w-full object-contain object-center drop-shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                                />
                            </div>
                            <div className={`${michroma.className} mt-1 text-center`}>
                                <p className="text-[12px] leading-tight tracking-[0.12em] bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">AgendaClinica</p>
                                <p className="text-[9px] mt-1.5 font-medium uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Academia</p>
                            </div>
                            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                        </div>

                        <nav className="flex-1 overflow-y-auto px-3 pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <div className="space-y-1.5">
                                {desktopSections.map((section) => (
                                    <DesktopSection
                                        key={section.title}
                                        title={section.title}
                                        icon={section.icon}
                                        items={section.items}
                                    />
                                ))}
                            </div>

                        </nav>

                        <div className="relative shrink-0 px-4 py-4">
                            <div className="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
                            <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-4 py-3.5 ring-1 ring-white/[0.08] backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25">Sistema</div>
                                        <div className="mt-0.5 text-[11px] font-medium bg-gradient-to-r from-white/70 to-white/50 bg-clip-text text-transparent">AC Academia 1.0</div>
                                    </div>
                                    <div className="relative flex items-center gap-1.5">
                                        <span className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 animate-ping rounded-full bg-emerald-400/10" />
                                        <span className="relative block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </aside>

                <div className="min-w-0 flex-1 overflow-y-auto h-full">
                    <MobileNav role={role} />
                    <main className="min-w-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
