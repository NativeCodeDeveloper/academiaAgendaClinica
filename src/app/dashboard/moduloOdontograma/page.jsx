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

const YOUTUBE_URL = "https://youtu.be/L_J7Pf9qh4c";

export default function CapsulaOdontograma() {
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
                            <span className="text-slate-900">Módulo </span>
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Odontograma</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-8">
                        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                            {YOUTUBE_URL ? (
                                <div className="aspect-video w-full">
                                    <iframe
                                        className="h-full w-full"
                                        src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                        title="Cápsula — Odontograma"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video w-full bg-slate-50/80">
                                    <div className="flex h-full items-center justify-center">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="mt-3 text-sm font-medium text-slate-400">Video próximamente</p>
                                            <p className="mt-1 text-xs text-slate-400">Inserte la URL de YouTube en la constante YOUTUBE_URL</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mt-6">
                        <div className="rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Descripción</p>
                            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                En este video aprenderás cómo utilizar el módulo de Odontograma en AgendaClinica, disponible para usuarios con perfil odontológico.
                            </p>
                            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                Aquí podrás registrar información clínica dental, realizar seguimientos de piezas dentales y mantener el historial odontológico de tus pacientes de manera organizada y profesional.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-6">
                        <div className="rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Preguntas Frecuentes</p>

                            <div className="mt-5 space-y-4">
                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Se puede imprimir el odontograma?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">No, actualmente el odontograma no cuenta con opción de impresión.</p>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Se puede eliminar un odontograma?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">No es posible eliminar odontogramas. Solo se pueden crear y actualizar sus datos.</p>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Cuántos odontogramas puedo tener por paciente?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">Los que el odontólogo estime convenientes según el seguimiento clínico del paciente.</p>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Se pueden agregar nuevos colores al odontograma?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">No, actualmente los colores disponibles son fijos dentro del sistema.</p>
                                </div>

                                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                                    <p className="text-[13px] font-semibold text-slate-700">¿Se puede generar una cotización desde el odontograma?</p>
                                    <p className="mt-1.5 text-[13px] text-slate-500">No. Las cotizaciones y presupuestos deben generarse desde el módulo de Presupuestos y no desde el odontograma.</p>
                                </div>
                            </div>

                            <p className="mt-6 text-[14px] leading-relaxed text-slate-600">
                                Esperamos que este material te ayude a comprender mejor el funcionamiento del módulo y sacar el máximo provecho a AgendaClinica.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
