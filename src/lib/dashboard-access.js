export const DASHBOARD_ROLES = {
  DEFAULT: "default",
  ADMIN: "admin",
  RECEPCIONISTA: "recepcionista",
  SECRETARIA: "secretaria",
  BASICO: "basico",
  CENTRO_ESTETICO: "centro-estetico",
  CLINICO_MEDICO: "clinico-medico",
  ODONTOLOGICO: "odontologico",
  OFTALMOLOGIA: "oftalmologia",
  AGENDA: "agenda",
  CONFIGURACION: "configuracion",
};

export const DASHBOARD_NAV_SECTIONS = [
  {
    title: "Video Cápsulas",
    icon: "academia",
    items: [
      { href: "/dashboard", label: "Inicio" },
      { href: "/dashboard/editarPaciente", label: "Editar Paciente" },
      { href: "/dashboard/moduloAgenda", label: "Agenda" },
      { href: "/dashboard/moduloOdontograma", label: "Odontograma" },
      { href: "/dashboard/principal", label: "Principal" },
      { href: "/dashboard/accesoFichas", label: "Acceso a Fichas" },
    ],
  },
];

const routeMatchersByRole = {
  [DASHBOARD_ROLES.RECEPCIONISTA]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/agendaCitas$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/paciente\/.+$/,
  ],
  [DASHBOARD_ROLES.SECRETARIA]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/agendaCitas$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/paciente\/.+$/,
  ],
  [DASHBOARD_ROLES.BASICO]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/edicionPagina$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/edicionPlantillaEspecifica\/.+$/,
  ],
  [DASHBOARD_ROLES.CENTRO_ESTETICO]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/edicionPagina$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/edicionPlantillaEspecifica\/.+$/,
    /^\/dashboard\/ingresoProductos$/,
    /^\/dashboard\/categoriasProductos$/,
  ],
  [DASHBOARD_ROLES.CLINICO_MEDICO]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/edicionPagina$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/recetaPacientes\/.+$/,
    /^\/dashboard\/recetaRapida$/,
    /^\/dashboard\/examenDocumento$/,
  ],
  [DASHBOARD_ROLES.ODONTOLOGICO]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/edicionPagina$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/recetaPacientes\/.+$/,
    /^\/dashboard\/recetaRapida$/,
    /^\/dashboard\/examenDocumento$/,
    /^\/dashboard\/odontogramasPaciente\/.+$/,
    /^\/dashboard\/ingresoProductos$/,
    /^\/dashboard\/categoriasProductos$/,
  ],
  [DASHBOARD_ROLES.OFTALMOLOGIA]: [
    /^\/dashboard$/,
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/edicionPagina$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/recetaPacientes\/.+$/,
    /^\/dashboard\/recetaRapida$/,
    /^\/dashboard\/examenDocumento$/,
    /^\/dashboard\/recetaLentes$/,
  ],
  [DASHBOARD_ROLES.AGENDA]: [
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/calendario$/,
    /^\/dashboard\/calendarioGeneral$/,
    /^\/dashboard\/agendaCitas$/,
    /^\/dashboard\/bloqueosAgenda$/,
    /^\/dashboard\/AgendaDetalle\/.+$/,
    /^\/dashboard\/listaPacientes$/,
    /^\/dashboard\/GestionPaciente$/,
    /^\/dashboard\/FichaClinica$/,
    /^\/dashboard\/paciente\/.+$/,
    /^\/dashboard\/FichasPacientes\/.+$/,
    /^\/dashboard\/NuevaFicha\/.+$/,
    /^\/dashboard\/odontogramasPaciente\/.+$/,
    /^\/dashboard\/EdicionFicha\/.+$/,
    /^\/dashboard\/recetaPacientes\/.+$/,
  ],
  [DASHBOARD_ROLES.CONFIGURACION]: [
    /^\/dashboard\/no-access$/,
    /^\/dashboard\/portadaEdit$/,
    /^\/dashboard\/publicacionesTituloDescripcion$/,
    /^\/dashboard\/publicaciones$/,
    /^\/dashboard\/profesionales$/,
    /^\/dashboard\/ingresoProductos$/,
    /^\/dashboard\/serviciosAgendamiento$/,
    /^\/dashboard\/tarifaServicio$/,
    /^\/dashboard\/fichasClinicasPlantillas$/,
    /^\/dashboard\/fichasClinicasCategorias\/.+$/,
    /^\/dashboard\/fichaCampo\/.+$/,
    /^\/dashboard\/edicionPlantillaEspecifica\/.+$/,
    /^\/dashboard\/categoriasProductos$/,
    /^\/dashboard\/subCategorias\/.+$/,
    /^\/dashboard\/subsubcategoria\/.+$/,
    /^\/dashboard\/EspecificacionProductos\/.+$/,
    /^\/dashboard\/examenesClinicos$/,
  ],
};

function sanitizePathname(pathname = "") {
  const basePath = String(pathname || "").split("?")[0].split("#")[0] || "/";

  if (basePath === "/") return "/";
  return basePath.replace(/\/+$/, "");
}

export function normalizeDashboardRole(role) {
  const roleValue = String(role || "").trim().toLowerCase();
  if (roleValue === DASHBOARD_ROLES.DEFAULT) {
    return DASHBOARD_ROLES.ADMIN;
  }
  return Object.values(DASHBOARD_ROLES).includes(roleValue) ? roleValue : null;
}

export function getDashboardRoleFromClaims(claims) {
  if (!claims || typeof claims !== "object") return null;

  const role =
    claims?.metadata?.role ??
    claims?.publicMetadata?.role ??
    claims?.public_metadata?.role ??
    claims?.unsafeMetadata?.role ??
    claims?.unsafe_metadata?.role ??
    null;

  return normalizeDashboardRole(role);
}

export function getDashboardRoleFromUser(user) {
  if (!user || typeof user !== "object") return null;

  const role =
    user?.publicMetadata?.role ??
    user?.public_metadata?.role ??
    user?.unsafeMetadata?.role ??
    user?.unsafe_metadata?.role ??
    null;

  return normalizeDashboardRole(role);
}

export function canAccessDashboardPath(role, pathname) {
  const normalizedRole = normalizeDashboardRole(role);
  const cleanPath = sanitizePathname(pathname);

  if (!normalizedRole || normalizedRole === DASHBOARD_ROLES.ADMIN) {
    return true;
  }

  const matchers = routeMatchersByRole[normalizedRole] || [];
  return matchers.some((matcher) => matcher.test(cleanPath));
}

export function getDashboardSectionsForRole(role) {
  return DASHBOARD_NAV_SECTIONS
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => canAccessDashboardPath(role, item.href)),
    }))
    .filter((section) => section.items.length > 0);
}

export function isBasicDashboardRole(role) {
  return normalizeDashboardRole(role) === DASHBOARD_ROLES.BASICO;
}

export function canAccessOdontograma(role) {
  return ![
    DASHBOARD_ROLES.BASICO,
    DASHBOARD_ROLES.CLINICO_MEDICO,
  ].includes(normalizeDashboardRole(role));
}

export function canAccessRecetasEnFicha(role) {
  return ![DASHBOARD_ROLES.BASICO].includes(normalizeDashboardRole(role));
}
