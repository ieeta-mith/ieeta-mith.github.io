/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { RESEARCH_SCHOLARSHIPS, TEAM_MEMBERS } from '../data/team';
import { MemberCard, ScholarshipCard } from '../components/card';

export const Route = createFileRoute('/team')({
	component: RouteComponent,
});

function RouteComponent() {
	const leadInvestigator = TEAM_MEMBERS.find((member) => member.role === 'Principal Investigator');

	return (
		<main className="pt-48 pb-6 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
			<h1 className="text-4xl font-bold text-dark mb-12 border-b border-slate-200 pb-4">
				Research Team
			</h1>

			<MemberCard
				name={leadInvestigator?.name || ''}
				description={leadInvestigator?.description || ''}
				workplace={leadInvestigator?.workplace || ''}
				cienciaVitae={leadInvestigator?.cienciaVitae || ''}
				googleScholar={leadInvestigator?.googleScholar || ''}
				photo={leadInvestigator?.photo}
				isLeadInvestigator
			/>

			<div className="grid md:grid-cols-2 gap-8">
				{TEAM_MEMBERS.filter((member) => member.role !== 'Principal Investigator').map(
					(member, index) => (
						<MemberCard
							key={index}
							name={member.name}
							description={member.description}
							workplace={member.workplace}
							cienciaVitae={member.cienciaVitae}
							googleScholar={member.googleScholar}
							photo={member.photo}
							isLeadInvestigator={false}
						/>
					)
				)}
			</div>

			<h2 className="text-2xl font-bold text-dark mt-16 mb-8 border-b border-slate-200 pb-4">
				Research Scholarships
			</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{RESEARCH_SCHOLARSHIPS.map((scholar) => (
					<ScholarshipCard key={scholar.name} {...scholar} />
				))}
			</div>
		</main>
	);
}
