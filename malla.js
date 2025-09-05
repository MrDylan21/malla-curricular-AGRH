// ========================
// 1. DATOS DE LA MALLA
// ========================
const electivoOpciones = {
  "AGRHEL-I": [
    { codigo: "AGRHEL-916", nombre: "Tecnologías Emergentes Aplicadas en la Gestión del Talento Humano", creditos: 3 },
    { codigo: "AGRHEL-917", nombre: "Incentivos y Beneficios", creditos: 3 },
    { codigo: "AGRHEL-918", nombre: "Técnicas y Herramientas de Mejora Continua", creditos: 3 },
    { codigo: "AGRHEL-919", nombre: "Nuevas Formas de Contratación", creditos: 3 }
  ],
  "AGRHEL-II": [
    { codigo: "AGRHEL-1014", nombre: "Comunicación y Protocolo Organizacional", creditos: 3 },
    { codigo: "AGRHEL-1015", nombre: "Técnicas para el Manejo de Descargas Emocionales", creditos: 3 },
    { codigo: "AGRHEL-1016", nombre: "Manejo de Factores Psicosociales en la Gestión del Talento Humano", creditos: 3 }
  ]
};

const mallaData = {
  diplomado: {
    titulo: "Diplomado en Administración de Recursos Humanos",
    creditos: 83,
    niveles: [
      {
        numero: 1,
        creditos: 11,
        ramos: [
          { codigo: "ADC-002", nombre: "Principios de Administración", creditos: 3, requisitos: [] },
          { codigo: "AGRH-114", nombre: "Métodos de Investigación", creditos: 3, requisitos: [] },
          { codigo: "CB-007", nombre: "Recursos Informáticos", creditos: 2, requisitos: [] },
          { codigo: "IDCAD01", nombre: "Inglés I", creditos: 0, requisitos: [] },
          { codigo: "ME-001", nombre: "Matemática General", creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 2,
        creditos: 12,
        ramos: [
          { codigo: "ADC-001", nombre: "Contabilidad Básica", creditos: 3, requisitos: [] },
          { codigo: "AGRH-211", nombre: "Introducción a la Sociología de las Organizaciones", creditos: 3, requisitos: ["AGRH-114"] },
          { codigo: "AGRH-214", nombre: "Comunicación Administrativa", creditos: 3, requisitos: ["AGRH-114"] },
          { codigo: "AGRH-215", nombre: "Psicología I", creditos: 3, requisitos: [] },
          { codigo: "AGRH-312", nombre: "Fundamentos de Mercadeo", creditos: 3, requisitos: ["ADC-002", "AGRH-114"] },
          { codigo: "IDCAD02", nombre: "Inglés II", creditos: 0, requisitos: ["IDCAD01"] }
        ]
      },
      {
        numero: 3,
        creditos: 12,
        ramos: [
          { codigo: "AGRH-212", nombre: "Economía I", creditos: 3, requisitos: ["ME-001"] },
          { codigo: "AGRH-314", nombre: "Derecho Laboral I", creditos: 3, requisitos: ["AGRH-114"] },
          { codigo: "AGRH-315", nombre: "Psicología II", creditos: 3, requisitos: [] },
          { codigo: "AGRH-411", nombre: "Introducción a la Administración de Recursos Humanos", creditos: 3, requisitos: ["ADC-002"] },
          { codigo: "AGRH-414", nombre: "Presupuesto", creditos: 3, requisitos: ["ADC-001"] },
          { codigo: "IDCAD03", nombre: "Inglés III", creditos: 0, requisitos: ["IDCAD02"] }
        ]
      },
      {
        numero: 4,
        creditos: 15,
        ramos: [
          { codigo: "AGRH-412", nombre: "Introducción a la Salud Ocupacional", creditos: 3, requisitos: [] },
          { codigo: "AGRH-415", nombre: "Derecho Laboral II", creditos: 3, requisitos: ["AGRH-314"] },
          // Nota: el plan oficial tiene un ciclo 416<->712. Se rompe la circularidad tomando 416 -> CB-007 y 712 -> 416.
          { codigo: "AGRH-416", nombre: "Tablas Dinámicas", creditos: 3, requisitos: ["CB-007"] },
          { codigo: "AGRH-712", nombre: "Normas y Estándares de Calidad", creditos: 3, requisitos: ["AGRH-416"] },
          { codigo: "AGRH-812", nombre: "Economía II", creditos: 3, requisitos: ["AGRH-212"] },
          { codigo: "IDCAD04", nombre: "Inglés IV", creditos: 0, requisitos: ["IDCAD03"] }
        ]
      },
      {
        numero: 5,
        creditos: 14,
        ramos: [
          // Nota: el plan tiene un ciclo 512<->612. Se ignora la reciprocidad al validar (ver puedeCompletar()).
          { codigo: "AGRH-512", nombre: "Clasificación de Puestos", creditos: 4, requisitos: ["AGRH-411", "AGRH-415", "AGRH-612"] },
          { codigo: "AGRH-612", nombre: "Reclutamiento y Selección", creditos: 4, requisitos: ["AGRH-411", "AGRH-415", "AGRH-512"] },
          { codigo: "AGRH-614", nombre: "Administración de Remuneraciones", creditos: 3, requisitos: ["AGRH-414", "AGRH-415"] },
          { codigo: "IDCAD05", nombre: "Inglés V", creditos: 0, requisitos: ["IDCAD04"] },
          { codigo: "ME-005", nombre: "Estadística Descriptiva", creditos: 3, requisitos: ["ME-001"] }
        ]
      },
      {
        numero: 6,
        creditos: 10,
        ramos: [
          { codigo: "AGRH-514", nombre: "Capacitación y Desarrollo", creditos: 4, requisitos: ["AGRH-512", "AGRH-611", "AGRH-612"] },
          { codigo: "AGRH-611", nombre: "Valoración de Puestos", creditos: 4, requisitos: ["AGRH-512", "AGRH-514"] },
          { codigo: "AGRH-613", nombre: "Seminario Integrado de RRHH", creditos: 2, requisitos: ["AGRH-512", "AGRH-612", "AGRH-614", "ME-005"] },
          { codigo: "AGRH-711", nombre: "Estadística Inferencial", creditos: 3, requisitos: ["ME-005"] },
          { codigo: "IDCAD06", nombre: "Inglés VI", creditos: 0, requisitos: ["IDCAD05"] }
        ]
      }
    ]
  },
  bachillerato: {
    titulo: "Bachillerato en Administración y Gestión de Recursos Humanos",
    creditos: 59,
    niveles: [
      {
        numero: 7,
        creditos: 13,
        ramos: [
          { codigo: "AC-100", nombre: "Actividad Cultural", creditos: 1, requisitos: [] },
          { codigo: "AGRH-713", nombre: "Cultura y Clima Organizacional", creditos: 3, requisitos: ["AGRH-612"] },
          { codigo: "AGRH-811", nombre: "Contabilidad de Costos", creditos: 3, requisitos: ["AGRH-912"] },
          { codigo: "AGRH-912", nombre: "Matemática Financiera", creditos: 3, requisitos: ["AGRH-811"] },
          { codigo: "AGRH-913", nombre: "Administración de la Producción", creditos: 3, requisitos: ["AGRH-711", "AGRH-712"] },
          { codigo: "FH-100", nombre: "Filosofía y Pensamiento", creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 8,
        creditos: 9,
        ramos: [
          { codigo: "AD-100", nombre: "Actividad Deportiva", creditos: 0, requisitos: [] },
          { codigo: "AGRH-813", nombre: "Investigación de Operaciones", creditos: 3, requisitos: ["AGRH-913"] },
          { codigo: "AGRH-911", nombre: "Planificación de RRHH", creditos: 3, requisitos: ["AGRH-913", "AGRH-914"] },
          { codigo: "AGRH-914", nombre: "Auditoría de RRHH", creditos: 3, requisitos: ["AGRH-811", "AGRH-911", "AGRH-912"] },
          { codigo: "FH-200", nombre: "Literatura y Comunicación", creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 9,
        creditos: 15,
        ramos: [
          { codigo: "AGRH-1012", nombre: "Gestión por Competencias", creditos: 3, requisitos: ["AGRH-915"] },
          { codigo: "AGRH-511", nombre: "Análisis Administrativo", creditos: 4, requisitos: ["AGRH-914", "AGRH-915"] },
          { codigo: "AGRH-915", nombre: "Evaluación del Desempeño", creditos: 2, requisitos: ["AGRH-511", "AGRH-911"] },
          { codigo: "AGRHEL-I", nombre: "Electivo I (seleccionable)", creditos: 3, requisitos: ["AGRH-911"] },
          { codigo: "FH-300", nombre: "Historia de la Cultura", creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 10,
        creditos: 16,
        ramos: [
          { codigo: "AGRH-1011", nombre: "Gerencia de RRHH", creditos: 3, requisitos: ["AGRH-711", "AGRH-911"] },
          { codigo: "AGRH-1013", nombre: "Práctica Profesional", creditos: 7, requisitos: ["AGRH-1011", "AGRH-1012", "AGRH-511", "AGRH-915", "AGRHEL-I", "AGRHEL-II", "FH-300", "FH-400"] },
          { codigo: "AGRHEL-II", nombre: "Electivo II (seleccionable)", creditos: 3, requisitos: ["AGRHEL-I"] },
          { codigo: "FH-400", nombre: "Realidad Nacional", creditos: 3, requisitos: [] }
        ]
      }
    ]
  },
  licenciatura: {
    titulo: "Licenciatura en Administración y Gestión de Recursos Humanos",
    creditos: 36,
    niveles: [
      {
        numero: 1,
        creditos: 12,
        ramos: [
          { codigo: "AGRH-0111", nombre: "Administración Financiera", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0112", nombre: "Psicología Laboral e Industrial Aplicada", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0113", nombre: "Innovación y Emprendedurismo", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0114", nombre: "Sistemas de Información Empresarial", creditos: 3, requisitos: [] }
        ]
      },
      {
        numero: 2,
        creditos: 13,
        ramos: [
          { codigo: "AGRH-0211", nombre: "Formulación y Evaluación de Proyectos", creditos: 4, requisitos: [] },
          { codigo: "AGRH-0212", nombre: "Técnicas de Negociación y Solución de Conflictos", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0213", nombre: "Seminario Empresarial por Competencias", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0214", nombre: "Taller de Investigación", creditos: 3, requisitos: ["AGRH-0111", "AGRH-0112", "AGRH-0113", "AGRH-0114"] }
        ]
      },
      {
        numero: 3,
        creditos: 11,
        ramos: [
          { codigo: "AGRH-0311", nombre: "Gestión del Cambio", creditos: 4, requisitos: [] },
          { codigo: "AGRH-0312", nombre: "Estructuras Salariales", creditos: 4, requisitos: [] },
          { codigo: "AGRH-0313", nombre: "Ética Profesional", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0314", nombre: "Investigación Dirigida", creditos: 0, requisitos: ["Niveles 1 y 2 aprobados", "AGRH-0311", "AGRH-0312", "AGRH-0313"] }
        ]
      }
    ]
  }
};

// ========================
// 2. RENDERIZADO
// ========================
function renderMalla(grado = 'all') {
  const mallaContainer = document.querySelector('.malla-container');
  mallaContainer.innerHTML = '';

  if (grado === 'all' || grado === 'diplomado') renderGrado(mallaData.diplomado, 'diplomado');
  if (grado === 'all' || grado === 'bachillerato') renderGrado(mallaData.bachillerato, 'bachillerato');
  if (grado === 'all' || grado === 'licenciatura') renderGrado(mallaData.licenciatura, 'licenciatura');

  updateProgressBar();
}

function renderGrado(gradoData, tipo) {
  const mallaContainer = document.querySelector('.malla-container');
  const gradoSection = document.createElement('div');
  gradoSection.className = 'grado-section';

  gradoSection.innerHTML = `
    <h2 class="grado-title">${gradoData.titulo}</h2>
    <p class="grado-info">Total de créditos: ${gradoData.creditos}</p>
  `;
  mallaContainer.appendChild(gradoSection);

  gradoData.niveles.forEach(nivel => {
    const nivelElement = document.createElement('div');
    nivelElement.className = `nivel ${tipo}`;

    nivelElement.innerHTML = `
      <div class="nivel-header">
        <h2 class="nivel-titulo">Nivel ${nivel.numero} - ${tipo}</h2>
        <div class="creditos">${nivel.creditos} créditos</div>
      </div>
      <div class="ramos-container"></div>
    `;

    const ramosContainer = nivelElement.querySelector('.ramos-container');

    nivel.ramos.forEach(ramo => {
      const ramoElement = document.createElement('div');
      ramoElement.className = 'ramo';
      ramoElement.dataset.codigo = ramo.codigo;

      if (localStorage.getItem(ramo.codigo) === 'completado') {
        ramoElement.classList.add('completado');
        ramoElement.style.background = 'linear-gradient(135deg, #e8f5e9, #c8e6c9)';
        ramoElement.style.borderLeftColor = '#4caf50';
      }

      const extraDetalle = esElectivo(ramo.codigo)
        ? `<div class="ramo-detalle">Opción: <strong>${getNombreOpcionElectivo(ramo.codigo) || "sin selección"}</strong></div>`
        : '';

      ramoElement.innerHTML = `
        <div class="ramo-codigo">${ramo.codigo}</div>
        <div class="ramo-nombre">${ramo.nombre}</div>
        <div class="ramo-info">
          <div class="ramo-creditos">${ramo.creditos} créditos</div>
        </div>
        ${ramo.requisitos.length > 0 ? `<div class="ramo-requisitos">Req: <span>${ramo.requisitos.join(', ')}</span></div>` : ''}
        ${extraDetalle}
      `;

      ramoElement.addEventListener('click', () => abrirModal(ramo.codigo));
      ramosContainer.appendChild(ramoElement);
    });

    mallaContainer.appendChild(nivelElement);
  });
}

// ========================
 // 3. MODAL Y VALIDACIONES
// ========================
function abrirModal(codigo) {
  let ramoInfo = buscarRamo(codigo);
  if (!ramoInfo) return;

  document.getElementById('modal-codigo').textContent = ramoInfo.codigo;
  document.getElementById('modal-title').textContent = ramoInfo.nombre;
  document.getElementById('modal-creditos').textContent = `${ramoInfo.creditos} créditos`;

  const requisitosContainer = document.getElementById('modal-prerrequisitos');
  requisitosContainer.innerHTML = '';

  if (ramoInfo.requisitos.length > 0) {
    ramoInfo.requisitos.forEach(req => {
      const chip = document.createElement('div');
      chip.className = 'prerrequisito-chip';
      chip.textContent = req;
      requisitosContainer.appendChild(chip);
    });
  } else {
    requisitosContainer.innerHTML = '<div class="prerrequisito-chip">No tiene requisitos</div>';
  }

  // Bloque dinámico para electivos
  let electivoContainer = document.getElementById('modal-electivo-opciones');
  if (!electivoContainer) {
    electivoContainer = document.createElement('div');
    electivoContainer.id = 'modal-electivo-opciones';
    electivoContainer.style.marginTop = '12px';
    requisitosContainer.parentElement.appendChild(electivoContainer);
  }
  electivoContainer.innerHTML = '';

  if (esElectivo(codigo)) {
    const opciones = getOpcionesElectivo(codigo);
    const seleccionActual = getSeleccionElectivo(codigo);
    const titulo = document.createElement('div');
    titulo.className = 'electivo-titulo';
    titulo.textContent = 'Seleccione una opción del electivo:';
    electivoContainer.appendChild(titulo);

    opciones.forEach(op => {
      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.gap = '8px';
      label.style.margin = '6px 0';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `electivo-${codigo}`;
      radio.value = op.codigo;
      radio.checked = seleccionActual === op.codigo;

      const span = document.createElement('span');
      span.textContent = `${op.codigo} — ${op.nombre} (${op.creditos} cr.)`;

      label.appendChild(radio);
      label.appendChild(span);
      electivoContainer.appendChild(label);
    });
  }

  const btn = document.getElementById('completado-btn');
  if (localStorage.getItem(codigo) === 'completado') {
    btn.textContent = 'Marcar como pendiente';
    btn.style.backgroundColor = '#f44336';
  } else {
    btn.textContent = 'Marcar como completado';
    btn.style.backgroundColor = '';
  }

  btn.onclick = function () {
    const tipoGrado = obtenerGradoDeRamo(ramoInfo.codigo);

    // Si es electivo, exigir selección
    if (esElectivo(ramoInfo.codigo)) {
      const seleccion = getSeleccionElectivoDesdeUI(ramoInfo.codigo);
      if (!seleccion) {
        alert('Selecciona una opción del electivo antes de continuar.');
        return;
      }
      setSeleccionElectivo(ramoInfo.codigo, seleccion);
    }

    if (puedeCompletar(ramoInfo, tipoGrado)) {
      if (localStorage.getItem(codigo) === 'completado') {
        localStorage.removeItem(codigo);
      } else {
        localStorage.setItem(codigo, 'completado');
      }
      renderMalla(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
      updateProgressBar();
      document.getElementById('ramo-modal').style.display = 'none';
    }
  };

  document.getElementById('ramo-modal').style.display = 'flex';
}

function puedeCompletar(ramo, tipoGrado) {
  const pendientes = ramo.requisitos.filter(req => {
    // Caso especial: "Niveles 1 y 2 aprobados"
    if (req.includes("Niveles")) {
      if (req.includes("1 y 2")) {
        const nivel1Ok = contarAprobadosHastaNivel(mallaData.licenciatura, 1) === contarCursosHastaNivel(mallaData.licenciatura, 1);
        const nivel2Ok = contarAprobadosHastaNivel(mallaData.licenciatura, 2) === contarCursosHastaNivel(mallaData.licenciatura, 2);
        return !(nivel1Ok && nivel2Ok);
      }
      return true; // cualquier otra redacción no contemplada
    }

    // Ignorar requisitos circulares (si A requiere B y B requiere A)
    const reqRamo = buscarRamo(req);
    if (reqRamo && reqRamo.requisitos?.includes(ramo.codigo)) {
      return false; // no bloquear por reciprocidad
    }

    return localStorage.getItem(req) !== 'completado';
  });

  if (pendientes.length > 0) {
    alert("⚠️ Requisitos pendientes: " + pendientes.join(", "));
    return false;
  }

  // Reglas de avance por grado
  if (tipoGrado === "bachillerato") {
    const totalDiplo = contarCursos(mallaData.diplomado);
    const aprobadosDiplo = contarAprobados(mallaData.diplomado);
    if (totalDiplo - aprobadosDiplo > 3) {
      alert("Debes completar el Diplomado o tener máximo 3 cursos pendientes para avanzar al Bachillerato.");
      return false;
    }
  }
  if (tipoGrado === "licenciatura") {
    const totalBachi = contarCursos(mallaData.bachillerato);
    const aprobadosBachi = contarAprobados(mallaData.bachillerato);
    if (totalBachi !== aprobadosBachi) {
      alert("Debes completar el Bachillerato para avanzar a la Licenciatura.");
      return false;
    }
  }
  return true;
}

// ========================
// 3.1 Utilidades de búsqueda y conteo
// ========================
function buscarRamo(codigo, tipo = null) {
  const grados = tipo ? { [tipo]: mallaData[tipo] } : mallaData;
  for (const grado of Object.values(grados)) {
    for (const nivel of grado.niveles) {
      const ramo = nivel.ramos.find(r => r.codigo === codigo);
      if (ramo) return ramo;
    }
  }
  return null;
}

function obtenerGradoDeRamo(codigo) {
  if (buscarRamo(codigo, "diplomado")) return "diplomado";
  if (buscarRamo(codigo, "bachillerato")) return "bachillerato";
  if (buscarRamo(codigo, "licenciatura")) return "licenciatura";
  return null;
}

function contarCursos(grado) {
  return grado.niveles.reduce((acc, nivel) => acc + nivel.ramos.length, 0);
}
function contarAprobados(grado) {
  return grado.niveles.reduce((acc, nivel) => acc + nivel.ramos.filter(r => localStorage.getItem(r.codigo) === 'completado').length, 0);
}
function contarCursosHastaNivel(grado, numNivel) {
  return grado.niveles.filter(n => n.numero <= numNivel).reduce((acc, nivel) => acc + nivel.ramos.length, 0);
}
function contarAprobadosHastaNivel(grado, numNivel) {
  return grado.niveles.filter(n => n.numero <= numNivel).reduce((acc, nivel) => acc + nivel.ramos.filter(r => localStorage.getItem(r.codigo) === 'completado').length, 0);
}

// ========================
// 3.2 Electivos: helpers
// ========================
function esElectivo(codigo) {
  return codigo === "AGRHEL-I" || codigo === "AGRHEL-II";
}
function getOpcionesElectivo(codigo) {
  return electivoOpciones[codigo] || [];
}
function getSeleccionElectivo(codigo) {
  return localStorage.getItem(`${codigo}:selected`) || null;
}
function setSeleccionElectivo(codigo, opcionCodigo) {
  localStorage.setItem(`${codigo}:selected`, opcionCodigo);
}
function getNombreOpcionElectivo(codigo) {
  const sel = getSeleccionElectivo(codigo);
  if (!sel) return null;
  const op = getOpcionesElectivo(codigo).find(o => o.codigo === sel);
  return op?.nombre || null;
}
function getSeleccionElectivoDesdeUI(codigo) {
  const radios = document.querySelectorAll(`input[name="electivo-${codigo}"]`);
  for (const r of radios) if (r.checked) return r.value;
  return null;
}

// ========================
// 4. PROGRESO Y EVENTOS
// ========================
function updateProgressBar() {
  let total = 0, completados = 0;
  for (const grado of Object.values(mallaData)) {
    for (const nivel of grado.niveles) {
      nivel.ramos.forEach(ramo => {
        total++;
        if (localStorage.getItem(ramo.codigo) === 'completado') completados++;
      });
    }
  }
  const porcentaje = total > 0 ? (completados / total) * 100 : 0;
  const bar = document.getElementById('progress-fill');
  if (bar) bar.style.width = `${porcentaje}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderMalla();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderMalla(this.dataset.filter);
    });
  });

  document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('ramo-modal').style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === document.getElementById('ramo-modal')) {
      document.getElementById('ramo-modal').style.display = 'none';
    }
  });
});
