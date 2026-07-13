export const Footer = () => {
	return (
		<footer className="bg-dark text-slate-300 py-12 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1fr_1.4fr] gap-12">
				<div>
					<span className="font-bold text-2xl text-white block mb-4">MITH</span>
					<p className="mb-4 text-sm">Medical Insights using Textual Harmonization.</p>
					<p className="text-xs text-slate-400">Ref: 2024.18230.PEX</p>
					<p className="text-xs text-slate-400">Duration: 18 Months (Sept 2025 - Feb 2027)</p>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
						Contact
					</h3>
					<p className="text-sm">Universidade de Aveiro / IEETA</p>
					<p className="text-sm">Campus Universitário de Santiago</p>
					<p className="text-sm">3810-193 Aveiro, Portugal</p>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
						Funding
					</h3>
					<p className="text-xs mb-4">
						Funded by national funds through FCT - Fundação para a Ciência e a Tecnologia, I.P.
					</p>

					<div className="flex flex-col md:flex-row items-center gap-5 mt-4 bg-white/90 p-4 rounded-lg">
						<a href="https://www.fct.pt/" target="_blank" rel="noopener noreferrer">
							<img src="/fct-logo.svg" alt="FCT Logo" className="h-10 w-auto" />
						</a>
						<a href="https://www.ua.pt/" target="_blank" rel="noopener noreferrer">
							<img src="/ua-logo.png" alt="UA Logo" className="h-13 w-auto" />
						</a>
						<a href="https://www.ieeta.pt/" target="_blank" rel="noopener noreferrer">
							<img src="/ieeta-logo.png" alt="IEETA Logo" className="h-13 w-auto" />
						</a>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto border-t border-slate-700 mt-12 pt-8 text-xs text-center text-slate-500">
				&copy; 2025 MITH Project. All rights reserved.
			</div>
		</footer>
	);
};
