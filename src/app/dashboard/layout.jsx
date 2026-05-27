import MobileNav from "./MobileNav";
import SidebarLinks from "./SidebarLinks";
import { getDashboardSectionsForRole } from "@/lib/dashboard-access";
import { PlayCircle } from "lucide-react";

export const metadata = {
    title: "Dashboard",
    description: "Panel de administración",
};

const sectionIcons = {
    academia: PlayCircle,
};

export default async function DashboardLayout({ children }) {
    const role = "admin";
    const desktopSections = getDashboardSectionsForRole(role);

    return (
        <div className="h-screen w-full overflow-hidden bg-[#F5F5F7]">
            <div className="flex h-full w-full">

                <aside className="hidden h-screen w-[240px] shrink-0 flex-col bg-[#1D1D1F] text-white lg:flex">

                    <div className="border-b border-[#3A3A3C] px-5 pb-5 pt-7">
                        <div className="flex justify-center">
                            <img
                                src="/logo.png"
                                alt="AgendaClinica"
                                className="h-20 w-full object-contain"
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <p className="text-[13px] font-semibold tracking-tight text-white/90">
                                AgendaClinica
                            </p>
                            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#6E6E73]">
                                Academia
                            </p>
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-3 py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {desktopSections.map((section) => {
                            const SectionIcon = sectionIcons[section.icon] || PlayCircle;
                            return (
                                <div key={section.title}>
                                    <div className="mb-2 flex items-center gap-2 px-3">
                                        <SectionIcon
                                            className="h-3.5 w-3.5 text-[#6E6E73]"
                                            strokeWidth={1.75}
                                        />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                                            {section.title}
                                        </span>
                                    </div>
                                    <SidebarLinks items={section.items} />
                                </div>
                            );
                        })}
                    </nav>

                    <div className="border-t border-[#3A3A3C] px-4 py-4">
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-[12px] text-[#86868B]">AC Academia 1.0</span>
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
