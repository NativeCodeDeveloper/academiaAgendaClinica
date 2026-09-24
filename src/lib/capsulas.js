// ── Cápsulas de la Academia ──────────────────────────────────────────────────
// Los videos viven hoy como una constante YOUTUBE_URL dentro de cada página de
// lección, en dos formatos distintos (youtu.be/ID y watch?v=ID). Esta lista los
// reúne para que la portada pueda mostrarlos sin repetir esa información.
//
// Si mañana se centraliza de verdad (que cada lección lea de aquí), este archivo
// pasa a ser la única fuente y se evita que un video se cambie en un lado y no
// en el otro.

/** Extrae el id de un enlace de YouTube en cualquiera de sus dos formas. */
export function idDeYoutube(url) {
  const texto = String(url ?? "");
  const corto = texto.match(/youtu\.be\/([\w-]+)/);
  if (corto) return corto[1];

  const largo = texto.match(/[?&]v=([\w-]+)/);
  return largo ? largo[1] : "";
}

/**
 * Miniatura de un video. Se usa hqdefault y no maxresdefault: el segundo no
 * existe para todos los videos y deja el hueco en negro.
 */
export function miniaturaDeYoutube(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Un video por módulo. Tres lecciones comparten el mismo (Principal, Agenda y
// Reservaciones), así que aquí aparece una sola vez para no repetir la misma
// imagen en el carrusel.
const CAPSULAS = [
  { titulo: "Panel principal", ruta: "/dashboard/principal", url: "https://www.youtube.com/watch?v=ga44dJoW62c" },
  { titulo: "Módulo Agenda", ruta: "/dashboard/moduloAgenda", url: "https://www.youtube.com/watch?v=ga44dJoW62c" },
  { titulo: "Bloqueo de agenda", ruta: "/dashboard/bloqueos", url: "https://youtu.be/yDdmbRoMN-Y" },
  { titulo: "Nueva sección de bloqueos", ruta: "/dashboard/nuevaSeccionBloqueos", url: "https://www.youtube.com/watch?v=2wT7jMPcTRM" },
  { titulo: "Horas en la página web", ruta: "/dashboard/horasPaginaWeb", url: "https://youtu.be/QOngQ2D7Ci0" },
  { titulo: "Editar paciente", ruta: "/dashboard/editarPaciente", url: "https://www.youtube.com/watch?v=Me2QWsRMFk8" },
  { titulo: "Ficha clínica", ruta: "/dashboard/moduloFichaClinica", url: "https://youtu.be/kv0krMbZr3I" },
  { titulo: "Acceso a fichas", ruta: "/dashboard/accesoFichas", url: "https://youtu.be/KWLr1mHjhA0" },
  { titulo: "Odontograma", ruta: "/dashboard/moduloOdontograma", url: "https://youtu.be/L_J7Pf9qh4c" },
  { titulo: "Receta rápida", ruta: "/dashboard/recetaRapida", url: "https://youtu.be/eZhpFPow0MA" },
  { titulo: "Historial de recetas", ruta: "/dashboard/recetasHistorial", url: "https://youtu.be/8XuHhPkEXZM" },
  { titulo: "Solicitud de exámenes", ruta: "/dashboard/solicitudExamenes", url: "https://www.youtube.com/watch?v=w7lKsLYkDmU" },
  { titulo: "Generación de presupuestos", ruta: "/dashboard/generacionPresupuestos", url: "https://www.youtube.com/watch?v=RUGGZeSXmFk" },
];

/** Cápsulas con su id y miniatura ya resueltos, sin videos repetidos. */
export const capsulas = (() => {
  const vistos = new Set();

  return CAPSULAS.map((capsula) => {
    const id = idDeYoutube(capsula.url);
    return { ...capsula, id, miniatura: miniaturaDeYoutube(id) };
  }).filter((capsula) => {
    if (!capsula.id || vistos.has(capsula.id)) return false;
    vistos.add(capsula.id);
    return true;
  });
})();

export default capsulas;
