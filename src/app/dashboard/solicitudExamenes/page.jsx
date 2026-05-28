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

const YOUTUBE_URL = "https://www.youtube.com/watch?v=w7lKsLYkDmU";

export default function CapsulaSolicitudExamenes() {
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
                        Solicitud de Exámenes
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("watch?v=", "embed/")}
                                title="Cápsula — Solicitud de Exámenes"
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
                            En este apartado podrás generar, emitir e imprimir solicitudes de exámenes de forma rápida y ordenada 🏥.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Además, el sistema permite añadir nuevos exámenes en caso de que no se encuentren dentro del listado predeterminado ➕🧬.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            La funcionalidad está diseñada para agilizar la emisión de documentos clínicos y mantener un flujo de atención más eficiente para los profesionales 👨‍⚕️👩‍⚕️.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede enviar la solicitud de examen al correo del paciente?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente la solicitud de examen está diseñada únicamente para ser descargada e impresa posteriormente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo añadir más exámenes aparte de los que ya vienen configurados?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí, es posible. Los nuevos exámenes pueden agregarse desde el módulo de configuraciones, tal como se muestra en el video.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo solicitar exámenes directamente desde la ficha del paciente?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Las solicitudes de exámenes solamente pueden realizarse desde el módulo de documentos.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
