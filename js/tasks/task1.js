// Configuração da Task 1
window.TASK_CONFIG = {
    number: 'Task 1',
    title: 'LLMs for Knowledge Extraction and Assistance',
    subtitle: 'Bridging the gap between unstructured clinical text and structured health data using advanced AI.',
    headerColor: 'mith-teal',
    iconColor: 'text-mith-teal',
    startMonthOffset: 0,
    durationMonths: 8,
    overview: 'Much of clinical data exists in free-text form such as doctors\' notes and research articles. This task focuses on fine-tuning Large Language Models (LLMs) to identify and extract key medical attributes—symptoms, diagnoses, treatments—and mapping them to standardized schemas like OMOP CDM or FHIR.',
    objectives: [
        {
            title: 'Structured Conversion',
            description: 'Transforming raw clinical text into structured formats suitable for interoperability.'
        },
        {
            title: 'Concept Mapping (NER)',
            description: 'Recognizing medical entities and linking them to ontologies like SNOMED CT and ICD-10.'
        },
        {
            title: 'Intelligent Query Assistance',
            description: 'Enabling researchers to ask natural language questions which are translated into database queries.'
        }
    ],
    deliverables: [
        { name: 'End-to-End NLP Pipeline', months: 4 },
        { name: 'Concept Mapping Tool', months: 5 },
        { name: 'LLM Query Assistant', months: 8 }
    ]
};
