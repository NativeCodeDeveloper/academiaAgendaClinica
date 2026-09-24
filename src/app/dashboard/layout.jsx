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

            {/* Fondo de la Academia: el mismo gris de las capsulas (#F5F5F7).
                Antes era negro con orbes de color (morado, rosa, amarillo)
                difuminados. Eso obligaba a que cada pantalla decidiera su
                propio fondo, y no calzaba con las lecciones, que siempre
                fueron claras: al pasar de una a otra la vista saltaba de oscuro
                a claro. Ahora el gris es unico para todo el dashboard y el
                sidebar oscuro flota encima, que es de donde sale el contraste.

                Los degradados se mantienen, en version clara: los mismos tres
                arriba a la derecha y el de abajo a la izquierda, pero en tonos
                pastel y con poca opacidad. En su version saturada sobre negro
                pintaban la pantalla; sobre el gris claro tienen que leerse como
                un tinte, no como un color — si se notan al mirarlos de frente,
                estan de mas.

                El grano se mantiene, pero al 12% y no al 30%: la textura es
                ruido oscuro, y la misma carga que sobre negro se veia como
                arena, sobre gris claro se ve como una pantalla sucia. Al 12%
                se nota el grano sin ensuciar el gris. */}
            <div className="pointer-events-none absolute -right-60 -top-10 z-0 flex flex-col items-end blur-xl">
                <div className="h-40 w-240 rounded-full bg-linear-to-b from-violet-300/45 to-sky-300/45 blur-[6rem]" />
                <div className="h-40 w-360 rounded-full bg-linear-to-b from-rose-200/45 to-amber-200/45 blur-[6rem]" />
                <div className="h-40 w-240 rounded-full bg-linear-to-b from-amber-200/40 to-sky-200/45 blur-[6rem]" />
            </div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-96 w-96 rounded-full bg-linear-to-tr from-violet-300/40 to-indigo-200/35 blur-[8rem]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.12]" />

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
