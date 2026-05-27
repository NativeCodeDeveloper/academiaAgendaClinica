"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Calendar,
    FolderOpen,
    Home,
    LayoutDashboard,
    Menu,
    PlayCircle,
    Scan,
    UserCog,
    X,
} from "lucide-react";
import { getDashboardSectionsForRole } from "@/lib/dashboard-access";

const itemIcons = {
    "/dashboard": Home,
    "/dashboard/editarPaciente": UserCog,
    "/dashboard/moduloAgenda": Calendar,
    "/dashboard/moduloOdontograma": Scan,
    "/dashboard/principal": LayoutDashboard,
    "/dashboard/accesoFichas": FolderOpen,
};

const sectionIconMap = {
    academia: PlayCircle,
};

export default function MobileNav({ role }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const sections = getDashboardSectionsForRole(role);

    return (
        <div className="sticky top-0 z-40 lg:hidden">
            <div className="border-b border-[#E8E8ED] bg-white/95 backdrop-blur-xl">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E8E8ED] bg-white">
                            <img src="/logo.png" alt="AgendaClinica" className="h-6 w-6 object-contain" />
                        </div>
                        <div>
                            <p className="text-[13px] font-semibold leading-none text-[#1D1D1F]">
                                AgendaClinica
                            </p>
                            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6E6E73]">
                                Academia
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8E8ED] bg-white text-[#1D1D1F] transition-colors hover:bg-[#F5F5F7]"
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    >
                        {open ? <X className="h-4 w-4" strokeWidth={1.75} /> : <Menu className="h-4 w-4" strokeWidth={1.75} />}
                    </button>
                </div>
            </div>

            {open && (
                <>
                    <div
                        className="fixed inset-0 top-14 z-40 bg-black/20"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute left-0 right-0 z-50 mx-3 mt-2 overflow-hidden rounded-2xl border border-[#E8E8ED] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

                        <div className="border-b border-[#E8E8ED] px-5 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8E8ED] bg-[#F5F5F7]">
                                    <img src="/logo.png" alt="AgendaClinica" className="h-7 w-7 object-contain" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold text-[#1D1D1F]">AgendaClinica</p>
                                    <p className="mt-0.5 text-[12px] text-[#6E6E73]">Navegación principal</p>
                                </div>
                            </div>
                        </div>

                        <nav className="max-h-[72vh] overflow-y-auto p-3">
                            {sections.map((section) => {
                                const SectionIcon = sectionIconMap[section.icon] || PlayCircle;

                                return (
                                    <div key={section.title} className="mb-1">
                                        <div className="flex items-center gap-2 px-2 py-2">
                                            <SectionIcon className="h-3.5 w-3.5 text-[#86868B]" strokeWidth={1.75} />
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86868B]">
                                                {section.title}
                                            </span>
                                        </div>

                                        <div className="space-y-0.5">
                                            {section.items.map((item) => {
                                                const isActive = pathname === item.href;
                                                const Icon = itemIcons[item.href] || Home;

                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors ${
                                                            isActive
                                                                ? "bg-[#0071E3]/8 text-[#0071E3]"
                                                                : "text-[#1D1D1F] hover:bg-[#F5F5F7]"
                                                        }`}
                                                    >
                                                        <Icon
                                                            className={`h-4 w-4 shrink-0 ${isActive ? "text-[#0071E3]" : "text-[#6E6E73]"}`}
                                                            strokeWidth={1.75}
                                                        />
                                                        <span className="flex-1">{item.label}</span>
                                                        {isActive && (
                                                            <span className="h-1.5 w-1.5 rounded-full bg-[#0071E3]" />
                                                        )}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
