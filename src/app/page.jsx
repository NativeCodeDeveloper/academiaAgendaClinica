"use client";

// ── Portada de la Academia ───────────────────────────────────────────────────
// Es lo primero que ve quien entra a la Academia. Antes esta ruta solo hacía
// redirect("/dashboard") y el usuario caía directo en el listado de cápsulas,
// sin bienvenida. El redirect venía del middleware, no de esta página: ahí se
// habilitó la raíz.
//
// Vive fuera del grupo (public) a propósito: ese layout agrega navbar, footer y
// botón de WhatsApp, que le quitarían el aire a una portada a pantalla
// completa.
//
// Fondo claro, como el componente original. El interior del dashboard es
// oscuro: el contraste marca la entrada.

import AnimatedMarqueeHero from "@/Componentes/AnimatedMarqueeHero";
import { capsulas } from "@/lib/capsulas";

export default function PortadaAcademia() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <AnimatedMarqueeHero
        tagline="Estimado usuario"
        title="Bienvenido a la Academia de Agenda Clínica"
        description="Formación oficial de Agenda Clínica. Cada cápsula recorre un módulo real del sistema, paso a paso, para que tu equipo lo domine y tu clínica trabaje con el orden que necesita."
        ctaText="Comenzar"
        ctaHref="/dashboard"
        videos={capsulas}
      />
    </div>
  );
}
