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

const YOUTUBE_URL = "https://youtu.be/8XuHhPkEXZM";

export default function CapsulaRecetasHistorial() {
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
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Recetas (Historial)</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-8">
                        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="h-full w-full"
                                    src={YOUTUBE_URL.includes("youtu.be/") ? YOUTUBE_URL.replace("youtu.be/", "youtube.com/embed/") : YOUTUBE_URL.replace("watch?v=", "embed/")}
                                    title="Capsula - Recetas Historial"
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
                                    En esta capsula aprendera como utilizar el modulo de Receta Pacientes dentro de AgendaClinica.
                                </p>
                                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                                    A diferencia de la receta rapida, este modulo permite mantener un historial de recetas y prescripciones asociadas al paciente, facilitando el seguimiento clinico y la trazabilidad de las indicaciones medicas.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Durante este video se mostrara</p>
                                <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-slate-600">
                                    <li>Como acceder al modulo de recetas desde la ficha del paciente</li>
                                    <li>Como registrar una nueva receta medica</li>
                                    <li>Como visualizar recetas historicas</li>
                                    <li>Como mantener seguimiento de prescripciones medicas</li>
                                    <li>Como descargar la receta en formato PDF</li>
                                </ul>
                                <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                                    Este modulo esta disenado para mantener un control clinico mas ordenado y centralizado dentro de la carpeta del paciente.
                                </p>
                            </section>

                            <section>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">Preguntas frecuentes</p>

                                <div className="mt-4 space-y-5 text-[14px] leading-relaxed text-slate-600">
                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿La receta se puede enviar por correo electronico?</h2>
                                        <p className="mt-2">
                                            No. Actualmente las recetas no pueden enviarse directamente por correo desde AgendaClinica.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿La receta se puede descargar?</h2>
                                        <p className="mt-2">
                                            Si. La receta puede descargarse en formato PDF para impresion o entrega al paciente.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿El sistema genera firmas automaticas?</h2>
                                        <p className="mt-2">
                                            No. Actualmente el sistema no genera firmas automaticas.
                                        </p>
                                        <p className="mt-2">
                                            La receta debe imprimirse y firmarse fisicamente por el profesional correspondiente.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-[15px] font-semibold text-slate-800">¿Puedo editar los campos del formulario a mi gusto?</h2>
                                        <p className="mt-2">
                                            No es posible modificar los campos estandar de esta funcionalidad.
                                        </p>
                                        <p className="mt-2">
                                            En caso de requerir personalizaciones especificas o modificaciones a medida, debera solicitar una cotizacion mediante los canales de contacto oficiales de NativeCode.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                                <p className="text-[13px] font-semibold text-cyan-800">Recomendacion</p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                                    Use este modulo cuando necesite que las recetas queden asociadas al paciente y disponibles como historial clinico para futuras atenciones.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </OrbBackground>
    );
}
