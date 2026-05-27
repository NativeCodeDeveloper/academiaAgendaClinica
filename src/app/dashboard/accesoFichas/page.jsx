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

const YOUTUBE_URL = "https://youtu.be/KWLr1mHjhA0";

export default function CapsulaAccesoFichas() {
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
                        Cómo acceder a las Fichas
                    </h1>
                    <p className="mt-2 text-[14px] text-[#86868B]">Explicación rápida</p>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
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

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mb-6">
                    <div className="rounded-2xl border border-[#D2D2D7] bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Descripción
                        </p>
                        <p className="text-[15px] leading-relaxed text-[#1D1D1F]">
                            En esta cápsula aprenderás cómo acceder rápidamente a las fichas clínicas dentro de AgendaClinica.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Se explicará dónde encontrar la información clínica de los pacientes, cómo navegar entre sus registros y qué tipo de información podrás visualizar dentro de cada carpeta clínica.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede acceder a las fichas clínicas desde el calendario?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente no es posible acceder directamente desde el calendario. El acceso a las fichas clínicas se realiza desde:</p>
                                <ul className="ml-4 mt-2 list-disc space-y-1 text-[13px] text-[#6E6E73]">
                                    <li>Panel de Reservaciones</li>
                                    <li>Módulo de Fichas Clínicas en la información del paciente</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">Si soy odontólogo, ¿puedo encontrar el odontograma dentro de la ficha clínica?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. Los usuarios con perfil odontológico pueden acceder al módulo de odontograma directamente desde la ficha clínica del paciente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Qué es una carpeta clínica?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Una carpeta clínica funciona como un archivador digital del paciente, donde quedan almacenados todos sus registros clínicos e información relevante.</p>
                                <p className="mt-2 text-[13px] font-medium text-[#1D1D1F]">Dentro de ella podrás encontrar:</p>
                                <ul className="ml-4 mt-2 list-disc space-y-1 text-[13px] text-[#6E6E73]">
                                    <li>Datos del paciente</li>
                                    <li>Recetas médicas</li>
                                    <li>Historial de recetas</li>
                                    <li>Odontogramas</li>
                                    <li>Histórico de atenciones</li>
                                    <li>Documentos clínicos asociados</li>
                                </ul>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Esperamos que esta cápsula te ayude a comprender mejor el funcionamiento de las fichas clínicas y la organización de la información dentro de AgendaClinica.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
