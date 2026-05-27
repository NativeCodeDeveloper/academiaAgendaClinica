"use client";

import OrbBackground from "@/components/OrbBackground";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    }),
};

const features = [
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: "Cápsulas explicativas",
        description: "Contenido grabado y guiado para cada módulo",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "Mejores prácticas",
        description: "Configuraciones recomendadas y flujos optimizados",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: "Actualizaciones continuas",
        description: "Nuevas herramientas y funcionalidades incorporadas",
    },
];

export default function AcademiaBienvenida() {
    return (
        <OrbBackground orbX={0.75} orbY={0.50}>
            <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-5xl flex-col">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="mb-6 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <p className={michroma.className + " text-[13px] bg-gradient-to-r from-cyan-700 via-cyan-600 to-indigo-700 bg-clip-text text-transparent"}>AgendaClinica</p>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">/ Academia</span>
                        </div>

                        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3.5 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:flex">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-[11px] text-slate-500">Plataforma de capacitación</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-12">

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="max-w-xl lg:flex-1"
                        >
                            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-100 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
                                Centro de aprendizaje
                            </div>

                            <h1 className={michroma.className + " text-[1.75rem] leading-[1.08] sm:text-[2.2rem] lg:text-[2.8rem]"}>
                                <span className="text-slate-900">Bienvenido a la</span>
                                <br />
                                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(14,165,233,0.25)]">
                                    Academia
                                </span>
                            </h1>

                            <p className="mt-5 max-w-lg text-[14px] leading-6 text-slate-600">
                                En este espacio encontrarás material informativo, novedades, actualizaciones y cápsulas explicativas diseñadas para ayudarte a comprender y aprovechar al máximo cada bloque y módulo de AgendaClinica.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        custom={1.8 + index * 0.15}
                                        className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                                    >
                                        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-50 text-cyan-600 ring-1 ring-cyan-100">
                                            {feature.icon}
                                        </div>
                                        <div className="text-[12px] font-semibold text-slate-800">{feature.title}</div>
                                        <div className="mt-1 text-[11px] leading-snug text-slate-500">{feature.description}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={2.2}
                            className="w-full lg:max-w-md lg:flex-shrink-0"
                        >
                            <div className="rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                                <div className="mb-5">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Academia AC</p>
                                    <h2 className={michroma.className + " mt-2.5 text-[17px] text-slate-900"}>Tu espacio de aprendizaje</h2>
                                </div>

                                <div className="space-y-4 text-[13px] leading-relaxed text-slate-600">
                                    <p>
                                        Nuestro objetivo es que puedas aprender de forma simple, práctica y guiada, mediante contenido grabado y recursos orientados al uso real del sistema en tu día a día.
                                    </p>
                                    <p>
                                        Aquí podrás descubrir mejores prácticas, funcionalidades importantes, configuraciones recomendadas y nuevas herramientas que iremos incorporando continuamente a la plataforma.
                                    </p>
                                    <p>
                                        Esperamos que este espacio sea de gran ayuda para ti y tu equipo, y que disfrutes la experiencia de trabajar con AgendaClinica.
                                    </p>
                                </div>

                                <div className="mt-6 border-t border-slate-200 pt-5">
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        <div className="rounded-xl border border-slate-100 bg-slate-50/60 py-3">
                                            <div className="text-[18px] font-bold text-slate-900">24/7</div>
                                            <div className="mt-0.5 text-[10px] text-slate-500">Disponible</div>
                                        </div>
                                        <div className="rounded-xl border border-slate-100 bg-slate-50/60 py-3">
                                            <div className="text-[18px] font-bold text-slate-900">HD</div>
                                            <div className="mt-0.5 text-[10px] text-slate-500">Video</div>
                                        </div>
                                        <div className="rounded-xl border border-slate-100 bg-slate-50/60 py-3">
                                            <div className="text-[18px] font-bold text-slate-900">
                                                <svg className="mx-auto h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                            <div className="mt-0.5 text-[10px] text-slate-500">Actualizado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400 lg:justify-start">
                                <div className="flex items-center gap-1.5">
                                    <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    <span>Contenido verificado</span>
                                </div>
                                <div className="hidden h-3 w-px bg-slate-200 sm:block" />
                                <div className="flex items-center gap-1.5">
                                    <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                                    <span>Guías oficiales</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2.8}
                        className="mt-6 flex items-center justify-between text-[10px] text-slate-400"
                    >
                        <span>AgendaClinica Academia v1.0</span>
                        <span>Powered by NativeCode</span>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
