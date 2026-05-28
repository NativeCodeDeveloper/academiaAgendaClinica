"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, LayoutGrid, PlayCircle, RefreshCw } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

const features = [
    {
        icon: PlayCircle,
        title: "Video cápsulas por módulo",
        description: "Aprende paso a paso cómo usar cada funcionalidad con videos guiados.",
    },
    {
        icon: LayoutGrid,
        title: "Cubre todos los módulos",
        description: "Agenda, Fichas Clínicas, Odontograma, Pacientes y más.",
    },
    {
        icon: RefreshCw,
        title: "Contenido actualizado",
        description: "Se agregan nuevas cápsulas cada vez que el sistema evoluciona.",
    },
    {
        icon: BookOpen,
        title: "Guía oficial del sistema",
        description: "Material creado directamente por el equipo de AgendaClinica.",
    },
];

export default function AcademiaBienvenida() {
    return (
        <div className="relative min-h-screen bg-black lg:h-screen lg:overflow-hidden">

            {/* Gradient orbs — top right */}
            <div className="absolute -right-60 -top-10 z-0 flex flex-col items-end blur-xl">
                <div className="h-40 w-240 rounded-full bg-linear-to-b from-purple-600 to-sky-600 blur-[6rem]" />
                <div className="h-40 w-360 rounded-full bg-linear-to-b from-pink-900 to-yellow-400 blur-[6rem]" />
                <div className="h-40 w-240 rounded-full bg-linear-to-b from-yellow-600 to-sky-500 blur-[6rem]" />
            </div>
            {/* Ambient orb — bottom left, cubre el vacío negro cerca de la imagen */}
            <div className="absolute -bottom-20 -left-20 z-0 h-96 w-96 rounded-full bg-linear-to-tr from-violet-900/70 to-indigo-900/50 blur-[8rem]" />

            {/* Grain texture */}
            <div className="absolute inset-0 z-0 bg-noise opacity-30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col px-4 pb-10 pt-8 sm:px-6 lg:h-full lg:pb-0 lg:px-6 lg:pt-6 xl:px-8 xl:pt-8">
                <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col xl:max-w-6xl">

                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm lg:mb-5 xl:mb-6"
                    >
                        <span className="text-sm font-medium text-white">
                            Cápsulas de entrenamiento disponibles
                        </span>
                        <ArrowRight className="h-4 w-4 text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Two-column on desktop, stacked on mobile */}
                    <div className="flex flex-col gap-6 pb-4 lg:flex-row lg:items-start lg:gap-6 lg:pb-4 xl:gap-10 xl:pb-5">

                        {/* Left — title + subtitle */}
                        <div className="flex-1 space-y-3 lg:space-y-4 xl:space-y-5">
                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-300"
                            >
                                Bienvenidos a la Academia AgendaClinica
                            </motion.p>

                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-[3.25rem]"
                            >
                                Todo lo que necesitas para dominar AgendaClinica
                            </motion.h1>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={3}
                                className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-sm lg:max-w-sm xl:max-w-md xl:p-5"
                            >
                                <p className="text-justify text-sm leading-relaxed text-gray-300 xl:text-base">
                                    Esta plataforma es tu guía oficial para aprender a usar el sistema. Navega por los módulos del menú lateral y accede a cada cápsula cuando lo necesites.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right — 2-col grid on mobile, stacked on desktop */}
                        <div className="grid grid-cols-2 gap-3 lg:block lg:w-60 lg:shrink-0 lg:space-y-2.5 xl:w-72 xl:space-y-3">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i + 4}
                                    className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/15 p-3 backdrop-blur-sm xl:p-4"
                                >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/10 xl:h-8 xl:w-8">
                                        <f.icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-semibold leading-snug text-white xl:text-[13px]">
                                            {f.title}
                                        </p>
                                        <p className="mt-0.5 text-[11px] leading-snug text-white/50">
                                            {f.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    {/* Hero image — fixed height on mobile, fills remaining on desktop */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={8}
                        className="relative hidden overflow-hidden rounded-2xl sm:block sm:aspect-video lg:aspect-auto lg:min-h-0 lg:flex-1"
                    >
                        <img
                            src="/capturaac.png"
                            alt="AgendaClinica"
                            className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    </motion.div>

                </div>
            </div>

        </div>
    );
}
