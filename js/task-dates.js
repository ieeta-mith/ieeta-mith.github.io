// Script compartilhado para cálculo de datas das tasks
// Cada task deve definir TASK_START_MONTH_OFFSET e TASK_DURATION_MONTHS antes de incluir este script
// TASK_START_MONTH_OFFSET: offset em meses a partir da data de início do projeto (0 = início do projeto)

// Função para formatar data como "MMM YYYY" (ex: "Sep 2026")
function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Função para adicionar meses a uma data
function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

// Calcular data de início da task baseada no offset
function getTaskStartDate() {
    if (typeof PROJECT_START_DATE === 'undefined') {
        console.error('PROJECT_START_DATE deve ser definido em project-config.js');
        return null;
    }
    if (typeof TASK_START_MONTH_OFFSET === 'undefined') {
        console.error('TASK_START_MONTH_OFFSET deve ser definido antes de carregar task-dates.js');
        return null;
    }
    return addMonths(PROJECT_START_DATE, TASK_START_MONTH_OFFSET);
}

// Atualizar período do projeto
function updateProjectPeriod() {
    if (typeof TASK_DURATION_MONTHS === 'undefined') {
        console.error('TASK_DURATION_MONTHS deve ser definido antes de carregar task-dates.js');
        return;
    }
    const taskStartDate = getTaskStartDate();
    if (!taskStartDate) return;
    
    const endDate = addMonths(taskStartDate, TASK_DURATION_MONTHS);
    const periodElement = document.getElementById('period-range');
    if (periodElement) {
        periodElement.textContent = `${formatDate(taskStartDate)} - ${formatDate(endDate)}`;
    }
}

// Atualizar datas dos deliverables
function updateDeliverables() {
    const taskStartDate = getTaskStartDate();
    if (!taskStartDate) return;
    
    const deliverableElements = document.querySelectorAll('[data-deliverable-months]');
    deliverableElements.forEach(element => {
        const months = parseInt(element.getAttribute('data-deliverable-months'));
        const deliverableDate = addMonths(taskStartDate, months);
        element.textContent = formatDate(deliverableDate);
    });
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateProjectPeriod();
    updateDeliverables();
});
