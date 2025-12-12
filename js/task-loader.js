// Sistema de carregamento de tasks baseado em template
// Carrega a configuração da task baseado no parâmetro da URL ou nome do arquivo

// Função para renderizar seção Overview
function renderOverview(overview) {
    return `
        <section>
            <h2 class="text-2xl font-bold text-mith-dark mb-4">Overview</h2>
            <p class="leading-relaxed text-slate-600 mb-4">${overview}</p>
        </section>
    `;
}

// Função para renderizar seção Key Objectives
function renderKeyObjectives(objectives, iconColor = 'text-mith-teal') {
    let html = `
        <section>
            <h2 class="text-2xl font-bold text-mith-dark mb-4">Key Objectives</h2>
            <ul class="space-y-4">
    `;
    
    objectives.forEach(obj => {
        html += `
            <li class="flex items-start">
                <svg class="w-6 h-6 ${iconColor} mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <strong class="text-mith-dark">${obj.title}:</strong> ${obj.description}
                </div>
            </li>
        `;
    });
    
    html += `
            </ul>
        </section>
    `;
    
    return html;
}

// Função para renderizar deliverables
function renderDeliverables(deliverables) {
    let html = '';
    deliverables.forEach(deliverable => {
        html += `
            <li class="flex items-center justify-between">
                <span>${deliverable.name}</span>
                <span class="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500" data-deliverable-months="${deliverable.months}">-</span>
            </li>
        `;
    });
    return html;
}

// Função principal para carregar a task
function loadTask(taskConfig) {
    // Atualizar título da página
    document.getElementById('page-title').textContent = `${taskConfig.number}: ${taskConfig.title} - MITH`;
    
    // Atualizar header
    document.getElementById('task-number').textContent = taskConfig.number;
    document.getElementById('task-title').textContent = taskConfig.title;
    document.getElementById('task-subtitle').textContent = taskConfig.subtitle;
    
    // Atualizar cor do header
    const header = document.getElementById('task-header');
    header.className = `bg-${taskConfig.headerColor} text-white pt-32 pb-16 px-6 md:px-12 lg:px-24`;
    
    // Renderizar conteúdo
    const contentContainer = document.getElementById('task-content');
    contentContainer.innerHTML = '';
    
    // Adicionar Overview
    if (taskConfig.overview) {
        contentContainer.innerHTML += renderOverview(taskConfig.overview);
    }
    
    // Adicionar Key Objectives
    if (taskConfig.objectives) {
        const iconColor = taskConfig.iconColor || 'text-mith-teal';
        contentContainer.innerHTML += renderKeyObjectives(taskConfig.objectives, iconColor);
    }
    
    // Renderizar deliverables
    const deliverablesContainer = document.getElementById('deliverables-list');
    deliverablesContainer.innerHTML = renderDeliverables(taskConfig.deliverables);
    
    // Atualizar duração
    const durationElement = document.getElementById('duration');
    if (durationElement) {
        durationElement.textContent = `${taskConfig.durationMonths} ${taskConfig.durationMonths === 1 ? 'Month' : 'Months'}`;
    }
    
    // Configurar datas da task
    window.TASK_START_MONTH_OFFSET = taskConfig.startMonthOffset;
    window.TASK_DURATION_MONTHS = taskConfig.durationMonths;
}

// Detectar qual task carregar
document.addEventListener('DOMContentLoaded', function() {
    // Tentar obter o número da task da URL
    const urlParams = new URLSearchParams(window.location.search);
    let taskNumber = urlParams.get('n');
    
    // Se não houver parâmetro na URL, tentar detectar pelo nome do arquivo (para compatibilidade)
    if (!taskNumber) {
        const currentFile = window.location.pathname.split('/').pop();
        const match = currentFile.match(/task(\d+)\.html/);
        if (match) {
            taskNumber = match[1];
        }
    }
    
    // Se ainda não encontrou, usar task1 por padrão
    if (!taskNumber) {
        taskNumber = '1';
    }
    
    // Validar que o número da task é válido
    if (!/^\d+$/.test(taskNumber) || parseInt(taskNumber) < 1) {
        console.error('Número de task inválido. Use task.html?n=1, task.html?n=2, etc.');
        taskNumber = '1'; // Fallback para task 1
    }
    
    // Carregar configuração da task
    const script = document.createElement('script');
    script.src = `js/tasks/task${taskNumber}.js`;
    script.onload = function() {
        if (window.TASK_CONFIG) {
            loadTask(window.TASK_CONFIG);
            // Atualizar datas após carregar configuração
            if (typeof updateProjectPeriod === 'function') {
                setTimeout(function() {
                    updateProjectPeriod();
                    updateDeliverables();
                }, 100);
            }
        }
    };
    script.onerror = function() {
        console.error(`Não foi possível carregar a configuração da task ${taskNumber}`);
    };
    document.head.appendChild(script);
});
