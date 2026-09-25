"use client";

// ── Portada de la Academia ───────────────────────────────────────────────────
// Es lo primero que ve quien entra. El boton "Comenzar" lleva al dashboard.
//
// Vive fuera del grupo (public) a proposito: ese layout agrega navbar, footer y
// boton de WhatsApp, que le quitarian el aire a una portada a pantalla
// completa. Y el middleware deja pasar "/" de forma explicita, porque antes
// redirigia al dashboard y el usuario nunca veia esta pantalla.
//
// Estuvo un tiempo con un carrusel de miniaturas de las capsulas
// (AnimatedMarqueeHero, que sigue en el proyecto por si se quiere volver).
// Hoy usa HeroPortada: el mismo degradado animado de fondo y el arco violeta
// abajo.

import HeroPortada from "@/Componentes/HeroPortada";

export default function PortadaAcademia() {
  return (
    <HeroPortada
      eyebrow="Estimado usuario"
      title="Bienvenido a la Academia de Agenda Clínica"
      subtitle="Formación oficial de Agenda Clínica. Cada cápsula recorre un módulo real del sistema, paso a paso, para que tu equipo lo domine y tu clínica trabaje con el orden que necesita."
      ctaLabel="Comenzar"
      ctaHref="/dashboard"
    />
  );
}
