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

const YOUTUBE_URL = "https://youtu.be/QOngQ2D7Ci0";

export default function CapsulaHorasPaginaWeb() {
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
                        Horas en Página Web
                    </h1>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mb-6">
                    <div className="overflow-hidden rounded-2xl border border-[#D2D2D7] bg-white shadow-sm">
                        <div className="aspect-video w-full">
                            <iframe
                                className="h-full w-full"
                                src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                title="Cápsula — Horas en Página Web"
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
                            En este módulo podrás configurar cómo se mostrarán tus atenciones en la página web de reservas. Aquí podrás definir la duración de cada atención, el valor asociado y los distintos servicios que ofrecerás a tus pacientes.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            De esta manera, el paciente podrá visualizar claramente cuánto dura cada consulta y cuál es el valor que deberá cancelar al momento de realizar su agendamiento.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            También podrás organizar diferentes tipos de servicios según tu especialidad, como atención odontológica, atención pediátrica, procedimientos estéticos, consulta general y muchos más.
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#6E6E73]">
                            La recomendación es mantener una estructura clara y simple para facilitar la experiencia del paciente al momento de reservar.
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
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Se puede integrar una pasarela de pago?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Sí, AgendaClinica permite integrar pagos en línea mediante pasarela de pago.</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Esta funcionalidad tiene un costo adicional y permite trabajar solamente con una única cuenta de pago asociada.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Qué pasarela de pago utiliza AgendaClinica?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Actualmente AgendaClinica trabaja directamente con integración mediante Mercado Pago.</p>
                            </div>

                            <div className="rounded-xl border border-[#E8E8ED] bg-[#F5F5F7] p-4">
                                <p className="text-[13px] font-semibold text-[#1D1D1F]">¿Cuántos servicios puedo crear?</p>
                                <p className="mt-1.5 text-[13px] text-[#6E6E73]">Puedes crear todos los servicios que necesites.</p>
                                <p className="mt-3 text-[13px] font-medium text-[#1D1D1F]">Por ejemplo:</p>
                                <ul className="ml-4 mt-2 list-disc space-y-1 text-[13px] text-[#6E6E73]">
                                    <li>Atención médica</li>
                                    <li>Evaluaciones</li>
                                    <li>Procedimientos</li>
                                    <li>Controles</li>
                                    <li>Especialidades</li>
                                    <li>Terapias</li>
                                    <li>Cirugías</li>
                                    <li>Y cualquier otro servicio clínico.</li>
                                </ul>
                                <p className="mt-3 text-[13px] text-[#6E6E73]">Como recomendación, evita agregar demasiadas opciones innecesarias para mantener una experiencia de agendamiento más rápida y cómoda para tus pacientes.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
