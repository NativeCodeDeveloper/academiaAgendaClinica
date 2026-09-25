"use client";

// ── Portada alternativa ──────────────────────────────────────────────────────
// Version del componente Hero que llego en TypeScript, adaptada a este
// proyecto. Lo que hubo que cambiar para que funcionara:
//
//  · A JavaScript: aca no hay TSX (components.json lo declara), asi que la
//    interface HeroProps se fue y los valores por defecto quedan en el destructuring.
//  · animate-fade-in y animate-fade-up no existian. Como el titulo y el
//    subtitulo llevan opacity-0 de base, sin esas animaciones se quedaban
//    invisibles para siempre. Estan agregadas en globals.css.
//  · font-geist tampoco existe (solo hay --font-geist-mono, que es otra cosa):
//    se quito y queda la tipografia del sitio.
//  · El degradado del pie usaba hsl(var(--background)); aca --background es un
//    valor oklch, asi que hsl() no lo podia leer y no pintaba nada. Va con el
//    color literal.
//  · Sin variantes dark:. La Academia es clara y no tiene interruptor de tema,
//    asi que solo habrian sumado ruido.
//  · Colores de la casa: el violeta de AgendaClinica en el acento, la tinta
//    #1D1D1F del titulo y el #333336 del cuerpo — el tono que ya se verifico
//    que se lee sobre el fondo.
//  · Detras va FondoAcademia, el mismo degradado animado con grano del resto
//    del sitio, y encima un lavado blanco que le devuelve el aire claro del
//    diseño original. Asi la portada tiene color y movimiento sin dejar de ser
//    la misma pieza.
//  · Sin la cuadricula del original: sobre el degradado animado las lineas se
//    leian como una reja encima del color.
//  · El arco de abajo se ensancho mucho. Con el 140% original se le veian las
//    dos puntas curvandose dentro de la pantalla; ahora la elipse es bastante
//    mas ancha que el viewport en cada tamaño, asi que solo se ve el tramo
//    central y sale por los costados.

import { ChevronRight } from "lucide-react";
import FondoAcademia from "@/Componentes/FondoAcademia";
import { Button } from "@/components/ui/button";

export default function HeroPortada({
  eyebrow = "Estimado usuario",
  title,
  subtitle,
  ctaLabel = "Comenzar",
  ctaHref = "/dashboard",
}) {
  return (
    <section
      id="hero"
      className="relative mx-auto min-h-[calc(100vh-40px)] w-full overflow-hidden rounded-b-xl bg-white px-6 pt-28 text-center sm:pt-36 md:px-8 md:pt-40"
    >
      {/* Degradado animado con grano, el mismo del resto de la Academia */}
      <FondoAcademia tenue />

      {/* Aclarado suave, solo arriba, para que el titulo tenga donde apoyarse.
          Al principio iba al 90% y bajando: sumado al velo que FondoAcademia ya
          trae, dejaba el degradado animado practicamente blanco. Ahora arranca
          al 28% y se va a transparente a los dos tercios, asi el color se ve
          igual que en la portada de "/" */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.28),rgba(255,255,255,0.06)_40%,rgba(255,255,255,0)_65%)]" />

      {/* Acento radial. Bastante mas ancho que la pantalla en cada tamaño: asi
          solo se ve el tramo central del arco y las puntas quedan afuera */}
      <div className="animate-fade-up pointer-events-none absolute left-1/2 top-[calc(100%-70px)] h-[420px] w-[300%] -translate-x-1/2 rounded-[100%] border-[#5227FF] bg-white bg-[radial-gradient(closest-side,#fff_82%,#5227FF)] sm:w-[240%] md:top-[calc(100%-110px)] md:h-[560px] md:w-[200%] lg:top-[calc(100%-150px)] lg:h-[760px] lg:w-[175%]" />

      {/* Grano sobre el arco y el fondo, no sobre el texto */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.16]" />

      <div className="relative z-10">

      {eyebrow && (
        <span className="mx-auto flex w-fit items-center justify-center rounded-3xl border-[2px] border-[#D2D2D7]/60 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent px-5 py-2 text-sm uppercase tracking-tight text-[#6E6E73]">
          {eyebrow}
          <ChevronRight className="ml-2 inline h-4 w-4" />
        </span>
      )}

      <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-[#1D1D1F] from-30% to-[#1D1D1F]/40 bg-clip-text py-6 text-4xl font-semibold leading-none tracking-tighter text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
        {title}
      </h1>

      <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-base tracking-tight text-[#333336] opacity-0 sm:text-lg md:text-xl">
        {subtitle}
      </p>

      {ctaLabel && (
        <div className="flex justify-center">
          <Button
            asChild
            className="z-20 mt-[-20px] h-auto w-fit rounded-full bg-[#1D1D1F] px-9 py-4 text-center text-lg tracking-tight text-white shadow-[0_10px_34px_-12px_rgba(15,23,42,0.6)] hover:bg-black md:w-52"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}

        {/* Fundido inferior */}
        <div className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,#EAF0FF_10%,transparent)]" />
      </div>
    </section>
  );
}
