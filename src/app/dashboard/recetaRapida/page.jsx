"use client";

import OrbBackground from "@/components/OrbBackground";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });

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
        <OrbBackground orbX={0.75} orbY={0.50}>
            <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6 flex items-center gap-2">
                        <p className={michroma.className + " text-[13px] bg-gradient-to-r from-cyan-700 via-cyan-600 to-indigo-700 bg-clip-text text-transparent"}>AgendaClinica</p>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">/ Academia</span>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                        <div className="mb-4 inline-flex items-center rounded-full border border-cyan-100 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
                            Capsula
                        </div>
                        <h1 className={michroma.className + " text-[1.5rem] leading-[1.08] sm:text-[2rem] lg:text-[2.4rem]"}>
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Receta Rapida</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-8">
                        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                    title="Capsula - Receta Rapida"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2.5} className="mt-6">
                        <div className="space-y-7 rounded-[1.75rem] border border-white/70 bg-white/88 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Descripcion</p>
                                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                    Descubra como generar una receta rapida en AgendaClinica y agilice sus atenciones clinicas evitando retrasos durante la consulta.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">En esta capsula aprendera</p>
                                <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-600">
                                    <li>Como acceder al modulo de receta rapida</li>
                                    <li>Como completar los datos de una receta medica</li>
                                    <li>Como generar el documento en PDF</li>
                                    <li>Como entregar rapidamente una receta al paciente</li>
                                    <li>Como optimizar el flujo de atencion clinica diaria</li>
                                </ul>
                                <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                                    Este modulo esta pensado para entregar una solucion rapida y practica durante las atenciones medicas.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Preguntas frecuentes</p>

                                <div className="mt-4 space-y-5 text-[14px] leading-relaxed text-slate-600">
                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿La receta rapida se puede enviar por correo electronico?</h2>
                                        <p className="mt-2">
                                            No. Actualmente la receta rapida solamente permite descargar el documento en formato PDF.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿La receta puede mostrar el logo de mi consulta o centro medico?</h2>
                                        <p className="mt-2">
                                            No actualmente. La receta rapida unicamente mostrara el nombre del centro medico configurado. En caso contrario, aparecera el nombre de AgendaClinica.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿Puedo modificar elementos del formulario de receta rapida?</h2>
                                        <p className="mt-2">
                                            No es posible realizar modificaciones directas sobre este formulario.
                                        </p>
                                        <p className="mt-2">
                                            En caso de necesitar personalizaciones especificas, puede solicitar una cotizacion de desarrollo a medida mediante los canales de contacto oficiales de AgendaClinica.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿La receta queda guardada automaticamente en el sistema?</h2>
                                        <p className="mt-2">
                                            La receta rapida no queda almacenada automaticamente.
                                        </p>
                                        <p className="mt-2">
                                            Para que quede registrada en el historial clinico del paciente, debe realizarse desde la carpeta clinica o historial del paciente correspondiente.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                                <p className="text-[13px] font-semibold text-cyan-800">Recomendacion</p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                                    Use receta rapida cuando necesite emitir un PDF en pocos pasos durante una atencion, y registre desde la ficha clinica cuando requiera dejar historial asociado al paciente.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
