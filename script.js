// Datos de la malla curricular
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
                    { codigo: "AGRH-211", nombre: "Introducción a la Sociología de las Organizaciones", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-214", nombre: "Comunicación Administrativa", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-215", nombre: "Psicología I", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-312", nombre: "Fundamentos de Mercadeo", creditos: 3, requisitos: [] },
                    { codigo: "IDCAD02", nombre: "Inglés II", creditos: 0, requisitos: [] }
                ]
            },
            {
                numero: 3,
                creditos: 12,
                ramos: [
                    { codigo: "AGRH-212", nombre: "Economía I", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-314", nombre: "Derecho Laboral I", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-315", nombre: "Psicología II", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-411", nombre: "Introducción a la Administración de Recursos Humanos", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-414", nombre: "Presupuesto", creditos: 3, requisitos: [] },
                    { codigo: "IDCAD03", nombre: "Inglés III", creditos: 0, requisitos: [] }
                ]
            },
            {
                numero: 4,
                creditos: 15,
                ramos: [
                    { codigo: "AGRH-412", nombre: "Introducción a la Salud Ocupacional", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-415", nombre: "Derecho Laboral II", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-416", nombre: "Tablas Dinámicas", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-712", nombre: "Normas y Estándares de Calidad", creditos: 3, requisitos: [] },
                    { codigo: "AGRH-812", nombre: "Economía II", creditos: 3, requisitos: [] },
                    { codigo: "IDCAD04", nombre: "Inglés IV", creditos: 0, requisitos: [] }
                ]
            },
            {
                numero: 5,
                creditos: 14,
                ramos: [
                    { codigo: "AGRH-512", nombre: "Clasificación de Puestos", creditos: 4, requisitos: [] },
                    { codigo: "AGRH-612", nombre: "Reclutamiento y Selección", creditos: 4, requisitos: [] },
                    { codigo: "AGRH-614", nombre: "Administración de Remuneraciones", creditos: 3, requisitos: [] },
                    { codigo: "IDCAD05", nombre: "Inglés V", creditos: 0, requisitos: [] },
                    { codigo: "ME-005", nombre: "Estadística Descriptiva", creditos: 3, requisitos: [] }
                ]
            },
            {
                numero: 6,
                creditos: 10,
                ramos: [
                    { codigo: "AGRH-514", nombre: "Capacitación y Desarrollo", creditos: 4, requisitos: ["AGRH-612", "AGRH-614"] },
                    { codigo: "AGRH-611", nombre: "Valoración de Puestos", creditos: 4, requisitos: ["AGRH-512", "AGRH-612", "AGRH-614"] },
                    { codigo: "AGRH-613", nombre: "Seminario Integrado de Recursos Humanos", creditos: 2, requisitos: ["ME-005"] }
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
                    { codigo: "FH-100", nombre: "Formación Humanística: Filosofía y Pensamiento", creditos: 0, requisitos: [] }
                ]
            },
            {
                numero: 8,
                creditos: 9,
                ramos: [
                    { codigo: "AD-100", nombre: "Actividad Deportiva", creditos: 0, requisitos: [] },
                    { codigo: "AGRH-813", nombre: "Investigación de Operaciones", creditos: 3, requisitos: ["AGRH-913"] },
                    { codigo: "AGRH-911", nombre: "Planificación de Recursos Humanos", creditos: 3, requisitos: ["AGRH-913", "AGRH-914"] },
                    { codigo: "AGRH-914", nombre: "Auditoría de Recursos Humanos", creditos: 3, requisitos: ["AGRH-811", "AGRH-911", "AGRH-912"] },
                    { codigo: "FH-200", nombre: "Formación Humanística: Literatura y Comunicación", creditos: 0, requisitos: [] }
                ]
            },
            {
                numero: 9,
                creditos: 15,
                ramos: [
                    { codigo: "AGRH-1012", nombre: "Gestión por Competencias", creditos: 3, requisitos: ["AGRH-915"] },
                    { codigo: "AGRH-511", nombre: "Análisis Administrativo", creditos: 4, requisitos: ["AGRH-914", "AGRH-915"] },
                    { codigo: "AGRH-915", nombre: "Evaluación del Desempeño", creditos: 2, requisitos: ["AGRH-511", "AGRH-911"] },
                    { codigo: "AGRHEL-I", nombre: "Electivo I", creditos: 3, requisitos: ["AGRH-911"] },
                    { codigo: "FH-300", nombre: "Formación Humanística: Historia de la Cultura", creditos: 3, requisitos: [] }
                ]
            },
            {
                numero: 10,
                creditos: 16,
                ramos: [
                    { codigo: "AGRH-1011", nombre: "Gerencia de Recursos Humanos", creditos: 3, requisitos: ["AGRH-711", "AGRH-911"] },
                    { codigo: "AGRH-1013", nombre: "Práctica Profesional", creditos: 7, requisitos: ["AGRH-1011", "AGRH-1012", "AGRH-511", "AGRH-915", "AGRHEL-I", "AGRHEL-II", "FH-300", "FH-400"] },
                    { codigo: "AGRHEL-II", nombre: "Electivo II", creditos: 3, requisitos: ["AGRHEL-I"] },
                    { codigo: "FH-400", nombre: "Formación Humanística: Realidad Nacional", creditos: 3, requisitos: [] }
                ]
            }
        ],
        electivos: {
            "Electivo I": [
                { codigo: "AGRHEL-916", nombre: "Tecnologías Emergentes Aplicadas en la Gestión del Talento Humano", creditos: 3 },
                { codigo: "AGRHEL-917", nombre: "Incentivos y Beneficios", creditos: 3 },
                { codigo: "AGRHEL-918", nombre: "Técnicas y Herramientas de Mejora Continua", creditos: 3 },
                { codigo: "AGRHEL-919", nombre: "Nuevas Formas de Contratación", creditos: 3 }
            ],
            "Electivo II": [
                { codigo: "AGRHEL-1014", nombre: "Comunicación y Protocolo Organizacional", creditos: 3 },
                { codigo: "AGRHEL-1015", nombre: "Técnicas para el Manejo de Descargas Emocionales", creditos: 3 },
                { codigo: "AGRHEL-1016", nombre: "Manejo de Factores Psicosociales en la Gestión del Talento Humano", creditos: 3 }
            ]
        }
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

// Función para renderizar la malla
function renderMalla(grado = 'all') {
    const mallaContainer = document.querySelector('.malla-container');
    mallaContainer.innerHTML = '';
    
    // Renderizar Diplomado
    if (grado === 'all' || grado === 'diplomado') {
        renderGrado(mallaData.diplomado, 'diplomado');
    }
    
    // Renderizar Bachillerato
    if (grado === 'all' || grado === 'bachillerato') {
        renderGrado(mallaData.bachillerato, 'bachillerato');
        
        // Renderizar electivos del bachillerato
        const electivosSection = document.createElement('div');
        electivosSection.className = 'nivel';
        electivosSection.innerHTML = `
            <div class="nivel-header">
                <h2 class="nivel-titulo">Cursos Electivos - Bachillerato</h2>
            </div>
        `;
        
        for (const [titulo, electivos] of Object.entries(mallaData.bachillerato.electivos)) {
            const electivoTitle = document.createElement('h3');
            electivoTitle.className = 'electivo-title';
            electivoTitle.textContent = titulo;
            electivosSection.appendChild(electivoTitle);
            
            const electivosContainer = document.createElement('div');
            electivosContainer.className = 'electivos-container';
            
            electivos.forEach(electivo => {
                const electivoElement = document.createElement('div');
                electivoElement.className = 'ramo';
                electivoElement.innerHTML = `
                    <div class="ramo-codigo">${electivo.codigo}</div>
                    <div class="ramo-nombre">${electivo.nombre}</div>
                    <div class="ramo-info">
                        <div class="ramo-creditos">${electivo.creditos} créditos</div>
                    </div>
                `;
                electivosContainer.appendChild(electivoElement);
            });
            
            electivosSection.appendChild(electivosContainer);
        }
        
        mallaContainer.appendChild(electivosSection);
    }
    
    // Renderizar Licenciatura
    if (grado === 'all' || grado === 'licenciatura') {
        renderGrado(mallaData.licenciatura, 'licenciatura');
    }
    
    // Agregar event listeners a los ramos
    document.querySelectorAll('.ramo').forEach(ramo => {
        ramo.addEventListener('click', function() {
            const codigo = this.querySelector('.ramo-codigo').textContent;
            abrirModal(codigo);
        });
    });
    
    // Actualizar barra de progreso
    updateProgressBar();
}

function renderGrado(gradoData, tipo) {
    const mallaContainer = document.querySelector('.malla-container');
    
    // Crear sección de grado
    const gradoSection = document.createElement('div');
    gradoSection.className = 'grado-section';
    gradoSection.innerHTML = `
        <h2 class="grado-title">${gradoData.titulo}</h2>
        <p class="grado-info">Total de créditos: ${gradoData.creditos}</p>
    `;
    mallaContainer.appendChild(gradoSection);
    
    // Renderizar niveles
    gradoData.niveles.forEach(nivel => {
        const nivelElement = document.createElement('div');
        nivelElement.className = `nivel ${tipo}`;
        nivelElement.innerHTML = `
            <div class="nivel-header">
                <h2 class="nivel-titulo">Nivel ${nivel.numero} - ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
                <div class="creditos">${nivel.creditos} créditos</div>
            </div>
            <div class="ramos-container"></div>
        `;
        
        const ramosContainer = nivelElement.querySelector('.ramos-container');
        
        nivel.ramos.forEach(ramo => {
            const ramoElement = document.createElement('div');
            ramoElement.className = 'ramo';
            ramoElement.dataset.codigo = ramo.codigo;
            
            // Verificar si el ramo está marcado como completado
            if (localStorage.getItem(ramo.codigo) === 'completado') {
                ramoElement.classList.add('completado');
                ramoElement.style.background = 'linear-gradient(135deg, #e8f5e9, #c8e6c9)';
                ramoElement.style.borderLeftColor = '#4caf50';
            }
            
            let requisitosText = '';
            if (ramo.requisitos && ramo.requisitos.length > 0) {
                requisitosText = `<div class="ramo-requisitos">Req: <span>${ramo.requisitos.join(', ')}</span></div>`;
            }
            
            ramoElement.innerHTML = `
                <div class="ramo-codigo">${ramo.codigo}</div>
                <div class="ramo-nombre">${ramo.nombre}</div>
                <div class="ramo-info">
                    <div class="ramo-creditos">${ramo.creditos} créditos</div>
                </div>
                ${requisitosText}
            `;
            
            ramosContainer.appendChild(ramoElement);
        });
        
        mallaContainer.appendChild(nivelElement);
    });
}

function abrirModal(codigo) {
    // Buscar el ramo en todos los niveles
    let ramoInfo = null;
    let tipoGrado = '';
    
    // Buscar en diplomado
    for (const nivel of mallaData.diplomado.niveles) {
        const ramo = nivel.ramos.find(r => r.codigo === codigo);
        if (ramo) {
            ramoInfo = ramo;
            tipoGrado = 'Diplomado';
            break;
        }
    }
    
    // Buscar en bachillerato
    if (!ramoInfo) {
        for (const nivel of mallaData.bachillerato.niveles) {
            const ramo = nivel.ramos.find(r => r.codigo === codigo);
            if (ramo) {
                ramoInfo = ramo;
                tipoGrado = 'Bachillerato';
                break;
            }
        }
        
        // Buscar en electivos del bachillerato
        if (!ramoInfo) {
            for (const electivos of Object.values(mallaData.bachillerato.electivos)) {
                const ramo = electivos.find(r => r.codigo === codigo);
                if (ramo) {
                    ramoInfo = ramo;
                    tipoGrado = 'Bachillerato - Electivo';
                    break;
                }
            }
        }
    }
    
    // Buscar en licenciatura
    if (!ramoInfo) {
        for (const nivel of mallaData.licenciatura.niveles) {
            const ramo = nivel.ramos.find(r => r.codigo === codigo);
            if (ramo) {
                ramoInfo = ramo;
                tipoGrado = 'Licenciatura';
                break;
            }
        }
    }
    
    if (ramoInfo) {
        document.getElementById('modal-codigo').textContent = ramoInfo.codigo;
        document.getElementById('modal-title').textContent = ramoInfo.nombre;
        document.getElementById('modal-creditos').textContent = `${ramoInfo.creditos} créditos`;
        document.getElementById('modal-nivel').textContent = tipoGrado;
        
        const requisitosContainer = document.getElementById('modal-prerrequisitos');
        requisitosContainer.innerHTML = '';
        
        if (ramoInfo.requisitos && ramoInfo.requisitos.length > 0) {
            ramoInfo.requisitos.forEach(req => {
                const reqChip = document.createElement('div');
                reqChip.className = 'prerrequisito-chip';
                reqChip.textContent = req;
                requisitosContainer.appendChild(reqChip);
            });
        } else {
            requisitosContainer.innerHTML = '<div class="prerrequisito-chip">No tiene requisitos</div>';
        }
        
        // Configurar botón de completado
        const completadoBtn = document.getElementById('completado-btn');
        if (localStorage.getItem(codigo) === 'completado') {
            completadoBtn.textContent = 'Marcar como pendiente';
            completadoBtn.style.backgroundColor = '#f44336';
        } else {
            completadoBtn.textContent = 'Marcar como completado';
            completadoBtn.style.backgroundColor = '';
        }
        
        completadoBtn.onclick = function() {
            if (localStorage.getItem(codigo) === 'completado') {
                localStorage.removeItem(codigo);
                completadoBtn.textContent = 'Marcar como completado';
                completadoBtn.style.backgroundColor = '';
            } else {
                localStorage.setItem(codigo, 'completado');
                completadoBtn.textContent = 'Marcar como pendiente';
                completadoBtn.style.backgroundColor = '#f44336';
            }
            
            // Actualizar la visualización
            renderMalla(document.querySelector('.filter-btn.active').dataset.filter);
            updateProgressBar();
        };
        
        document.getElementById('ramo-modal').style.display = 'flex';
    }
}

function updateProgressBar() {
    // Contar todos los ramos
    let totalRamos = 0;
    let completados = 0;
    
    // Contar ramos del diplomado
    mallaData.diplomado.niveles.forEach(nivel => {
        nivel.ramos.forEach(ramo => {
            totalRamos++;
            if (localStorage.getItem(ramo.codigo) === 'completado') {
                completados++;
            }
        });
    });
    
    // Contar ramos del bachillerato
    mallaData.bachillerato.niveles.forEach(nivel => {
        nivel.ramos.forEach(ramo => {
            totalRamos++;
            if (localStorage.getItem(ramo.codigo) === 'completado') {
                completados++;
            }
        });
    });
    
    // Contar electivos del bachillerato (solo los que están en la malla principal)
    for (const electivos of Object.values(mallaData.bachillerato.electivos)) {
        electivos.forEach(ramo => {
            totalRamos++;
            if (localStorage.getItem(ramo.codigo) === 'completado') {
                completados++;
            }
        });
    }
    
    // Contar ramos de la licenciatura
    mallaData.licenciatura.niveles.forEach(nivel => {
        nivel.ramos.forEach(ramo => {
            totalRamos++;
            if (localStorage.getItem(ramo.codigo) === 'completado') {
                completados++;
            }
        });
    });
    
    // Calcular porcentaje
    const porcentaje = totalRamos > 0 ? (completados / totalRamos) * 100 : 0;
    document.getElementById('progress-fill').style.width = `${porcentaje}%`;
}

// Inicializar la malla
document.addEventListener('DOMContentLoaded', function() {
    renderMalla();
    
    // Configurar filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMalla(this.dataset.filter);
        });
    });
    
    // Cerrar modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('ramo-modal').style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('ramo-modal')) {
            document.getElementById('ramo-modal').style.display = 'none';
        }
    });
});
