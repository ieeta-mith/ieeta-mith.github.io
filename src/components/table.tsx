import { PUBLICATIONS } from '../data/publications';

export const PublicationsTable = () => {
	const labels: string[] = ['Date', 'Title / Venue', 'DOI / URL'];

	return (
		<div className="bg-white rounded-xl shadow-sm overflow-hidden">
			<table className="min-w-full divide-y divide-slate-200">
				<thead className="bg-slate-50">
					<tr>
						{labels.map((label, index) => (
							<th
								key={index}
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
							>
								{label}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-slate-200">
					{PUBLICATIONS.map((pub, index) => (
						<tr key={index}>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{pub.date}</td>
							<td className="px-6 py-4 text-sm text-slate-700">
								<strong>{pub.title}</strong>
								<br />
								<span className="text-slate-500">{pub.publicationPlace}</span>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
								{pub.doi !== 'Pending' ? (
									<a href={pub.link} target="_blank" className="text-teal hover:underline" rel="noopener noreferrer">
										{pub.doi}
									</a>
								) : (
									<span className="text-slate-400">Pending</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
