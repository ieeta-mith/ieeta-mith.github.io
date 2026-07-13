import type { ToolCardProps } from "../lib/types";

export const SOFTWARE_TOOLS: ToolCardProps[] = [
    {
        title: 'DataPrivScore',
        description:
            'Client-side web application that evaluates the privacy level of datasets using multiple privacy metrics, providing an aggregated privacy score called the Privacy Index and actionable recommendations for improvement.',
        version: 'release-v1.0.1',
        codeLink: 'https://github.com/ieeta-mith/dataprivscore',
        demoLink: 'https://ieeta-mith.github.io/DataPrivScore/',
        documentationLink: undefined,
    },
    {
        title: 'ClinMap',
        description:
            'Automated ICD-9 code assignment from MIMIC-III clinical discharge summaries using an interpretable hybrid ensemble of label-aware attention and K-nearest neighbors on contrastively fine-tuned ClinicalBERT embeddings.',
        version: 'release-v1.0.0',
        codeLink: 'https://github.com/ieeta-mith/ClinMap',
        demoLink: undefined,
        documentationLink: undefined,
    },
];