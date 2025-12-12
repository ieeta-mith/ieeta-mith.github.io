// Configuração da Task 2
window.TASK_CONFIG = {
    number: 'Task 2',
    title: 'ETL for Data Harmonization & Privacy',
    subtitle: 'Enabling secure, collaborative data integration from diverse healthcare sources.',
    headerColor: 'mith-blue',
    iconColor: 'text-mith-blue',
    startMonthOffset: 6,
    durationMonths: 8,
    overview: 'This task develops a collaborative ETL (Extract, Transform, Load) tool that allows multiple stakeholders to standardize data efficiently. A critical component is the integration of privacy-preserving plugins that safeguard sensitive data during the transformation process. We will also develop an evaluation framework to assess privacy risks before data publishing, analyzing potential leakage and ensuring GDPR compliance.',
    objectives: [
        {
            title: 'Collaborative Tool',
            description: 'Based on open-source orchestration (Apache Airflow), featuring version control, role-based access, and data lineage tracking.'
        },
        {
            title: 'Privacy Plugins',
            description: 'Modules implementing differential privacy, anonymization, and encryption directly into the ETL pipeline to ensure utility without compromising security.'
        },
        {
            title: 'Privacy Risk Assessment',
            description: 'Evaluation framework to assess privacy risks before data publishing, analyzing potential leakage and ensuring GDPR compliance.'
        }
    ],
    deliverables: [
        { name: 'Collaborative ETL Tool', months: 4 },
        { name: 'Privacy Plugins', months: 6 },
        { name: 'Risk Eval Framework', months: 8 }
    ]
};
