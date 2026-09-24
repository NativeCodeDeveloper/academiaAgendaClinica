"use client";

// ── Portada de la Academia ───────────────────────────────────────────────────
// Adaptado del componente original en TypeScript. Cambios respecto de aquel:
//
//  · Sin tipos: este proyecto es JavaScript.
//  · Colores explícitos en vez de los tokens de shadcn: la portada va sobre
//    fondo claro, con tinta oscura y botón negro.
//  · Las tarjetas van en 5:3 y no en 3:4 como el original: son capturas de
//    pantalla del sistema, y recortadas a vertical quedaban apretadas y sin
//    contexto. El 5:3 no es arbitrario: es la proporción que queda cuando se
//    le descuenta a la miniatura el marco negro de la grabación (ver Miniatura),
//    así el recorte no deforma ni pierde pantalla.
//  · Se pide maxresdefault (1280x720, sin bandas negras) y si ese video no la
//    tiene, se cae a hqdefault.
//  · El carrusel avanza lento a propósito (95 s por vuelta). A la velocidad
//    original se leía como un banner publicitario; lento se percibe calmado.
//    Se detiene al pasar el mouse. La animación vive en globals.css
//    (.cinta-capsulas): ahí está explicado por qué no va en JS.

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const APARICION = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

// Una miniatura que cae a la versión menor si la grande no existe.
function Miniatura({ id, titulo }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  return (
    <img
      src={src}
      alt={titulo}
      draggable={false}
      onError={() => setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
      // Recorte del marco negro de la grabación. Medido sobre las 12
      // miniaturas: once traen 6,5% de negro a cada lado y 7,2% arriba, con el
      // borde inferior limpio; la de "nueva sección de bloqueos" está grabada
      // distinto — sin negro a los lados pero con 2,4% abajo.
      // Como el marco es asimétrico, un zoom centrado no sirve: para comerse el
      // 7,2% de arriba cortaría lo mismo abajo, donde sí hay pantalla. Por eso
      // el zoom (12,4%) va con un desplazamiento hacia arriba que lo reparte
      // 8% arriba y 3% abajo, cubriendo los dos encuadres. La escala es
      // uniforme y la tarjeta es 5:3, así que nada se deforma.
      className="h-full w-full -translate-y-[2.8%] scale-[1.124] object-cover"
    />
  );
}

export default function AnimatedMarqueeHero({
  tagline,
  title,
  description,
  ctaText,
  ctaHref = "#",
  videos = [],
  className,
}) {
  // Se duplican para que el recorrido cierre sin salto visible.
  const secuencia = [...videos, ...videos];

  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center lg:h-screen",
        className
      )}
    >
      {/* Carrusel al fondo. Va detrás del contenido a propósito: el botón queda
          encima de las tarjetas, que es lo que le da profundidad a la portada. */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[42%] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_92%,transparent)] md:h-[44%]">
        <div
          className="cinta-capsulas flex h-full items-center"
          style={{ width: "max-content" }}
        >
          {secuencia.map((video, index) => (
            <figure
              key={`${video.id}-${index}`}
              // ring-1 por dentro además del borde: separa la captura del
              // fondo oscuro sin dibujar una línea dura.
              className="group relative mr-2 aspect-[5/3] h-[70%] flex-shrink-0 overflow-hidden rounded-[18px] border border-black/[0.06] shadow-[0_2px_4px_rgba(15,23,42,0.04),0_24px_50px_-26px_rgba(15,23,42,0.45)] md:h-[76%]"
              style={{ rotate: `${index % 2 === 0 ? -1.5 : 1.8}deg` }}
            >
              {/* Solo la captura: sin velo oscuro, sin título encima y sin
                  ícono. Esos elementos ensuciaban la cinta; acá las imágenes
                  funcionan como muestra visual del sistema. */}
              <Miniatura id={video.id} titulo={video.titulo} />
            </figure>
          ))}
        </div>
      </div>

      {/* Contenido. z-10 para quedar sobre el carrusel. */}
      {/* mb: sube el bloque completo (tagline, título, texto y botón) dentro
          del centrado, para despegarlo de la cinta de imágenes. */}
      <div className="relative z-10 mb-[16vh] flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={APARICION}
          className="mb-6 inline-block rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[13px] font-medium text-[#6E6E73] shadow-sm backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="max-w-5xl text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-[#1D1D1F] sm:text-6xl lg:text-7xl"
        >
          {typeof title === "string"
            ? title.split(" ").map((palabra, i) => (
                <motion.span key={i} variants={APARICION} className="inline-block">
                  {palabra}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={APARICION}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#333336] md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div initial="hidden" animate="show" variants={APARICION} transition={{ delay: 0.6 }}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-10 inline-block">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-9 py-4 text-[15px] font-semibold text-white shadow-[0_10px_34px_-12px_rgba(15,23,42,0.6)] transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/40 focus-visible:ring-offset-2"
            >
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
