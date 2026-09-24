"use client";

// ── Inicio del dashboard ─────────────────────────────────────────────────────
// La bienvenida ya la da la portada (src/app/page.jsx), asi que aca se quito:
// antes esta pantalla abria con "Bienvenidos a la Academia AgendaClinica" y un
// parrafo explicando que es la Academia — lo mismo, dicho dos veces seguidas.
// Lo que queda es lo unico que esta pantalla tiene que resolver: decir donde
// esta el usuario y como llegar a una capsula.
//
// Mismo lenguaje visual que las lecciones (#F5F5F7 de fondo, tinta #1D1D1F,
// tarjetas blancas con borde hairline), para que entrar a una capsula no se
// sienta como cambiar de sitio.
//
// Sin alto fijo: la version anterior encerraba todo en lg:h-screen con
// overflow-hidden, asi que en un monitor bajo o con el zoom del navegador
// arriba, la captura quedaba cortada sin forma de llegar a ella. Ahora fluye y
// el contenedor del layout es el que hace scroll.

import { motion } from "framer-motion";
import { LayoutGrid, PlayCircle, RefreshCw, ShieldCheck } from "lucide-react";

const aparicion = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

const caracteristicas = [
    {
        icon: PlayCircle,
        titulo: "Una cápsula por módulo",
        detalle: "Cada video recorre el módulo completo, paso a paso.",
    },
    {
        icon: LayoutGrid,
        titulo: "Todo el sistema",
        detalle: "Agenda, fichas, odontograma, recetas y presupuestos.",
    },
    {
        icon: RefreshCw,
        titulo: "Al día",
        detalle: "Se suma una cápsula cada vez que el sistema cambia.",
    },
    {
        icon: ShieldCheck,
        titulo: "Material oficial",
        detalle: "Producido por el equipo de AgendaClinica.",
    },
];

export default function InicioAcademia() {
    // El contenedor no lleva fondo propio: el gris, los degradados y el grano
    // son del layout. Pintarlos de nuevo aca tapaba el degradado y dejaba una
    // costura visible justo donde termina el contenido — se notaba en tablet,
    // donde la pagina es mas corta que la pantalla.
    return (
        <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Misma miga de pan que abre cada capsula. */}
                <motion.div
                    variants={aparicion}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="mb-6 flex items-center gap-1.5"
                >
                    <span className="text-[13px] font-semibold text-[#1D1D1F]">AgendaClinica</span>
                    <span className="text-[#D2D2D7]">/</span>
                    <span className="text-[13px] text-[#6E6E73]">Academia</span>
                </motion.div>

                <motion.h1
                    variants={aparicion}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="max-w-2xl text-[1.75rem] font-semibold leading-[1.05] tracking-tight text-[#1D1D1F] sm:text-[2.25rem] lg:text-[2.75rem]"
                >
                    Todo lo que necesitas para dominar AgendaClinica
                </motion.h1>

                <motion.p
                    variants={aparicion}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6E6E73]"
                >
                    Elige un módulo en el menú lateral y entra a su cápsula cuando la necesites.
                </motion.p>

                {/* Una sola columna en telefono: en dos, cada tarjeta quedaba
                    con el titulo partido en tres lineas. */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
                    {caracteristicas.map((item, i) => (
                        <motion.div
                            key={item.titulo}
                            variants={aparicion}
                            initial="hidden"
                            animate="visible"
                            custom={i + 3}
                            className="rounded-2xl border border-[#E8E8ED] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F5F5F7]">
                                <item.icon className="h-4 w-4 text-[#1D1D1F]" strokeWidth={1.75} />
                            </div>
                            <p className="mt-3 text-[13px] font-semibold leading-snug text-[#1D1D1F]">
                                {item.titulo}
                            </p>
                            <p className="mt-1 text-[12px] leading-snug text-[#86868B]">
                                {item.detalle}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={aparicion}
                    initial="hidden"
                    animate="visible"
                    custom={7}
                    className="mt-8 overflow-hidden rounded-2xl border border-[#E8E8ED] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_50px_-30px_rgba(15,23,42,0.30)] lg:mt-10"
                >
                    {/* Proporcion fija: sin ella la altura dependia de la imagen
                        y el bloque daba un salto al terminar de cargar. */}
                    <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
                        <img
                            src="/capturaac.png"
                            alt="Vista del sistema AgendaClinica"
                            className="h-full w-full object-cover object-top"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
