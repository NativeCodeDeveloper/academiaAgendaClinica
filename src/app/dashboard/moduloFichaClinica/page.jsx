"use client";

import { motion } from "framer-motion";

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
                        Completado de Fichas Clínicas
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/")}
                                title="Cápsula — Completado de Fichas Clínicas"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mb-6">
                    <div className="rounded-2xl border border-[#D2D2D7] bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Descripción
                        </p>
                        <p className="text-[15px] leading-relaxed text-[#1D1D1F]">
                            En esta cápsula aprenderás cómo acceder y gestionar las fichas clínicas dentro de AgendaClinica.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            AgendaClinica permite que cada profesional pueda completar información clínica utilizando campos dinámicos configurables según las necesidades de cada centro médico o especialidad.
                        </p>

                        <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Durante este video se mostrará
                        </p>
                        <ul className="ml-4 list-disc space-y-1.5 text-[15px] leading-relaxed text-[#6E6E73]">
                            <li>Cómo acceder a las fichas clínicas de los pacientes</li>
                            <li>Cómo registrar información clínica</li>
                            <li>Cómo visualizar el historial clínico del paciente</li>
                            <li>Cómo trabajar con registros dinámicos según la especialidad del profesional</li>
                            <li>Cómo mantener el seguimiento clínico de cada atención realizada</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                    <div className="rounded-2xl border border-[#D2D2D7] bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Preguntas Frecuentes
                        </p>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se pueden agregar dibujos o anotaciones gráficas dentro de las fichas clínicas?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Actualmente el sistema no permite el uso de dibujos o anotaciones gráficas. El registro se realiza mediante campos de texto dinámicos personalizados según cada necesidad clínica.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se pueden subir archivos PDF o imágenes?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Actualmente no es posible subir archivos PDF o imágenes directamente a las fichas clínicas. Sin embargo, esta funcionalidad ya se encuentra contemplada para próximas versiones de AgendaClinica.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Todas las nuevas actualizaciones y funcionalidades serán aplicadas automáticamente, previo aviso por parte del equipo de soporte. Cada nueva funcionalidad contará con cápsulas explicativas dentro de Academia AgendaClinica para facilitar su aprendizaje.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
