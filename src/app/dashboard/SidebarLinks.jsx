"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Calendar,
    FileText,
    FolderOpen,
    Home,
    LayoutDashboard,
    Scan,
    UserCog,
} from "lucide-react";

const itemIcons = {
    "/dashboard": Home,
    "/dashboard/editarPaciente": UserCog,
    "/dashboard/moduloAgenda": Calendar,
    "/dashboard/moduloOdontograma": Scan,
    "/dashboard/principal": LayoutDashboard,
    "/dashboard/accesoFichas": FolderOpen,
    "/dashboard/recetaRapida": FileText,
    "/dashboard/recetasHistorial": FileText,
};

export default function SidebarLinks({ items }) {
    const pathname = usePathname();

    return (
        <div className="space-y-0.5">
            {items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = itemIcons[item.href] || Home;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-normal transition-colors ${
                            isActive
                                ? "bg-[#0071E3]/[0.12] text-[#0071E3]"
                                : "text-white/60 hover:bg-white/[0.07] hover:text-white/90"
                        }`}
                    >
                        <Icon
                            className={`h-4 w-4 shrink-0 ${isActive ? "text-[#0071E3]" : ""}`}
                            strokeWidth={1.75}
                        />
                        <span className="leading-none">{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );
}
