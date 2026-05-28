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

const YOUTUBE_URL = "https://youtu.be/8XuHhPkEXZM";

export default function CapsulaRecetasHistorial() {
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
                        Recetas (Historial)
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/")}
                                title="Cápsula — Recetas Historial"
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
                            En esta cápsula aprenderás cómo utilizar el módulo de Receta Pacientes dentro de AgendaClinica.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            A diferencia de la receta rápida, este módulo permite mantener un historial de recetas y prescripciones asociadas al paciente, facilitando el seguimiento clínico y la trazabilidad de las indicaciones médicas.
                        </p>

                        <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Durante este video se mostrará
                        </p>
                        <ul className="ml-4 space-y-1.5 list-disc text-[15px] leading-relaxed text-[#6E6E73]">
                            <li>Cómo acceder al módulo de recetas desde la ficha del paciente</li>
                            <li>Cómo registrar una nueva receta médica</li>
                            <li>Cómo visualizar recetas históricas</li>
                            <li>Cómo mantener seguimiento de prescripciones médicas</li>
                            <li>Cómo descargar la receta en formato PDF</li>
                        </ul>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Este módulo está diseñado para mantener un control clínico más ordenado y centralizado dentro de la carpeta del paciente.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿La receta se puede enviar por correo electrónico?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente las recetas no pueden enviarse directamente por correo desde AgendaClinica.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿La receta se puede descargar?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. La receta puede descargarse en formato PDF para impresión o entrega al paciente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿El sistema genera firmas automáticas?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente el sistema no genera firmas automáticas. La receta debe imprimirse y firmarse físicamente por el profesional correspondiente.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo editar los campos del formulario a mi gusto?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No es posible modificar los campos estándar de esta funcionalidad. En caso de requerir personalizaciones específicas, deberá solicitar una cotización mediante los canales de contacto oficiales de NativeCode.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Usa este módulo cuando necesites que las recetas queden asociadas al paciente y disponibles como historial clínico para futuras atenciones.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
