// =============================================================
// MALLA CURRICULAR INTERACTIVA
// Administración y Gestión de Recursos Humanos (AGRH)
// Universidad Técnica Nacional
// =============================================================

// Prefijo de almacenamiento: evita que los códigos compartidos con otras
// carreras (ME-005, FH-100..FH-400, AC-100, AD-100) se pisen entre sí
// cuando varias mallas se publican en el mismo dominio.
const STORAGE_PREFIX = 'agrh:';

const storage = {
  key: (codigo) => `${STORAGE_PREFIX}${codigo}`,
  estaCompletado: (codigo) => localStorage.getItem(storage.key(codigo)) === 'completado',
  completar: (codigo) => localStorage.setItem(storage.key(codigo), 'completado'),
  quitar: (codigo) => localStorage.removeItem(storage.key(codigo)),
  limpiarTodo: () => {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(STORAGE_PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  }
};

// =============================================================
// 1. DATOS DE LA MALLA
//
// requisitos      -> deben estar aprobados ANTES de matricular el curso.
// correquisitos   -> el plan los declara de forma recíproca (A pide B y B pide A):
//                    se matriculan en el mismo periodo y no se bloquean entre sí.
// requisitosNivel -> { grado, niveles: [] } que deben estar aprobados por completo.
// =============================================================
const mallaData = {
  diplomado: {
    titulo: 'Diplomado en Administración de Recursos Humanos',
    creditos: 83,
    niveles: [
      {
        numero: 1,
        ramos: [
          { codigo: 'ADC-002', nombre: 'Principios de Administración', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-114', nombre: 'Métodos de Investigación', creditos: 3, requisitos: [] },
          { codigo: 'CB-007', nombre: 'Recursos Informáticos', creditos: 2, requisitos: [] },
          { codigo: 'IDCAD01', nombre: 'Inglés I', creditos: 0, requisitos: [] },
          { codigo: 'ME-001', nombre: 'Matemática General', creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 2,
        ramos: [
          { codigo: 'ADC-001', nombre: 'Contabilidad Básica', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-211', nombre: 'Introducción a la Sociología de las Organizaciones', creditos: 3, requisitos: ['AGRH-114'] },
          { codigo: 'AGRH-214', nombre: 'Comunicación Administrativa', creditos: 3, requisitos: ['AGRH-114'] },
          { codigo: 'AGRH-215', nombre: 'Psicología I', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-312', nombre: 'Fundamentos de Mercadeo', creditos: 3, requisitos: ['ADC-002', 'AGRH-114'] },
          { codigo: 'IDCAD02', nombre: 'Inglés II', creditos: 0, requisitos: ['IDCAD01'] }
        ]
      },
      {
        numero: 3,
        ramos: [
          { codigo: 'AGRH-212', nombre: 'Economía I', creditos: 3, requisitos: ['ME-001'] },
          { codigo: 'AGRH-314', nombre: 'Derecho Laboral I', creditos: 3, requisitos: ['AGRH-114'] },
          { codigo: 'AGRH-315', nombre: 'Psicología II', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-411', nombre: 'Introducción a la Administración de Recursos Humanos', creditos: 3, requisitos: ['ADC-002'] },
          { codigo: 'AGRH-414', nombre: 'Presupuesto', creditos: 3, requisitos: ['ADC-001'] },
          { codigo: 'IDCAD03', nombre: 'Inglés III', creditos: 0, requisitos: ['IDCAD02'] }
        ]
      },
      {
        numero: 4,
        ramos: [
          { codigo: 'AGRH-412', nombre: 'Introducción a la Salud Ocupacional', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-415', nombre: 'Derecho Laboral II', creditos: 3, requisitos: ['AGRH-314'] },
          { codigo: 'AGRH-416', nombre: 'Tablas Dinámicas', creditos: 3, requisitos: ['CB-007'] },
          { codigo: 'AGRH-712', nombre: 'Normas y Estándares de Calidad', creditos: 3, requisitos: ['AGRH-416'] },
          { codigo: 'AGRH-812', nombre: 'Economía II', creditos: 3, requisitos: ['AGRH-212'] },
          { codigo: 'IDCAD04', nombre: 'Inglés IV', creditos: 0, requisitos: ['IDCAD03'] }
        ]
      },
      {
        numero: 5,
        ramos: [
          { codigo: 'AGRH-512', nombre: 'Clasificación de Puestos', creditos: 4, requisitos: ['AGRH-411', 'AGRH-415'], correquisitos: ['AGRH-612'] },
          { codigo: 'AGRH-612', nombre: 'Reclutamiento y Selección', creditos: 4, requisitos: ['AGRH-411', 'AGRH-415'], correquisitos: ['AGRH-512'] },
          { codigo: 'AGRH-614', nombre: 'Administración de Remuneraciones', creditos: 3, requisitos: ['AGRH-414', 'AGRH-415'] },
          { codigo: 'IDCAD05', nombre: 'Inglés V', creditos: 0, requisitos: ['IDCAD04'] },
          { codigo: 'ME-005', nombre: 'Estadística Descriptiva', creditos: 3, requisitos: ['ME-001'] }
        ]
      },
      {
        numero: 6,
        ramos: [
          { codigo: 'AGRH-514', nombre: 'Capacitación y Desarrollo', creditos: 4, requisitos: ['AGRH-512', 'AGRH-612'], correquisitos: ['AGRH-611'] },
          { codigo: 'AGRH-611', nombre: 'Valoración de Puestos', creditos: 4, requisitos: ['AGRH-512'], correquisitos: ['AGRH-514'] },
          { codigo: 'AGRH-613', nombre: 'Seminario Integrado de RRHH', creditos: 2, requisitos: ['AGRH-512', 'AGRH-612', 'AGRH-614', 'ME-005'] },
          { codigo: 'AGRH-711', nombre: 'Estadística Inferencial', creditos: 3, requisitos: ['ME-005'] },
          { codigo: 'IDCAD06', nombre: 'Inglés VI', creditos: 0, requisitos: ['IDCAD05'] }
        ]
      }
    ]
  },

  bachillerato: {
    titulo: 'Bachillerato en Administración y Gestión de Recursos Humanos',
    creditos: 59,
    niveles: [
      {
        numero: 7,
        ramos: [
          { codigo: 'AC-100', nombre: 'Actividad Cultural', creditos: 1, requisitos: [] },
          { codigo: 'AGRH-713', nombre: 'Cultura y Clima Organizacional', creditos: 3, requisitos: ['AGRH-612'] },
          { codigo: 'AGRH-811', nombre: 'Contabilidad de Costos', creditos: 3, requisitos: [], correquisitos: ['AGRH-912'] },
          { codigo: 'AGRH-912', nombre: 'Matemática Financiera', creditos: 3, requisitos: [], correquisitos: ['AGRH-811'] },
          { codigo: 'AGRH-913', nombre: 'Administración de la Producción', creditos: 3, requisitos: ['AGRH-711', 'AGRH-712'] },
          { codigo: 'FH-100', nombre: 'Filosofía y Pensamiento', creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 8,
        ramos: [
          { codigo: 'AD-100', nombre: 'Actividad Deportiva', creditos: 0, requisitos: [] },
          { codigo: 'AGRH-813', nombre: 'Investigación de Operaciones', creditos: 3, requisitos: ['AGRH-913'] },
          { codigo: 'AGRH-911', nombre: 'Planificación de RRHH', creditos: 3, requisitos: ['AGRH-913'], correquisitos: ['AGRH-914'] },
          { codigo: 'AGRH-914', nombre: 'Auditoría de RRHH', creditos: 3, requisitos: ['AGRH-811', 'AGRH-912'], correquisitos: ['AGRH-911'] },
          { codigo: 'FH-200', nombre: 'Literatura y Comunicación', creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 9,
        ramos: [
          { codigo: 'AGRH-1012', nombre: 'Gestión por Competencias', creditos: 3, requisitos: ['AGRH-915'] },
          { codigo: 'AGRH-511', nombre: 'Análisis Administrativo', creditos: 4, requisitos: ['AGRH-914'], correquisitos: ['AGRH-915'] },
          { codigo: 'AGRH-915', nombre: 'Evaluación del Desempeño', creditos: 2, requisitos: ['AGRH-911'], correquisitos: ['AGRH-511'] },
          { codigo: 'AGRHEL-I', nombre: 'Electivo I', creditos: 3, requisitos: ['AGRH-911'] },
          { codigo: 'FH-300', nombre: 'Historia de la Cultura', creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 10,
        ramos: [
          { codigo: 'AGRH-1011', nombre: 'Gerencia de RRHH', creditos: 3, requisitos: ['AGRH-711', 'AGRH-911'] },
          { codigo: 'AGRH-1013', nombre: 'Práctica Profesional', creditos: 7, requisitos: ['AGRH-1011', 'AGRH-1012', 'AGRH-511', 'AGRH-915', 'AGRHEL-I', 'AGRHEL-II', 'FH-300', 'FH-400'] },
          { codigo: 'AGRHEL-II', nombre: 'Electivo II', creditos: 3, requisitos: ['AGRHEL-I'] },
          { codigo: 'FH-400', nombre: 'Realidad Nacional', creditos: 3, requisitos: [] }
        ]
      }
    ]
  },

  licenciatura: {
    titulo: 'Licenciatura en Administración y Gestión de Recursos Humanos',
    creditos: 36,
    niveles: [
      {
        numero: 11,
        etiqueta: 'Nivel 1 de Licenciatura',
        ramos: [
          { codigo: 'AGRH-0111', nombre: 'Administración Financiera', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-0112', nombre: 'Psicología Laboral e Industrial Aplicada', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-0113', nombre: 'Innovación y Emprendedurismo', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-0114', nombre: 'Sistemas de Información Empresarial', creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 12,
        etiqueta: 'Nivel 2 de Licenciatura',
        ramos: [
          { codigo: 'AGRH-0211', nombre: 'Formulación y Evaluación de Proyectos', creditos: 4, requisitos: [] },
          { codigo: 'AGRH-0212', nombre: 'Técnicas de Negociación y Solución de Conflictos', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-0213', nombre: 'Seminario Empresarial por Competencias', creditos: 3, requisitos: [] },
          { codigo: 'AGRH-0214', nombre: 'Taller de Investigación', creditos: 3, requisitos: ['AGRH-0111', 'AGRH-0112', 'AGRH-0113', 'AGRH-0114'] }
        ]
      },
      {
        numero: 13,
        etiqueta: 'Nivel 3 de Licenciatura',
        ramos: [
          { codigo: 'AGRH-0311', nombre: 'Gestión del Cambio', creditos: 4, requisitos: [] },
          { codigo: 'AGRH-0312', nombre: 'Estructuras Salariales', creditos: 4, requisitos: [] },
          { codigo: 'AGRH-0313', nombre: 'Ética Profesional', creditos: 3, requisitos: [] },
          {
            codigo: 'AGRH-0314',
            nombre: 'Investigación Dirigida',
            creditos: 0,
            requisitos: ['AGRH-0311', 'AGRH-0312', 'AGRH-0313'],
            requisitosNivel: [11, 12]
          }
        ]
      }
    ]
  }
};

// =============================================================
// 2. ELECTIVOS
// =============================================================
const electivoOpciones = {
  'AGRHEL-I': [
    { codigo: 'AGRHEL-916', nombre: 'Tecnologías Emergentes Aplicadas en la Gestión del Talento Humano', creditos: 3 },
    { codigo: 'AGRHEL-917', nombre: 'Incentivos y Beneficios', creditos: 3 },
    { codigo: 'AGRHEL-918', nombre: 'Técnicas y Herramientas de Mejora Continua', creditos: 3 },
    { codigo: 'AGRHEL-919', nombre: 'Nuevas Formas de Contratación', creditos: 3 }
  ],
  'AGRHEL-II': [
    { codigo: 'AGRHEL-1014', nombre: 'Comunicación y Protocolo Organizacional', creditos: 3 },
    { codigo: 'AGRHEL-1015', nombre: 'Técnicas para el Manejo de Descargas Emocionales', creditos: 3 },
    { codigo: 'AGRHEL-1016', nombre: 'Manejo de Factores Psicosociales en la Gestión del Talento Humano', creditos: 3 }
  ]
};

// =============================================================
// 3. DESCRIPCIONES DE CURSOS
// =============================================================
const descripcionesCursos = {
  // Diplomado
  'ADC-002': 'Estudio de los principios fundamentales de la administración y su aplicación en las organizaciones.',
  'AGRH-114': 'Métodos y técnicas de investigación aplicadas al área de recursos humanos.',
  'CB-007': 'Uso de recursos informáticos aplicados a la gestión administrativa.',
  'IDCAD01': 'Curso de inglés nivel básico I.',
  'ME-001': 'Matemática general aplicada a la administración.',
  'ADC-001': 'Fundamentos de contabilidad para la gestión administrativa.',
  'AGRH-211': 'Introducción a la sociología aplicada a las organizaciones.',
  'AGRH-214': 'Técnicas de comunicación efectiva en el ámbito administrativo.',
  'AGRH-215': 'Fundamentos de psicología aplicada al ámbito laboral.',
  'AGRH-312': 'Principios básicos de mercadeo y su aplicación en la gestión organizacional.',
  'IDCAD02': 'Curso de inglés nivel básico II.',
  'AGRH-212': 'Principios económicos aplicados a la gestión empresarial.',
  'AGRH-314': 'Fundamentos del derecho laboral y su aplicación.',
  'AGRH-315': 'Psicología avanzada aplicada al ámbito organizacional.',
  'AGRH-411': 'Introducción a la administración de recursos humanos.',
  'AGRH-414': 'Elaboración y control de presupuestos organizacionales.',
  'IDCAD03': 'Curso de inglés nivel intermedio I.',
  'AGRH-412': 'Introducción a la salud ocupacional y seguridad laboral.',
  'AGRH-415': 'Derecho laboral avanzado y relaciones laborales.',
  'AGRH-416': 'Uso de tablas dinámicas para análisis de datos en recursos humanos.',
  'AGRH-712': 'Normas y estándares de calidad aplicados a la gestión.',
  'AGRH-812': 'Economía avanzada aplicada a la gestión empresarial.',
  'IDCAD04': 'Curso de inglés nivel intermedio II.',
  'AGRH-512': 'Técnicas de clasificación y descripción de puestos.',
  'AGRH-612': 'Procesos de reclutamiento y selección de personal.',
  'AGRH-614': 'Administración de sistemas de remuneraciones y compensaciones.',
  'IDCAD05': 'Curso de inglés nivel avanzado I.',
  'ME-005': 'Estadística descriptiva aplicada a la gestión de recursos humanos.',
  'AGRH-514': 'Diseño e implementación de programas de capacitación y desarrollo.',
  'AGRH-611': 'Métodos de valoración y evaluación de puestos.',
  'AGRH-613': 'Seminario integrado de recursos humanos.',
  'AGRH-711': 'Estadística inferencial aplicada a la toma de decisiones en recursos humanos.',
  'IDCAD06': 'Curso de inglés nivel avanzado II.',

  // Bachillerato
  'AC-100': 'Actividad cultural formativa.',
  'AGRH-713': 'Gestión de cultura y clima organizacional.',
  'AGRH-811': 'Contabilidad de costos aplicada a la gestión.',
  'AGRH-912': 'Matemática financiera para la toma de decisiones.',
  'AGRH-913': 'Administración de procesos productivos.',
  'FH-100': 'Formación humanística en filosofía y pensamiento.',
  'AD-100': 'Actividad deportiva formativa.',
  'AGRH-813': 'Técnicas de investigación de operaciones aplicadas.',
  'AGRH-911': 'Planificación estratégica de recursos humanos.',
  'AGRH-914': 'Procesos de auditoría en recursos humanos.',
  'FH-200': 'Formación humanística en literatura y comunicación.',
  'AGRH-1012': 'Gestión por competencias laborales.',
  'AGRH-511': 'Análisis administrativo y organizacional.',
  'AGRH-915': 'Sistemas de evaluación del desempeño.',
  'AGRHEL-I': 'Curso electivo I del bachillerato. Seleccione una de las opciones disponibles.',
  'FH-300': 'Formación humanística en historia de la cultura.',
  'AGRH-1011': 'Gerencia estratégica de recursos humanos.',
  'AGRH-1013': 'Práctica profesional supervisada.',
  'AGRHEL-II': 'Curso electivo II del bachillerato. Seleccione una de las opciones disponibles.',
  'FH-400': 'Formación humanística en realidad nacional.',

  // Licenciatura
  'AGRH-0111': 'Administración financiera aplicada a la gestión de recursos humanos.',
  'AGRH-0112': 'Psicología laboral e industrial aplicada.',
  'AGRH-0113': 'Innovación y emprendedurismo en la gestión organizacional.',
  'AGRH-0114': 'Sistemas de información empresarial aplicados a RRHH.',
  'AGRH-0211': 'Formulación y evaluación de proyectos de recursos humanos.',
  'AGRH-0212': 'Técnicas de negociación y resolución de conflictos laborales.',
  'AGRH-0213': 'Seminario empresarial basado en competencias.',
  'AGRH-0214': 'Taller de investigación aplicada a recursos humanos.',
  'AGRH-0311': 'Gestión del cambio organizacional.',
  'AGRH-0312': 'Diseño de estructuras salariales y compensaciones.',
  'AGRH-0313': 'Ética profesional en la gestión de recursos humanos.',
  'AGRH-0314': 'Investigación dirigida en recursos humanos.',

  // Opciones de electivos
  'AGRHEL-916': 'Estudio y aplicación de tecnologías emergentes en la gestión moderna del talento humano.',
  'AGRHEL-917': 'Diseño e implementación de sistemas de incentivos y beneficios laborales.',
  'AGRHEL-918': 'Técnicas y herramientas de mejora continua aplicadas a la gestión de RRHH.',
  'AGRHEL-919': 'Análisis de nuevas formas de contratación y su impacto en el mercado laboral.',
  'AGRHEL-1014': 'Protocolos de comunicación organizacional y etiqueta empresarial.',
  'AGRHEL-1015': 'Técnicas para el manejo y canalización de descargas emocionales en el trabajo.',
  'AGRHEL-1016': 'Gestión de factores psicosociales en la administración del talento humano.'
};

// =============================================================
// 4. UTILIDADES DE CONSULTA
// =============================================================
const GRADOS = ['diplomado', 'bachillerato', 'licenciatura'];

function todosLosRamos() {
  return GRADOS.flatMap((g) => mallaData[g].niveles.flatMap((n) => n.ramos));
}

function buscarRamo(codigo) {
  return todosLosRamos().find((r) => r.codigo === codigo) || null;
}

function buscarNivel(codigo) {
  for (const g of GRADOS) {
    for (const nivel of mallaData[g].niveles) {
      if (nivel.ramos.some((r) => r.codigo === codigo)) return nivel;
    }
  }
  return null;
}

function obtenerGradoDeRamo(codigo) {
  return GRADOS.find((g) =>
    mallaData[g].niveles.some((n) => n.ramos.some((r) => r.codigo === codigo))
  ) || null;
}

function nombreRamo(codigo) {
  return buscarRamo(codigo)?.nombre || codigo;
}

function creditosNivel(nivel) {
  return nivel.ramos.reduce((acc, r) => acc + r.creditos, 0);
}

function etiquetaNivel(nivel) {
  return nivel.etiqueta || `Nivel ${nivel.numero}`;
}

// Los niveles se numeran de forma única en toda la carrera (1-10 y 11-13
// para la licenciatura), por lo que la búsqueda no es ambigua.
function nivelAprobado(numero) {
  for (const g of GRADOS) {
    const nivel = mallaData[g].niveles.find((n) => n.numero === numero);
    if (nivel) return nivel.ramos.every((r) => storage.estaCompletado(r.codigo));
  }
  return false;
}

function dependientesDe(codigo) {
  return todosLosRamos().filter((r) => (r.requisitos || []).includes(codigo));
}

// =============================================================
// 5. VALIDACIÓN DE REQUISITOS
// =============================================================
function requisitosPendientes(ramo) {
  const pendientes = [];

  (ramo.requisitos || []).forEach((req) => {
    if (!storage.estaCompletado(req)) {
      pendientes.push({ codigo: req, texto: `${req} — ${nombreRamo(req)}` });
    }
  });

  (ramo.requisitosNivel || []).forEach((num) => {
    if (!nivelAprobado(num)) {
      const nivel = GRADOS.map((g) => mallaData[g].niveles.find((n) => n.numero === num)).find(Boolean);
      const etiqueta = nivel ? etiquetaNivel(nivel) : `Nivel ${num}`;
      pendientes.push({ codigo: etiqueta, texto: `${etiqueta} completo` });
    }
  });

  return pendientes;
}

function estadoRamo(ramo) {
  if (storage.estaCompletado(ramo.codigo)) return 'completado';
  return requisitosPendientes(ramo).length === 0 ? 'disponible' : 'bloqueado';
}

function etiquetaEstado(estado) {
  return { completado: 'Aprobado', disponible: 'Disponible', bloqueado: 'Bloqueado' }[estado];
}

// =============================================================
// 6. ELECTIVOS: HELPERS
// =============================================================
function esElectivo(codigo) {
  return Object.prototype.hasOwnProperty.call(electivoOpciones, codigo);
}
function getOpcionesElectivo(codigo) {
  return electivoOpciones[codigo] || [];
}
function getSeleccionElectivo(codigo) {
  return localStorage.getItem(storage.key(`${codigo}:seleccion`)) || null;
}
function setSeleccionElectivo(codigo, opcionCodigo) {
  localStorage.setItem(storage.key(`${codigo}:seleccion`), opcionCodigo);
}
function getNombreOpcionElectivo(codigo) {
  const sel = getSeleccionElectivo(codigo);
  if (!sel) return null;
  return getOpcionesElectivo(codigo).find((o) => o.codigo === sel)?.nombre || null;
}
function getSeleccionElectivoDesdeUI(codigo) {
  return document.querySelector(`input[name="electivo-${codigo}"]:checked`)?.value || null;
}

// =============================================================
// 7. ESTADO DE LA VISTA
// =============================================================
let filtroActivo = 'all';
let ultimoFoco = null;

// =============================================================
// 8. RENDERIZADO
// =============================================================
function renderMalla() {
  const contenedor = document.querySelector('.malla-container');
  contenedor.innerHTML = '';

  GRADOS.forEach((tipo) => {
    if (filtroActivo === 'all' || filtroActivo === tipo) {
      contenedor.appendChild(renderGrado(mallaData[tipo], tipo));
    }
  });

  actualizarProgreso();
}

function renderGrado(gradoData, tipo) {
  const seccion = document.createElement('section');
  seccion.className = `grado-section grado-${tipo}`;

  const cursos = gradoData.niveles.flatMap((n) => n.ramos);
  const aprobados = cursos.filter((r) => storage.estaCompletado(r.codigo));
  const credAprob = aprobados.reduce((a, r) => a + r.creditos, 0);

  const encabezado = document.createElement('div');
  encabezado.className = 'grado-header';
  encabezado.innerHTML = `
    <div class="grado-titulo-wrap">
      <span class="grado-badge">${etiquetaNivel(gradoData.niveles[0])} a ${etiquetaNivel(gradoData.niveles[gradoData.niveles.length - 1])}</span>
      <h2 class="grado-title">${gradoData.titulo}</h2>
    </div>
    <div class="grado-stats">
      <span class="grado-chip">${credAprob} / ${gradoData.creditos} créditos</span>
      <span class="grado-chip">${aprobados.length} / ${cursos.length} cursos</span>
    </div>
  `;
  seccion.appendChild(encabezado);

  gradoData.niveles.forEach((nivel) => seccion.appendChild(renderNivel(nivel)));
  return seccion;
}

function renderNivel(nivel) {
  const el = document.createElement('div');
  el.className = 'nivel';

  const aprobadosNivel = nivel.ramos.filter((r) => storage.estaCompletado(r.codigo)).length;
  const completo = aprobadosNivel === nivel.ramos.length;

  el.innerHTML = `
    <div class="nivel-header">
      <h3 class="nivel-titulo">${etiquetaNivel(nivel)}</h3>
      <div class="nivel-meta">
        <span class="creditos">${creditosNivel(nivel)} créditos</span>
        <span class="nivel-avance${completo ? ' completo' : ''}">${aprobadosNivel}/${nivel.ramos.length}</span>
      </div>
    </div>
    <div class="ramos-container"></div>
  `;

  const cont = el.querySelector('.ramos-container');
  nivel.ramos.forEach((ramo) => cont.appendChild(renderRamo(ramo)));
  return el;
}

function renderRamo(ramo) {
  const estado = estadoRamo(ramo);
  const el = document.createElement('button');
  el.type = 'button';
  el.className = `ramo estado-${estado}`;
  el.dataset.codigo = ramo.codigo;
  el.setAttribute('aria-label', `${ramo.codigo} ${ramo.nombre}. Estado: ${etiquetaEstado(estado)}`);

  const reqNivel = (ramo.requisitosNivel || []).map((num) => {
    const n = GRADOS.map((g) => mallaData[g].niveles.find((x) => x.numero === num)).find(Boolean);
    return n ? etiquetaNivel(n) : `Nivel ${num}`;
  });
  const listaReq = [...reqNivel, ...(ramo.requisitos || [])];
  const correqs = ramo.correquisitos || [];

  const seleccion = esElectivo(ramo.codigo) ? getNombreOpcionElectivo(ramo.codigo) : null;

  el.innerHTML = `
    <div class="ramo-top">
      <span class="ramo-codigo">${ramo.codigo}</span>
      <span class="ramo-estado">${etiquetaEstado(estado)}</span>
    </div>
    <div class="ramo-nombre">${ramo.nombre}</div>
    <div class="ramo-info">
      <span class="ramo-creditos">${ramo.creditos} ${ramo.creditos === 1 ? 'crédito' : 'créditos'}</span>
    </div>
    ${listaReq.length ? `<div class="ramo-requisitos"><strong>Req:</strong> ${listaReq.join(', ')}</div>` : ''}
    ${correqs.length ? `<div class="ramo-correquisitos"><strong>Correq:</strong> ${correqs.join(', ')}</div>` : ''}
    ${esElectivo(ramo.codigo) ? `<div class="ramo-detalle">Opción: <strong>${seleccion || 'sin seleccionar'}</strong></div>` : ''}
  `;

  el.addEventListener('click', () => abrirModal(ramo.codigo));
  return el;
}

// =============================================================
// 9. MODAL
// =============================================================
function abrirModal(codigo, avisoPrevio = null) {
  const ramo = buscarRamo(codigo);
  if (!ramo) return;

  const modal = document.getElementById('ramo-modal');
  if (!modal.classList.contains('abierto')) ultimoFoco = document.activeElement;

  const estado = estadoRamo(ramo);
  const grado = obtenerGradoDeRamo(codigo);
  const nivel = buscarNivel(codigo);

  const $cod = document.getElementById('modal-codigo');
  const $title = document.getElementById('modal-title');
  const $credit = document.getElementById('modal-creditos');
  const $desc = document.getElementById('modal-descripcion');

  const nombreGrado = { diplomado: 'Diplomado', bachillerato: 'Bachillerato', licenciatura: 'Licenciatura' }[grado];

  $cod.textContent = ramo.codigo;
  $title.textContent = ramo.nombre;
  $credit.textContent = `${ramo.creditos} ${ramo.creditos === 1 ? 'crédito' : 'créditos'}`;
  document.getElementById('modal-nivel').textContent = `${etiquetaNivel(nivel)} · ${nombreGrado}`;
  $desc.textContent = descripcionesCursos[codigo] || 'Descripción no disponible.';

  // --- Requisitos ---
  const $req = document.getElementById('modal-prerrequisitos');
  $req.innerHTML = '';

  const items = [
    ...(ramo.requisitosNivel || []).map((num) => {
      const n = GRADOS.map((g) => mallaData[g].niveles.find((x) => x.numero === num)).find(Boolean);
      return { etiqueta: `${n ? etiquetaNivel(n) : `Nivel ${num}`} completo`, ok: nivelAprobado(num) };
    }),
    ...(ramo.requisitos || []).map((c) => ({ etiqueta: `${c} — ${nombreRamo(c)}`, ok: storage.estaCompletado(c) }))
  ];

  if (items.length === 0) {
    $req.innerHTML = '<div class="prerrequisito-chip neutro">No tiene requisitos</div>';
  } else {
    items.forEach((it) => {
      const chip = document.createElement('div');
      chip.className = `prerrequisito-chip ${it.ok ? 'cumplido' : 'pendiente'}`;
      chip.textContent = `${it.ok ? '✓' : '○'} ${it.etiqueta}`;
      $req.appendChild(chip);
    });
  }

  llenarSeccionChips(
    'modal-correquisitos-section',
    'modal-correquisitos',
    (ramo.correquisitos || []).map((c) => `${c} — ${nombreRamo(c)}`)
  );

  llenarSeccionChips(
    'modal-desbloquea-section',
    'modal-desbloquea',
    dependientesDe(codigo).map((d) => `${d.codigo} — ${d.nombre}`)
  );

  // --- Electivos ---
  const $elecSection = document.getElementById('modal-electivo-section');
  const $elecOpciones = document.getElementById('modal-electivo-opciones');
  $elecOpciones.innerHTML = '';

  if (esElectivo(codigo)) {
    $elecSection.hidden = false;
    const opciones = getOpcionesElectivo(codigo);
    const seleccionActual = getSeleccionElectivo(codigo);

    // Si ya hay una opción elegida, el modal muestra sus datos.
    const aplicarOpcion = (op) => {
      $cod.textContent = op.codigo;
      $title.textContent = op.nombre;
      $credit.textContent = `${op.creditos} créditos`;
      $desc.textContent = descripcionesCursos[op.codigo] || 'Descripción no disponible.';
    };

    const opSel = opciones.find((o) => o.codigo === seleccionActual);
    if (opSel) aplicarOpcion(opSel);

    opciones.forEach((op) => {
      const label = document.createElement('label');
      label.className = 'electivo-opcion';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `electivo-${codigo}`;
      radio.value = op.codigo;
      radio.checked = seleccionActual === op.codigo;
      radio.addEventListener('change', () => aplicarOpcion(op));

      const span = document.createElement('span');
      span.textContent = `${op.codigo} — ${op.nombre} (${op.creditos} cr.)`;

      label.append(radio, span);
      $elecOpciones.appendChild(label);
    });
  } else {
    $elecSection.hidden = true;
  }

  // --- Aviso ---
  const $aviso = document.getElementById('modal-aviso');
  if (avisoPrevio) {
    $aviso.hidden = false;
    $aviso.className = `modal-aviso ${avisoPrevio.tipo}`;
    $aviso.textContent = avisoPrevio.texto;
  } else {
    $aviso.hidden = true;
    $aviso.textContent = '';
  }

  // --- Botón ---
  const btn = document.getElementById('completado-btn');
  btn.classList.toggle('pendiente', estado === 'completado');
  btn.disabled = estado === 'bloqueado';
  btn.textContent =
    estado === 'completado' ? 'Marcar como pendiente'
      : estado === 'disponible' ? 'Marcar como aprobado'
        : 'Requisitos pendientes';
  btn.onclick = () => alternarCompletado(ramo);

  modal.classList.add('abierto');
  document.body.classList.add('sin-scroll');
  document.querySelector('.close-modal').focus();
}

function llenarSeccionChips(idSeccion, idLista, textos) {
  const seccion = document.getElementById(idSeccion);
  const lista = document.getElementById(idLista);
  lista.innerHTML = '';
  if (!textos.length) {
    seccion.hidden = true;
    return;
  }
  seccion.hidden = false;
  textos.forEach((t) => {
    const chip = document.createElement('div');
    chip.className = 'prerrequisito-chip neutro';
    chip.textContent = t;
    lista.appendChild(chip);
  });
}

function cerrarModal() {
  document.getElementById('ramo-modal').classList.remove('abierto');
  document.body.classList.remove('sin-scroll');
  if (ultimoFoco && typeof ultimoFoco.focus === 'function') ultimoFoco.focus();
}

function alternarCompletado(ramo) {
  const $aviso = document.getElementById('modal-aviso');

  // Desaprobar nunca se bloquea, pero arrastra los cursos que dependían de este.
  if (storage.estaCompletado(ramo.codigo)) {
    const arrastrados = quitarEnCascada(ramo.codigo);
    renderMalla();
    if (arrastrados.length) {
      abrirModal(ramo.codigo, {
        tipo: 'info',
        texto: `También quedaron pendientes los cursos que dependían de este: ${arrastrados.join(', ')}.`
      });
      return;
    }
    cerrarModal();
    return;
  }

  // Un electivo exige elegir su opción antes de aprobarse.
  if (esElectivo(ramo.codigo)) {
    const seleccion = getSeleccionElectivoDesdeUI(ramo.codigo);
    if (!seleccion) {
      $aviso.hidden = false;
      $aviso.className = 'modal-aviso error';
      $aviso.textContent = 'Seleccione una opción del electivo antes de continuar.';
      return;
    }
    setSeleccionElectivo(ramo.codigo, seleccion);
  }

  const pendientes = requisitosPendientes(ramo);
  if (pendientes.length) {
    $aviso.hidden = false;
    $aviso.className = 'modal-aviso error';
    $aviso.textContent = `Requisitos pendientes: ${pendientes.map((p) => p.codigo).join(', ')}.`;
    return;
  }

  storage.completar(ramo.codigo);
  renderMalla();
  cerrarModal();
}

function quitarEnCascada(codigo) {
  storage.quitar(codigo);
  const afectados = [];
  let cambio = true;

  while (cambio) {
    cambio = false;
    todosLosRamos().forEach((r) => {
      if (!storage.estaCompletado(r.codigo)) return;
      if (requisitosPendientes(r).length > 0) {
        storage.quitar(r.codigo);
        afectados.push(r.codigo);
        cambio = true;
      }
    });
  }
  return afectados;
}

// =============================================================
// 10. PROGRESO
// =============================================================
function actualizarProgreso() {
  const cursos = todosLosRamos();
  const aprobados = cursos.filter((r) => storage.estaCompletado(r.codigo));

  const totalCreditos = cursos.reduce((a, r) => a + r.creditos, 0);
  const creditosAprob = aprobados.reduce((a, r) => a + r.creditos, 0);
  const porcentaje = totalCreditos > 0 ? (creditosAprob / totalCreditos) * 100 : 0;

  document.getElementById('progress-fill').style.width = `${porcentaje}%`;
  document.getElementById('progress-porcentaje').textContent = `${Math.round(porcentaje)}%`;
  document.getElementById('stat-cursos').textContent = `${aprobados.length} / ${cursos.length}`;
  document.getElementById('stat-creditos').textContent = `${creditosAprob} / ${totalCreditos}`;
  document.getElementById('stat-disponibles').textContent =
    cursos.filter((r) => estadoRamo(r) === 'disponible').length;

  document.querySelector('.progress-bar').setAttribute('aria-valuenow', Math.round(porcentaje));
}

// =============================================================
// 11. MIGRACIÓN DE PROGRESO ANTERIOR
// Las versiones previas guardaban con la clave desnuda ("ME-005"), lo que
// colisionaba con otras mallas del mismo dominio. Se migra una sola vez.
// =============================================================
function migrarProgresoAntiguo() {
  if (localStorage.getItem(`${STORAGE_PREFIX}__migrado`)) return;

  todosLosRamos().forEach((r) => {
    if (localStorage.getItem(r.codigo) === 'completado') {
      storage.completar(r.codigo);
      localStorage.removeItem(r.codigo);
    }
  });

  Object.keys(electivoOpciones).forEach((c) => {
    const anterior = localStorage.getItem(`${c}:selected`);
    if (anterior) {
      setSeleccionElectivo(c, anterior);
      localStorage.removeItem(`${c}:selected`);
    }
  });

  localStorage.setItem(`${STORAGE_PREFIX}__migrado`, '1');
}

// =============================================================
// 12. EVENTOS
// =============================================================
document.addEventListener('DOMContentLoaded', () => {
  migrarProgresoAntiguo();
  renderMalla();

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      filtroActivo = btn.dataset.filter;
      renderMalla();
    });
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('¿Borrar todo el avance registrado en esta malla?')) {
      storage.limpiarTodo();
      renderMalla();
    }
  });

  document.querySelector('.close-modal').addEventListener('click', cerrarModal);

  document.getElementById('ramo-modal').addEventListener('click', (e) => {
    if (e.target.id === 'ramo-modal') cerrarModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('ramo-modal').classList.contains('abierto')) {
      cerrarModal();
    }
  });
});
