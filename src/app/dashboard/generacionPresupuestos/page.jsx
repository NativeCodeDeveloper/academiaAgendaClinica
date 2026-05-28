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

const YOUTUBE_URL = "https://www.youtube.com/watch?v=RUGGZeSXmFk";

export default function CapsulaGeneracionPresupuestos() {
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
                        Generación de Presupuestos
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                title="Cápsula — Generación de Presupuestos"
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
                            En esta cápsula aprenderás cómo realizar el ingreso de productos y servicios dentro de AgendaClinica para posteriormente poder generar presupuestos y cotizaciones de manera rápida y ordenada.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Aquí se explica cómo registrar correctamente las categorías, subcategorías y servicios para que el sistema pueda estructurar la información de forma adecuada al momento de generar un presupuesto para el paciente.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            Este módulo está diseñado especialmente para centros médicos, consultas y clínicas que necesiten mantener un control organizado de sus prestaciones y valores.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Es necesario llenar todas las categorías, subcategorías y sub-subcategorías?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí. Es necesario completar esta información dentro del formulario para que el sistema pueda organizar correctamente los productos y servicios.</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sin embargo, si consideran que es demasiada información o no resulta útil para su flujo de trabajo, pueden crear categorías genéricas para ingresar productos y servicios de manera mucho más sencilla.</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No es obligatorio que las categorías sean específicas; esto dependerá completamente de cómo cada centro asistencial desee organizar su información.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo generar un presupuesto desde la ficha clínica, odontograma u otro módulo?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. Actualmente no es posible generar presupuestos desde fichas clínicas, odontogramas u otros módulos distintos al módulo de presupuestos.</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">La generación de cotizaciones y presupuestos debe realizarse únicamente desde el módulo diseñado para dicha funcionalidad.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Puedo enviar el presupuesto directamente al correo del paciente desde aquí?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">No. El sistema no permite enviar presupuestos automáticamente al correo del paciente desde este módulo.</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">La funcionalidad está diseñada para descargar e imprimir el documento. Posteriormente, si lo desean, pueden enviarlo manualmente utilizando sus propios medios de comunicación.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
