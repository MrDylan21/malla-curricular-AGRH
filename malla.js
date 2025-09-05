// ==== Datos de la malla curricular (Diplomado reducido, Bachillerato 7 y Licenciatura completa) ====
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
  },
  licenciatura: {
    titulo: "Licenciatura en Administración y Gestión de RRHH",
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
          { codigo: "AGRH-0214", nombre: "Taller de Investigación", creditos: 3, requisitos: ["AGRH-0111","AGRH-0112","AGRH-0113","AGRH-0114"] }
        ]
      },
      {
        numero: 3,
        creditos: 11,
        ramos: [
          { codigo: "AGRH-0311", nombre: "Gestión del Cambio", creditos: 4, requisitos: [] },
          { codigo: "AGRH-0312", nombre: "Estructuras Salariales", creditos: 4, requisitos: [] },
          { codigo: "AGRH-0313", nombre: "Ética Profesional", creditos: 3, requisitos: [] },
          { codigo: "AGRH-0314", nombre: "Investigación Dirigida", creditos: 0, requisitos: ["Niveles 1 y 2 aprobados","AGRH-0311","AGRH-0312","AGRH-0313"] }
        ]
      }
    ]
  }
};

// ==== Validaciones extra ====
function puedeCompletar(ramo, tipoGrado) {
  const pendientes = ramo.requisitos.filter(req => localStorage.getItem(req) !== 'completado' && !req.includes("Niveles"));
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

