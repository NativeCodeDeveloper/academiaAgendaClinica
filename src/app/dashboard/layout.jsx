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
        <div className="relative h-screen w-full overflow-hidden bg-[#F5F5F7]">

            {/* Adentro del dashboard el fondo es plano: el mismo #F5F5F7 que
                cada capsula pinta en su propia pagina. Llego a tener el
                degradado animado (FondoAcademia), pero las lecciones sí pintan
                su fondo opaco, asi que el color solo asomaba en la franja del
                sidebar y se cortaba en una linea vertical bien visible. El
                degradado se queda donde no compite con nada: las dos portadas
                de entrada. */}

            <div className="relative z-10 flex h-full w-full">

                {/* Tarjeta flotante, misma forma que el sidebar de la
                    plataforma (esquinas redondeadas, borde hairline y sombra en
                    dos capas: una de contacto de 1px y otra difusa y muy
                    abierta). El fondo oscuro se mantiene: es lo que permite
                    usar el logo blanco sin placa detras.

                    La columna mide 264px para que la tarjeta conserve sus 240:
                    el respiro se gana afuera, no quitandole ancho al menu.

                    La franja alrededor no lleva color propio: deja ver el
                    gris del layout, y es lo que hace que la tarjeta se lea
                    flotando en vez de pegada al borde. */}
                <aside className="hidden h-screen w-[264px] shrink-0 flex-col p-3 lg:flex">
                  <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#1D1D1F] text-white shadow-[0_1px_2px_rgba(15,23,42,0.10),0_12px_28px_-18px_rgba(15,23,42,0.55)]">

                    <div className="border-b border-[#3A3A3C] px-5 pb-5 pt-7">
                        <div className="flex justify-center">
                            {/* Logo blanco sobre fondo transparente: se ve
                                directo contra el oscuro del sidebar. */}
                            <img
                                src="/logo-full.png"
                                alt="AgendaClinica"
                                className="h-12 w-full object-contain"
                            />
                        </div>
                        <div className="mt-3 text-center">
                            {/* El nombre ya viene dentro del logo, asi que
                                debajo solo queda la palabra que distingue a
                                este sitio de la plataforma. */}
                            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6E6E73]">
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
                            <span className="text-[12px] text-[#86868B]">AC Academia 2.0</span>
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
