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
// Fondo blanco, como el componente original, con el mismo tratamiento que el
// dashboard encima: los degradados de marca (morado y cian) muy abiertos y la
// capa de grano. Sin eso la portada quedaba en blanco plano y el dashboard
// tenia color, asi que al entrar cambiaba el material de la pagina, no solo el
// contenido.

import AnimatedMarqueeHero from "@/Componentes/AnimatedMarqueeHero";
import FondoAcademia from "@/Componentes/FondoAcademia";
import { capsulas } from "@/lib/capsulas";

export default function PortadaAcademia() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">

      <FondoAcademia tenue />

      {/* z-10 propio: la portada tiene su carrusel en z-0 y el texto en z-10.
          Sin este contenedor esos niveles conviven con los del fondo y el
          carrusel termina por debajo del degradado. */}
      <div className="relative z-10">
      <AnimatedMarqueeHero
        tagline="Estimado usuario"
        title="Bienvenido a la Academia de Agenda Clínica"
        description="Formación oficial de Agenda Clínica. Cada cápsula recorre un módulo real del sistema, paso a paso, para que tu equipo lo domine y tu clínica trabaje con el orden que necesita."
        ctaText="Comenzar"
        ctaHref="/dashboard"
        videos={capsulas}
      />
      </div>
    </div>
  );
}
