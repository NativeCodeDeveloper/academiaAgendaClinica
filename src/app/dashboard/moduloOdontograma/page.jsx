"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

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
        <div className="min-h-screen bg-[#F5F5F7] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8 flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold text-[#1D1D1F]">AgendaClinica</span>
                    <span className="text-[#D2D2D7]">/</span>
                    <span className="text-[13px] text-[#6E6E73]">Academia</span>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="mb-8">
                    <span className="mb-4 inline-block rounded-full border border-[#D2D2D7] bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6E6E73] shadow-sm">
                        Cápsula
                    </span>
                    <h1 className="text-[1.75rem] font-semibold leading-[1.05] tracking-tight text-[#1D1D1F] sm:text-[2.25rem] lg:text-[2.75rem]">
                        Módulo Odontograma
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
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
                            <div className="aspect-video w-full bg-[#F5F5F7] flex items-center justify-center">
                                <div className="text-center">
                                    <PlayCircle className="mx-auto h-14 w-14 text-[#D2D2D7]" strokeWidth={1} />
                                    <p className="mt-3 text-sm font-medium text-[#86868B]">Video próximamente</p>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mb-6">
                    <div className="rounded-2xl border border-[#D2D2D7] bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Descripción
                        </p>
                        <p className="text-[15px] leading-relaxed text-[#1D1D1F]">
                            En este video aprenderás cómo utilizar el módulo de Odontograma en AgendaClinica, disponible para usuarios con perfil odontológico.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Aquí podrás registrar información clínica dental, realizar seguimientos de piezas dentales y mantener el historial odontológico de tus pacientes de manera organizada y profesional.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                    <div className="rounded-2xl border border-[#D2D2D7] bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Preguntas Frecuentes
                        </p>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede imprimir el odontograma?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No, actualmente el odontograma no cuenta con opción de impresión.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede eliminar un odontograma?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No es posible eliminar odontogramas. Solo se pueden crear y actualizar sus datos.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Cuántos odontogramas puedo tener por paciente?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Los que el odontólogo estime convenientes según el seguimiento clínico del paciente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se pueden agregar nuevos colores al odontograma?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No, actualmente los colores disponibles son fijos dentro del sistema.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede generar una cotización desde el odontograma?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Las cotizaciones y presupuestos deben generarse desde el módulo de Presupuestos y no desde el odontograma.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Esperamos que este material te ayude a comprender mejor el funcionamiento del módulo y sacar el máximo provecho a AgendaClinica.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
