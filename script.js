// Datos de la malla curricular
const mallaData = {
    semestres: [
        {
            numero: 1,
            ramos: [
                { codigo: "MAT101", nombre: "Cálculo I", creditos: 6 },
                { codigo: "FIS101", nombre: "Física General", creditos: 6 }
            ]
        },
        {
            numero: 2,
            ramos: [
                { codigo: "MAT102", nombre: "Cálculo II", creditos: 6, prerrequisitos: ["MAT101"] },
                { codigo: "PRO101", nombre: "Programación I", creditos: 6 }
            ]
        }
    ]
};

function renderMalla() {
    const container = document.getElementById('malla-container');
    
    mallaData.semestres.forEach(semestre => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h3>Semestre ${semestre.numero}</h3>`;
        
        semestre.ramos.forEach(ramo => {
            const ramoDiv = document.createElement('div');
            ramoDiv.className = 'ramo';
            if (ramo.prerrequisitos) {
                ramoDiv.classList.add('ramo-prerrequisito');
            }
            
            ramoDiv.innerHTML = `
                <strong>${ramo.codigo}</strong><br>
                ${ramo.nombre}<br>
                <small>${ramo.creditos} créditos</small>
            `;
            
            ramoDiv.addEventListener('click', () => {
                alert(`Información de ${ramo.nombre}\nCódigo: ${ramo.codigo}`);
            });
            
            semestreDiv.appendChild(ramoDiv);
        });
        
        container.appendChild(semestreDiv);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderMalla);
