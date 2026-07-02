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

const YOUTUBE_URL = "https://www.youtube.com/watch?v=2wT7jMPcTRM";

export default function CapsulaNewBloqueos() {
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
                        Nueva Sección Bloqueos
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.replace("watch?v=", "embed/")}
                                title="Cápsula — Nueva Sección Bloqueos"
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
                            En esta cápsula aprenderás a utilizar el módulo de bloqueos de AgendaClinica, que permite bloquear fechas u horarios específicos en la agenda de un profesional para que no aparezcan disponibles para reservas.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Podrás bloquear días completos, rangos de fechas o franjas horarias puntuales, con un límite de hasta 3 meses desde la fecha actual, ventana que avanza automáticamente con el tiempo.
                        </p>

                        <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E6E73]">
                            Durante este video se mostrará
                        </p>
                        <ul className="ml-4 list-disc space-y-1.5 text-[15px] leading-relaxed text-[#6E6E73]">
                            <li>Cómo bloquear un día completo en la agenda de un profesional</li>
                            <li>Cómo bloquear un rango de fechas consecutivas</li>
                            <li>Cómo bloquear un horario específico dentro de un día</li>
                            <li>El límite de 3 meses y cómo funciona la ventana de bloqueo</li>
                            <li>Cómo visualizar los bloqueos activos en el calendario de reservas</li>
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Hasta cuándo puedo bloquear fechas?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Solo es posible bloquear hasta 3 meses desde la fecha actual. Esta ventana avanza automáticamente con el tiempo, por lo que el calendario y los campos de fecha no permitirán seleccionar fechas fuera de ese rango.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo bloquear varios días a la vez?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. Al ingresar una fecha de inicio y una fecha de fin, el sistema generará automáticamente los bloqueos para todos los días dentro del rango seleccionado.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Dónde se ven los bloqueos una vez creados?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Los bloqueos aparecen directamente en el calendario de reservas como horarios no disponibles, impidiendo que los pacientes agenden en esos horarios.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Los bloqueos aplican para todos los profesionales?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Cada bloqueo se configura por profesional de forma individual, por lo que la disponibilidad de uno no afecta a los demás.</p>
                            </div>
                        </div>

                        <p className="mt-6 text-[14px] leading-relaxed text-[#6E6E73]">
                            Una correcta configuración de los bloqueos permite mantener la agenda sincronizada con la disponibilidad real del profesional, evitando reservas en horarios no disponibles y mejorando la organización del centro.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
