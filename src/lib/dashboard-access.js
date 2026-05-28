export const DASHBOARD_NAV_SECTIONS = [
  {
    title: "Video Cápsulas",
    icon: "academia",
    items: [
      { href: "/dashboard", label: "Inicio" },
      { href: "/dashboard/editarPaciente", label: "Editar Paciente" },
      { href: "/dashboard/moduloAgenda", label: "Agenda" },
      { href: "/dashboard/moduloOdontograma", label: "Odontograma" },
      { href: "/dashboard/moduloFichaClinica", label: "Completado de Fichas Clínicas" },
      { href: "/dashboard/principal", label: "Principal" },
      { href: "/dashboard/accesoFichas", label: "Acceso a Fichas" },
      { href: "/dashboard/recetaRapida", label: "Receta Rapida" },
      { href: "/dashboard/solicitudExamenes", label: "Solicitud de Exámenes" },
      { href: "/dashboard/recetasHistorial", label: "Recetas (Historial)" },
      { href: "/dashboard/bloqueos", label: "Bloqueo de Agenda" },
    ],
  },
];

export function getDashboardSectionsForRole() {
  return DASHBOARD_NAV_SECTIONS;
}

export function canAccessDashboardPath() {
  return true;
}

export function canAccessOdontograma() {
  return true;
}

export function canAccessRecetasEnFicha() {
  return true;
}

export function isBasicDashboardRole() {
  return false;
}
