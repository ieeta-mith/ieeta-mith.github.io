import { Link } from '@tanstack/react-router';
import { Home, SearchX } from 'lucide-react';

export function NotFoundComponent() {
	return (
		<main className="pt-48 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-[75vh] flex flex-col items-center justify-center text-center">
			<div className="bg-white p-8 rounded-full mb-8 border border-slate-100 shadow-sm relative">
				<SearchX className="w-20 h-20 text-teal" />
			</div>

			<h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
				404 - Page Not Found
			</h1>
			
			<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
				Oops! The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
			</p>

			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
				<Link
					to="/"
					className="inline-flex items-center justify-center px-8 py-4 bg-teal hover:bg-[#008ea0] text-white transition-colors shadow-lg shadow-teal/30 rounded-lg font-medium w-full sm:w-auto"
				>
					<Home className="w-5 h-5 mr-2" />
					Back to Home
				</Link>
			</div>
		</main>
	);
}