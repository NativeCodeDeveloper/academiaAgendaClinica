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

const YOUTUBE_URL = "https://www.youtube.com/watch?v=Me2QWsRMFk8";

export default function CapsulaEditarPaciente() {
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
                        Editar Paciente
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        {YOUTUBE_URL ? (
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                    title="Cápsula — Editar Paciente"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="flex aspect-video w-full items-center justify-center bg-[#F5F5F7]">
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
                            En esta cápsula aprenderás cómo modificar y actualizar correctamente la información de tus pacientes dentro de AgendaClinica.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Este módulo está diseñado para ayudarte a entender cómo editar datos personales, información de contacto y antecedentes básicos del paciente de forma rápida y ordenada.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Mantener la información actualizada permite una mejor gestión clínica y una atención más eficiente para tus pacientes.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo añadir más información de la que ya se encuentra disponible?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente no es factible añadir más campos o información adicional distinta a la que ya se encuentra incorporada en el sistema.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Los cambios se guardan inmediatamente?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. Una vez modificados los datos y guardados correctamente, la información queda actualizada en la ficha del paciente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo modificar teléfonos, correos y dirección?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. Los datos de contacto del paciente pueden editarse directamente desde este módulo.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
