"use client";

// ── Fondo de la Academia ─────────────────────────────────────────────────────
// El degradado que va detras de todo, en la portada y en el dashboard. Vivia
// copiado en los dos archivos y ya habia empezado a separarse, asi que esta
// aca una sola vez.
//
// Son tres capas, de abajo hacia arriba:
//
//  1. Un degradado CSS fijo. Es lo que se ve en el primer pintado, antes de que
//     React hidrate y monte el canvas — sin el, la pagina abria en blanco y el
//     color entraba de golpe un instante despues: ese era el parpadeo al entrar
//     desde el telefono o desde un equipo mas lento. Tambien es la red de
//     seguridad: si el navegador no puede con WebGL 2, esta capa queda como
//     fondo definitivo y la pantalla se ve igual, solo que quieta.
//
//  2. Grainient (react-bits): el degradado animado con grano, dibujado en
//     WebGL. Entra con una transicion de opacidad para que el relevo con la
//     capa 1 no se note. Se pausa solo cuando la pestaña esta oculta o el
//     canvas sale de pantalla, asi que no gasta bateria de fondo.
//
//  3. Un velo blanco. El degradado en crudo sale a saturacion completa: el azul
//     pisa fuerte y los claros se queman a blanco puro — medido, 1.00:1 contra
//     un texto claro. El velo lo lleva a pastel y deja la tinta legible en toda
//     la pantalla, que es lo que pide el resto de la Academia.
//
// "use client" es obligatorio: el layout del dashboard es un componente de
// servidor y Grainient monta un canvas con useEffect. Este archivo es la
// frontera entre los dos mundos.

import { useEffect, useState } from "react";
import Grainient from "@/components/Grainient";

// Aproxima el resultado del shader con los mismos tres colores. No busca ser
// identico: solo tiene que sostener el primer cuadro sin que se note el cambio.
const DEGRADADO_FIJO =
  "linear-gradient(125deg, #EAF0FF 0%, #C6CCF7 30%, #9FA8F0 55%, #B9C4F5 78%, #E4E9FF 100%)";

export default function FondoAcademia({ tenue = false }) {
  const [hayWebgl2, setHayWebgl2] = useState(false);

  useEffect(() => {
    // Grainient compila shaders `#version 300 es`, que son exclusivos de
    // WebGL 2. Si el navegador no lo tiene (Safari viejo, equipos con la
    // aceleracion desactivada, algunos Android), montar el canvas termina en un
    // error de compilacion y en un fondo vacio. Preguntar primero cuesta nada y
    // deja la capa 1 a cargo.
    try {
      const prueba = document.createElement("canvas");
      setHayWebgl2(Boolean(prueba.getContext("webgl2")));
    } catch {
      setHayWebgl2(false);
    }
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${tenue ? "opacity-70" : ""}`}
      style={{ background: DEGRADADO_FIJO }}
      aria-hidden="true"
    >
      {hayWebgl2 && (
        <div className="absolute inset-0 animate-[aparecer-fondo_700ms_ease-out_both]">
          <Grainient
            color1="#EAF0FF"
            color2="#5227FF"
            color3="#2E6BFF"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1}
            gamma={1}
            saturation={0.8}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-white/55" />
    </div>
  );
}
