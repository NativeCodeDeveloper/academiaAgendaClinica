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

const YOUTUBE_URL = "https://youtu.be/eZhpFPow0MA";

export default function CapsulaRecetaRapida() {
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
                        Receta Rápida
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/")}
                                title="Cápsula — Receta Rápida"
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
                            Descubre cómo generar una receta rápida en AgendaClinica y agiliza tus atenciones clínicas evitando retrasos durante la consulta.
                        </p>

                        <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            En esta cápsula aprenderás
                        </p>
                        <ul className="ml-4 space-y-1.5 list-disc text-[15px] leading-relaxed text-[#6E6E73]">
                            <li>Cómo acceder al módulo de receta rápida</li>
                            <li>Cómo completar los datos de una receta médica</li>
                            <li>Cómo generar el documento en PDF</li>
                            <li>Cómo entregar rápidamente una receta al paciente</li>
                            <li>Cómo optimizar el flujo de atención clínica diaria</li>
                        </ul>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Este módulo está pensado para entregar una solución rápida y práctica durante las atenciones médicas.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿La receta rápida se puede enviar por correo electrónico?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente la receta rápida solamente permite descargar el documento en formato PDF.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿La receta puede mostrar el logo de mi consulta o centro médico?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No actualmente. La receta rápida únicamente mostrará el nombre del centro médico configurado. En caso contrario, aparecerá el nombre de AgendaClinica.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo modificar elementos del formulario de receta rápida?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No es posible realizar modificaciones directas sobre este formulario. En caso de necesitar personalizaciones específicas, puede solicitar una cotización de desarrollo a medida mediante los canales de contacto oficiales de AgendaClinica.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿La receta queda guardada automáticamente en el sistema?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">La receta rápida no queda almacenada automáticamente. Para que quede registrada en el historial clínico del paciente, debe realizarse desde la carpeta clínica o historial del paciente correspondiente.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Usa receta rápida cuando necesites emitir un PDF en pocos pasos durante una atención, y registra desde la ficha clínica cuando requieras dejar historial asociado al paciente.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
