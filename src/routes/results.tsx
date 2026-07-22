/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { MASTER_THESIS } from '../data/dissertations';
import { SOFTWARE_TOOLS } from '../data/tools';
import { ToolCard } from '../components/card';
import { DissertationTable, PublicationsTable } from '../components/table';

export const Route = createFileRoute('/results')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="pt-48 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
			<h1 className="text-4xl font-bold text-dark mb-6">Project Outputs</h1>
			<p className="text-lg text-slate-600 mb-12 max-w-3xl">
				We are committed to Open Science. All software tools, datasets, and publications resulting
				from the project will be listed here.
			</p>

			<h2 className="text-2xl font-bold text-blue mb-6 border-l-4 border-teal pl-4">
				Master&apos;s thesis
			</h2>

			{MASTER_THESIS.length > 0 ? (
				<div className="pb-16">
					<DissertationTable />
				</div>
			) : (
				<p className="text-slate-600 w-full items-center text-center py-10">
					No master&apos;s thesis available at the moment.
				</p>
			)}

			<h2 className="text-2xl font-bold text-blue mb-6 border-l-4 border-teal pl-4">
				Software & Tools
			</h2>
			{SOFTWARE_TOOLS.length > 0 ? (
				<div className="grid md:grid-cols-2 gap-6 mb-16 w-full">
					{SOFTWARE_TOOLS.map((tool, index) => (
						<ToolCard
							key={index}
							title={tool.title}
							description={tool.description}
							version={tool.version}
							codeLink={tool.codeLink}
							documentationLink={tool.documentationLink}
							demoLink={tool.demoLink}
							taskId={tool.taskId}
						/>
					))}
				</div>
			) : (
				<p className="text-slate-600 w-full items-center text-center py-10">
					No software tools available at the moment.
				</p>
			)}

			<h2 className="text-2xl font-bold text-blue mb-6 border-l-4 border-teal pl-4">
				Scientific Publications
			</h2>
			<PublicationsTable />
		</main>
	);
}
