/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

import { Button } from '../components/button';
import { Badge } from '../components/badge';
import { FileExclamationPoint, Earth, ClipboardCheck, MoveRight } from 'lucide-react';
import { CoreResearchTasksCard } from '../components/card';
import { AvatarInvestigator } from '../components/avatar';
import { TEAM_MEMBERS } from '../data/team';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const navigate = useNavigate();

	return (
		<div>
			<header className="pt-20 pb-20 md:pt-48 md:pb-32 bg-linear-to-br from-dark to-blue text-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full transform translate-x-1/3" />

				<section className="text-center relative z-10">
					<Badge variant="light" className="mb-6">
						FCT Project Ref: 2024.18230.PEX
					</Badge>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						Unlocking Clinical Knowledge
						<br className="hidden md:block" /> with{' '}
						<span className="text-teal">Privacy-Preserving AI</span>
					</h1>

					<p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
						The MITH project addresses the challenge of converting unstructured clinical data into
						structured, interoperable formats for research, ensuring strict compliance with GDPR and
						privacy regulations.
					</p>

					<article className="flex flex-col md:flex-row gap-4 justify-center items-center">
						<Button
							onClick={() =>
								document.getElementById('objectives')?.scrollIntoView({ behavior: 'smooth' })
							}
							className="px-8 py-4 bg-teal hover:bg-[#008ea0] transition-colors shadow-lg w-2/5 md:w-auto shadow-teal/30"
						>
							Explore Research
						</Button>
						<Button
							onClick={() => navigate({ to: '/results' })}
							className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 w-2/5 md:w-auto transition-colors backdrop-blur-sm"
						>
							View Outputs
						</Button>
					</article>
				</section>
			</header>

			<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-mith-dark mb-6">The Challenge</h2>
						<div className="space-y-4 text-lg leading-relaxed text-slate-600">
							<p>
								Large-scale health initiatives like EHDEN and OHDSI rely on data to improve
								healthcare outcomes. However, a vast amount of clinical knowledge remains locked in{' '}
								<strong>unstructured text</strong> (clinical notes, reports).
								<div className="h-6" />
								Current methods to extract this data often compromise patient privacy or lack
								scalability. MITH proposes a framework using{' '}
								<strong>Large Language Models (LLMs)</strong> for extraction and{' '}
								<strong>Collaborative ETL</strong> tools for harmonization, ensuring data remains
								secure and compliant.
							</p>
						</div>
					</div>
					<div className="bg-mith-light p-10 rounded-2xl flex justify-center items-center">
						<img src="./logo.svg" alt="MITH Concept Illustration" className="w-3/4 h-auto" />
					</div>
				</div>
			</section>

			<section
				id="objectives"
				className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-slate-50"
			>
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-mith-dark mb-4">Core Research Tasks</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						Our work plan is divided into three interconnected packages.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<CoreResearchTasksCard
						title="Task 1: Knowledge Extraction"
						description="Using LLMs and Named Entity Recognition (NER) to convert unstructured text into structured data schemas."
						taskId="1"
						borderColor="border-teal"
						textColor="text-teal"
						icon={<FileExclamationPoint className="w-24 h-24 text-teal" />}
					/>

					<CoreResearchTasksCard
						title="Task 2: Privacy-Preserving ETL"
						description="Developing a collaborative ETL tool with plugins for differential privacy and encryption."
						taskId="2"
						borderColor="border-blue"
						textColor="text-blue"
						icon={<Earth className="w-24 h-24 text-blue" />}
					/>

					<CoreResearchTasksCard
						title="Task 3: Compliance & Sustainability"
						description="Automated regulatory checks (GDPR/ISO) and Green AI optimization for sustainability."
						taskId="3"
						borderColor="border-dark"
						textColor="text-dark"
						icon={<ClipboardCheck className="w-24 h-24 text-dark" />}
					/>
				</div>
			</section>

			<section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white border-t border-slate-100">
				<div className="flex flex-col md:flex-row justify-between items-center mb-12">
					<div>
						<h2 className="text-3xl font-bold text-dark">Research Team</h2>
						<p className="text-slate-500 mt-2">IEETA / Universidade de Aveiro</p>
					</div>
					<Link
						to="/team"
						className="hidden md:inline-flex items-center text-teal font-semibold hover:underline mt-4 md:mt-0"
					>
						View full team <MoveRight className="w-4 h-4 ml-1" />
					</Link>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{TEAM_MEMBERS.map((member) => (
						<AvatarInvestigator
							key={member.name}
							name={member.name}
							role={member.role}
							roleColor={member.roleColor}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
