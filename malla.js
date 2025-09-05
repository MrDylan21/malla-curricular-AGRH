// ==== Datos de la malla curricular (versión reducida) ====
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
      }
    ]
  },
  bachillerato: {
    titulo: "Bachillerato en Administración y Gestión de RRHH",
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
          { codigo: "FH-100", nombre: "Formación Humanística: Filosofía y Pensamiento", creditos: 3, requisitos: [] }
        ]
      }
    ]
  }
};

// ==== Descripciones automáticas por área ====
function getDescripcion(nombre) {
  if (nombre.toLowerCase().includes("contabilidad")) return "Curso orientado al análisis de registros contables y costos en organizaciones.";
  if (nombre.toLowerCase().includes("psicología")) return "Estudia los fundamentos del comportamiento humano aplicado al entorno laboral.";
  if (nombre.toLowerCase().includes("administración")) return "Introduce al estudiante en los principios y prácticas de la gestión administrativa.";
  if (nombre.toLowerCase().includes("mercadeo")) return "Expone las bases del mercadeo moderno y su relación con los recursos humanos.";
  if (nombre.toLowerCase().includes("sociología")) return "Analiza las dinámicas sociales dentro de las organizaciones.";
  return "Este curso forma parte del plan de estudios en Administración y Gestión de RRHH.";
}

// ==== Renderizado principal ====
function renderMalla(grado = 'all') {
  const mallaContainer = document.querySelector('.malla-container');
  mallaContainer.innerHTML = '';

  if (grado === 'all' || grado === 'diplomado') renderGrado(mallaData.diplomado, 'diplomado');
  if (grado === 'all' || grado === 'bachillerato') renderGrado(mallaData.bachillerato, 'bachillerato');

  document.querySelectorAll('.ramo').forEach(ramo => {
    ramo.addEventListener('click', function() {
      const codigo = this.querySelector('.ramo-codigo').textContent;
      abrirModal(codigo);
    });
  });

  updateProgressBar();
}

function renderGrado(gradoData, tipo) {
  const mallaContainer = document.querySelector('.malla-container');
  const gradoSection = document.createElement('div');
  gradoSection.className = 'grado-section';
  gradoSection.innerHTML = `<h2 class="grado-title">${gradoData.titulo}</h2><p class="grado-info">Total créditos: ${gradoData.creditos}</p>`;
  mallaContainer.appendChild(gradoSection);

  gradoData.niveles.forEach(nivel => {
    const nivelElement = document.createElement('div');
    nivelElement.className = `nivel ${tipo}`;
    nivelElement.innerHTML = `
      <div class="nivel-header">
        <h2 class="nivel-titulo">Nivel ${nivel.numero}</h2>
        <div class="creditos">${nivel.creditos} créditos</div>
      </div>
      <div class="ramos-container"></div>`;
    const ramosContainer = nivelElement.querySelector('.ramos-container');

    nivel.ramos.forEach(ramo => {
      const ramoElement = document.createElement('div');
      ramoElement.className = 'ramo';
      ramoElement.dataset.codigo = ramo.codigo;

      if (localStorage.getItem(ramo.codigo) === 'completado') {
        ramoElement.style.background = 'linear-gradient(135deg, #e8f5e9, #c8e6c9)';
        ramoElement.style.borderLeftColor = '#27AE60';
      }

      let requisitosText = ramo.requisitos.length > 0 ? `<div class="ramo-requisitos">Req: <span>${ramo.requisitos.join(', ')}</span></div>` : '';

      ramoElement.innerHTML = `
        <div class="ramo-codigo">${ramo.codigo}</div>
        <div class="ramo-nombre">${ramo.nombre}</div>
        <div class="ramo-creditos">${ramo.creditos} créditos</div>
        ${requisitosText}`;
      ramosContainer.appendChild(ramoElement);
    });
    mallaContainer.appendChild(nivelElement);
  });
}

// ==== Modal y validación ====
function abrirModal(codigo) {
  let ramoInfo = null, tipoGrado = '';
  for (const [grado, data] of Object.entries(mallaData)) {
    for (const nivel of data.niveles) {
      const ramo = nivel.ramos.find(r => r.codigo === codigo);
      if (ramo) { ramoInfo = ramo; tipoGrado = grado; break; }
    }
  }

  if (!ramoInfo) return;

  document.getElementById('modal-codigo').textContent = ramoInfo.codigo;
  document.getElementById('modal-title').textContent = ramoInfo.nombre;
  document.getElementById('modal-creditos').textContent = `${ramoInfo.creditos} créditos`;
  document.getElementById('modal-nivel').textContent = tipoGrado.charAt(0).toUpperCase() + tipoGrado.slice(1);
  document.getElementById('modal-descripcion').textContent = getDescripcion(ramoInfo.nombre);

  const requisitosContainer = document.getElementById('modal-prerrequisitos');
  requisitosContainer.innerHTML = '';
  if (ramoInfo.requisitos.length > 0) {
    ramoInfo.requisitos.forEach(req => {
      const chip = document.createElement('div');
      chip.className = 'prerrequisito-chip';
      chip.textContent = req;
      requisitosContainer.appendChild(chip);
    });
  } else requisitosContainer.innerHTML = '<div class="prerrequisito-chip">No tiene requisitos</div>';

  const completadoBtn = document.getElementById('completado-btn');
  completadoBtn.textContent = localStorage.getItem(codigo) === 'completado' ? 'Marcar como pendiente' : 'Marcar como completado';

  completadoBtn.onclick = function() {
    if (!puedeCompletar(ramoInfo, tipoGrado)) return;

    if (localStorage.getItem(codigo) === 'completado') {
      localStorage.removeItem(codigo);
    } else {
      localStorage.setItem(codigo, 'completado');
    }
    renderMalla(document.querySelector('.filter-btn.active').dataset.filter);
    document.getElementById('ramo-modal').style.display = 'none';
  };

  document.getElementById('ramo-modal').style.display = 'flex';
}

// ==== Validaciones ====
function puedeCompletar(ramo, tipoGrado) {
  const pendientes = ramo.requisitos.filter(req => localStorage.getItem(req) !== 'completado');
  if (pendientes.length > 0) {
    alert("Requisitos pendientes: " + pendientes.join(", "));
    return false;
  }
  if (tipoGrado === "bachillerato") {
    const totalDiplo = contarCursos(mallaData.diplomado);
    const aprobadosDiplo = contarAprobados(mallaData.diplomado);
    if (totalDiplo - aprobadosDiplo > 3) {
      alert("Debes completar el Diplomado o tener máximo 3 cursos pendientes para avanzar al Bachillerato.");
      return false;
    }
  }
  return true;
}

function contarCursos(grado) {
  return grado.niveles.reduce((acc, n) => acc + n.ramos.length, 0);
}
function contarAprobados(grado) {
  return grado.niveles.reduce((acc, n) => acc + n.ramos.filter(r => localStorage.getItem(r.codigo) === 'completado').length, 0);
}

function updateProgressBar() {
  let total = 0, comp = 0;
  for (const data of Object.values(mallaData)) {
    data.niveles.forEach(n => {
      n.ramos.forEach(r => {
        total++;
        if (localStorage.getItem(r.codigo) === 'completado') comp++;
      });
    });
  }
  document.getElementById('progress-fill').style.width = `${(comp/total)*100}%`;
}

// ==== Inicializar ====
document.addEventListener('DOMContentLoaded', function() {
  renderMalla();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderMalla(this.dataset.filter);
    });
  });
  document.querySelector('.close-modal').addEventListener('click', () => document.getElementById('ramo-modal').style.display = 'none');
  window.addEventListener('click', e => { if (e.target === document.getElementById('ramo-modal')) document.getElementById('ramo-modal').style.display = 'none'; });
});
