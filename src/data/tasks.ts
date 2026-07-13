export const TASKS_INFORMATION = [
	{
		label: 'Task 1',
		title: 'LLMs for Knowledge Extraction and Assistance',
		subtitle:
			'Bridging the gap between unstructured clinical text and structured health data using advanced AI.',
		overview:
			"Much of clinical data exists in free-text form such as doctors' notes and research articles. This task focuses on fine-tuning Large Language Models (LLMs) to identify and extract key medical attributes—symptoms, diagnoses, treatments—and mapping them to standardized schemas like OMOP CDM or FHIR.",
		bgColor: 'bg-teal',
		iconColor: 'text-teal',
		startMonthOffset: 0,
		durationMonths: 8,
		objectives: [
			{
				label: 'Structured Conversion',
				description:
					'Transforming raw clinical text into structured formats suitable for interoperability.',
			},
			{
				label: 'Concept Mapping (NER)',
				description:
					'Recognizing medical entities and linking them to ontologies like SNOMED CT and ICD-10.',
			},
			{
				label: 'Intelligent Query Assistance',
				description:
					'Enabling researchers to ask natural language questions which are translated into database queries.',
			},
		],
		keyDeliverables: [
			{ name: 'End-to-End NLP Pipeline', months: 4 },
			{ name: 'Concept Mapping Tool', months: 5 },
			{ name: 'LLM Query Assistant', months: 8 },
		],
	},
	{
		label: 'Task 2',
		title: 'ETL for Data Harmonization & Privacy',
		subtitle: 'Enabling secure, collaborative data integration from diverse healthcare sources.',
		overview:
			'This task develops a collaborative ETL (Extract, Transform, Load) tool that allows multiple stakeholders to standardize data efficiently. A critical component is the integration of privacy-preserving plugins that safeguard sensitive data during the transformation process. We will also develop an evaluation framework to assess privacy risks before data publishing, analyzing potential leakage and ensuring GDPR compliance.',
		bgColor: 'bg-blue',
		iconColor: 'text-blue',
		startMonthOffset: 6,
		durationMonths: 8,
		objectives: [
			{
				label: 'Collaborative Tool',
				description:
					'Based on open-source orchestration (Apache Airflow), featuring version control, role-based access, and data lineage tracking.',
			},
			{
				label: 'Privacy Plugins',
				description:
					'Modules implementing differential privacy, anonymization, and encryption directly into the ETL pipeline to ensure utility without compromising security.',
			},
			{
				label: 'Privacy Risk Assessment',
				description:
					'Evaluation framework to assess privacy risks before data publishing, analyzing potential leakage and ensuring GDPR compliance.',
			},
		],
		keyDeliverables: [
			{ name: 'Collaborative ETL Tool', months: 4 },
			{ name: 'Privacy Plugins', months: 6 },
			{ name: 'Risk Eval Framework', months: 8 },
		],
	},
	{
		label: 'Task 3',
		title: 'Compliance, Auditability and Sustainability',
		subtitle: 'Ensuring ethical AI, GDPR compliance, and energy-efficient processing.',
		overview:
			'This task ensures ethical AI, GDPR compliance, and energy-efficient processing. We focus on automated regulatory checks, sustainability optimization, and ethical AI principles to create transparent, fair, and environmentally sustainable solutions.',
		bgColor: 'bg-dark',
		iconColor: 'text-dark',
		startMonthOffset: 10,
		durationMonths: 8,
		objectives: [
			{
				label: 'Automated Regulatory Checks',
				description:
					'Using AI tools to continuously monitor models and ETL processes for alignment with legal standards like GDPR and ISO/IEC 27001:2022. The system flags potential issues like unauthorized data access.',
			},
			{
				label: 'Sustainability & Optimization',
				description:
					'Reducing computational overhead (energy consumption) by leveraging techniques like model pruning, quantization, and distributed processing. This ensures scalable and environmentally sustainable AI.',
			},
			{
				label: 'Ethical AI',
				description:
					'Integrating ethical principles to ensure decision-making processes are transparent, fair, and free from biases, supported by regular audits.',
			},
		],
		keyDeliverables: [
			{ name: 'Compliance Monitor Tool', months: 4 },
			{ name: 'Regulatory Checklist', months: 8 },
		],
	},
];