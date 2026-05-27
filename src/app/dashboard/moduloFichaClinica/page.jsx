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

const YOUTUBE_URL = "https://youtu.be/kv0krMbZr3I";

export default function CapsulaFichaClinica() {
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
                            <span className="text-slate-900">Completado de </span>
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Fichas Clínicas</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-8">
                        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                    title="Cápsula - Completado de Fichas Clínicas"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mt-6">
                        <div className="space-y-7 rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Descripción</p>
                                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                    En esta cápsula aprenderá cómo acceder y gestionar las fichas clínicas dentro de AgendaClinica.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Durante este video se mostrará</p>
                                <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-600">
                                    <li>Cómo acceder a las fichas clínicas de los pacientes</li>
                                    <li>Cómo registrar información clínica</li>
                                    <li>Cómo visualizar el historial clínico del paciente</li>
                                    <li>Cómo trabajar con registros dinámicos según la especialidad del profesional</li>
                                    <li>Cómo mantener el seguimiento clínico de cada atención realizada</li>
                                </ul>
                                <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                                    AgendaClinica permite que cada profesional pueda completar información clínica utilizando campos dinámicos configurables según las necesidades de cada centro médico o especialidad.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Preguntas frecuentes</p>

                                <div className="mt-4 space-y-5 text-[14px] leading-relaxed text-slate-600">
                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿Se pueden agregar dibujos o realizar anotaciones gráficas dentro de las fichas clínicas?</h2>
                                        <p className="mt-2">
                                            Actualmente el sistema no permite el uso de dibujos o anotaciones gráficas dentro de las fichas clínicas.
                                        </p>
                                        <p className="mt-2">
                                            El registro se realiza mediante campos de texto dinámicos personalizados según cada necesidad clínica.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿Se pueden subir archivos PDF o imágenes?</h2>
                                        <p className="mt-2">
                                            Actualmente no es posible subir archivos PDF o imágenes directamente a las fichas clínicas.
                                        </p>
                                        <p className="mt-2">
                                            Sin embargo, esta funcionalidad ya se encuentra contemplada para próximas versiones de AgendaClinica.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                                <p className="text-[13px] font-semibold text-cyan-800">Actualizaciones</p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                                    Todas las nuevas actualizaciones y funcionalidades serán aplicadas automáticamente para clientes múltiples, previo aviso por parte del equipo de soporte.
                                </p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                                    Podrá revisar las novedades y futuras mejoras desde el módulo de Inicio en el apartado de “Novedades”.
                                </p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                                    Además, cada nueva funcionalidad contará con cápsulas explicativas dentro de Academia AgendaClinica para facilitar su aprendizaje y utilización.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
