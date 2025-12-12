// Script compartilhado para cálculo de datas das tasks
// Cada task deve definir TASK_START_DATE e TASK_DURATION_MONTHS antes de incluir este script

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

// Atualizar período do projeto
function updateProjectPeriod() {
    if (typeof TASK_START_DATE === 'undefined' || typeof TASK_DURATION_MONTHS === 'undefined') {
        console.error('TASK_START_DATE e TASK_DURATION_MONTHS devem ser definidos antes de carregar task-dates.js');
        return;
    }
    const endDate = addMonths(TASK_START_DATE, TASK_DURATION_MONTHS);
    const periodElement = document.getElementById('period-range');
    if (periodElement) {
        periodElement.textContent = `${formatDate(TASK_START_DATE)} - ${formatDate(endDate)}`;
    }
}

// Atualizar datas dos deliverables
function updateDeliverables() {
    if (typeof TASK_START_DATE === 'undefined') {
        console.error('TASK_START_DATE deve ser definido antes de carregar task-dates.js');
        return;
    }
    const deliverableElements = document.querySelectorAll('[data-deliverable-months]');
    deliverableElements.forEach(element => {
        const months = parseInt(element.getAttribute('data-deliverable-months'));
        const deliverableDate = addMonths(TASK_START_DATE, months);
        element.textContent = formatDate(deliverableDate);
    });
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateProjectPeriod();
    updateDeliverables();
});
