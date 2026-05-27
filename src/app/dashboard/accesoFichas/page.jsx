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

const YOUTUBE_URL = "https://youtu.be/KWLr1mHjhA0";

export default function CapsulaAccesoFichas() {
    return (
        <OrbBackground orbX={0.75} orbY={0.50}>
            <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6 flex items-center gap-2">
                        <p className={michroma.className + " text-[13px] bg-gradient-to-r from-cyan-700 via-cyan-600 to-indigo-700 bg-clip-text text-transparent"}>AgendaClinica</p>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">/ Academia</span>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-100 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
                            Cápsula
                        </div>
                        <h1 className={michroma.className + " text-[1.5rem] leading-[1.08] sm:text-[2rem] lg:text-[2.4rem]"}>
                            <span className="text-slate-900">Cómo acceder a las </span>
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Fichas</span>
                        </h1>
                        <p className="mt-2 text-[14px] text-slate-500">Explicación rápida</p>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-8">
                        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                    title="Cápsula — Cómo acceder a las Fichas"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mt-6">
                        <div className="rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Descripción</p>
                            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                En esta cápsula aprenderás cómo acceder rápidamente a las fichas clínicas dentro de AgendaClinica.
                            </p>
                            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                Se explicará dónde encontrar la información clínica de los pacientes, cómo navegar entre sus registros y qué tipo de información podrás visualizar dentro de cada carpeta clínica.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-6">
                        <div className="rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Preguntas Frecuentes</p>

                            <div className="mt-5 space-y-4">
                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Se puede acceder a las fichas clínicas desde el calendario?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">No. Actualmente no es posible acceder directamente desde el calendario. El acceso a las fichas clínicas se realiza desde:</p>
                                    <ul className="mt-2 ml-4 list-disc space-y-1 text-[13px] text-slate-500">
                                        <li>Panel de Reservaciones</li>
                                        <li>Módulo de Fichas Clínicas en la información del paciente</li>
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">Si soy odontólogo, ¿puedo encontrar el odontograma dentro de la ficha clínica?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">Sí. Los usuarios con perfil odontológico pueden acceder al módulo de odontograma directamente desde la ficha clínica del paciente.</p>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Qué es una carpeta clínica?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">Una carpeta clínica funciona como un archivador digital del paciente, donde quedan almacenados todos sus registros clínicos e información relevante.</p>
                                    <p className="mt-2 text-[13px] font-medium text-slate-600">Dentro de ella podrás encontrar:</p>
                                    <ul className="mt-2 ml-4 list-disc space-y-1 text-[13px] text-slate-500">
                                        <li>Datos del paciente</li>
                                        <li>Recetas médicas</li>
                                        <li>Historial de recetas</li>
                                        <li>Odontogramas</li>
                                        <li>Histórico de atenciones</li>
                                        <li>Documentos clínicos asociados</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-6 text-[14px] leading-relaxed text-slate-600">
                                Esperamos que esta cápsula te ayude a comprender mejor el funcionamiento de las fichas clínicas y la organización de la información dentro de AgendaClinica.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
