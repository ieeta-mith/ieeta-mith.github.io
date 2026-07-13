/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { RESEARCH_GRANTS } from '../data/reasearch-grants';
import { ResearchGrantCard } from '../components/card';

export const Route = createFileRoute('/jobs')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<main className="pt-48 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-mith-dark mb-6">Join the Team</h1>
				<p className="text-lg text-slate-600 mb-12">
					We are looking for motivated researchers to join the MITH project at the University of
					Aveiro / IEETA.
				</p>
				<div className="space-y-10">
					{RESEARCH_GRANTS.map((grant, index) => (
						<ResearchGrantCard key={index} {...grant} />
					))}
				</div>
			</main>
		</div>
	);
}
