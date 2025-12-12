# Guia de Gestão das Tasks

## Estrutura Atual

Cada task tem:
- Um arquivo HTML (`task1.html`, `task2.html`, `task3.html`)
- Configuração de datas inline no HTML

## Como Funciona o Sistema de Datas

### 1. Data de Início do Projeto
**Arquivo:** `js/project-config.js`
```javascript
const PROJECT_START_DATE = new Date(2026, 0, 1); // Janeiro 2026
```

**Para alterar:** Edite apenas este arquivo e todas as tasks serão recalculadas.

### 2. Configuração de Cada Task
Cada task HTML tem no final:
```javascript
const TASK_START_MONTH_OFFSET = 0; // Offset em meses a partir do início do projeto
const TASK_DURATION_MONTHS = 8;    // Duração da task em meses
```

**Exemplos:**
- `TASK_START_MONTH_OFFSET = 0` → Task começa no início do projeto
- `TASK_START_MONTH_OFFSET = 6` → Task começa 6 meses após o início
- `TASK_START_MONTH_OFFSET = 23` → Task começa 23 meses (quase 2 anos) após o início

### 3. Deliverables
Cada deliverable tem um atributo `data-deliverable-months`:
```html
<span data-deliverable-months="4">-</span>
```
O número indica quantos meses após o início da task o deliverable é entregue.

## Resumo das Tasks Atuais

| Task | Offset | Duração | Início (se projeto = Jan 2026) |
|------|-------|---------|--------------------------------|
| Task 1 | 0 meses | 8 meses | Jan 2026 |
| Task 2 | 6 meses | 8 meses | Jul 2026 |
| Task 3 | 10 meses | 8 meses | Nov 2026 |

## Como Alterar Datas

### Para alterar a data de início do projeto:
1. Edite `js/project-config.js`
2. Todas as tasks serão recalculadas automaticamente

### Para alterar quando uma task começa:
1. Edite o arquivo HTML da task (ex: `task1.html`)
2. Altere `TASK_START_MONTH_OFFSET`
3. As datas serão recalculadas automaticamente

### Para alterar a duração de uma task:
1. Edite o arquivo HTML da task
2. Altere `TASK_DURATION_MONTHS`
3. O período será recalculado automaticamente

### Para alterar quando um deliverable é entregue:
1. Edite o arquivo HTML da task
2. Altere o atributo `data-deliverable-months` do deliverable
3. A data será recalculada automaticamente

## Estrutura dos Arquivos

```
website/
├── task1.html          # HTML da Task 1
├── task2.html          # HTML da Task 2
├── task3.html          # HTML da Task 3
└── js/
    ├── project-config.js   # Data de início do projeto (EDITAR AQUI)
    └── task-dates.js       # Script que calcula as datas (não editar)
```

## Exemplo Prático

**Cenário:** Quero que o projeto comece em Setembro 2025 e a Task 2 comece 3 meses depois.

1. Edite `js/project-config.js`:
   ```javascript
   const PROJECT_START_DATE = new Date(2025, 8, 1); // Setembro 2025
   ```

2. Edite `task2.html`:
   ```javascript
   const TASK_START_MONTH_OFFSET = 3; // 3 meses após Set 2025 = Dez 2025
   ```

Resultado: Task 2 começará em Dezembro 2025.
