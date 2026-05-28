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

const YOUTUBE_URL = "https://youtu.be/yDdmbRoMN-Y";

export default function CapsulaBloqueos() {
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
                        Bloqueo de Agenda
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/")}
                                title="Cápsula — Bloqueo de Agenda"
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
                            En esta cápsula aprenderás cómo realizar bloqueos de agenda dentro de AgendaClinica, permitiendo organizar de mejor manera la disponibilidad de los profesionales y evitar reservas en horarios no disponibles.
                        </p>

                        <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Desde este módulo podrás
                        </p>
                        <ul className="ml-4 list-disc space-y-1.5 text-[15px] leading-relaxed text-[#6E6E73]">
                            <li>Bloquear días completos de atención</li>
                            <li>Bloquear horarios específicos</li>
                            <li>Configurar períodos no disponibles por reuniones, vacaciones, almuerzos o actividades internas</li>
                            <li>Mantener la agenda organizada y sincronizada con la disponibilidad real del profesional</li>
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo definir cuánto duran mis atenciones desde este módulo?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. La duración de las atenciones se configura desde el módulo Tarifas dentro de Configuración.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo bloquear días de forma individual?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí es posible. Sin embargo, esta funcionalidad avanzada debe ser solicitada mediante soporte técnico y tiene un valor adicional por profesional.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo bloquear a un paciente específico para que no pueda volver a agendar?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. AgendaClinica no aplica restricciones ni bloqueos individuales sobre pacientes para impedir futuras reservas.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Mantener la agenda correctamente bloqueada ayuda a evitar sobrecupos, errores de coordinación y reservas fuera del horario de atención.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
