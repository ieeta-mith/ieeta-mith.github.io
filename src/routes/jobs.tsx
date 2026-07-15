/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { RESEARCH_GRANTS } from '../data/reasearch-grants';
import { ResearchGrantCard } from '../components/card';

export const Route = createFileRoute('/jobs')({
	component: RouteComponent,
});

function RouteComponent() {
	const [filter, setFilter] = useState<'open' | 'closed'>('open');
	const filteredGrants = RESEARCH_GRANTS.filter((grant) => grant.status === filter);

	return (
		<div>
			<main className="pt-48 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-mith-dark mb-6">Join the Team</h1>
				<p className="text-lg text-slate-600 mb-8">
					We are looking for motivated researchers to join the MITH project at the University of
					Aveiro / IEETA.
				</p>

				<div className="flex mb-10 justify-center">
					<div className="p-1 bg-slate-100 rounded-lg shadow-inner">
						<button
							onClick={() => setFilter('open')}
							className={`px-6 cursor-pointer py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
								filter === 'open'
									? 'bg-white text-teal shadow-sm'
									: 'text-slate-500 hover:text-slate-700'
							}`}
						>
							Open Positions
						</button>
						<button
							onClick={() => setFilter('closed')}
							className={`px-6 cursor-pointer py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
								filter === 'closed'
									? 'bg-white text-slate-800 shadow-sm'
									: 'text-slate-500 hover:text-slate-700'
							}`}
						>
							Closed Positions
						</button>
					</div>
				</div>

				<div className="space-y-10">
					{filteredGrants.length > 0 ? (
						filteredGrants.map((grant, index) => (
							<ResearchGrantCard key={index} {...grant} />
						))
					) : (
						<div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center">
							<p className="text-slate-500 text-lg">
								{filter === 'open'
									? 'There are currently no open positions. Please check back later!'
									: 'There are no closed positions to display.'}
							</p>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}