import { Link, useRouter } from '@tanstack/react-router';
import { ServerCrash, RefreshCcw, Home } from 'lucide-react';

export function ServerErrorComponent() {
	const router = useRouter();

	return (
		<main className="pt-48 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-[75vh] flex flex-col items-center justify-center text-center">
			<div className="bg-red-50 p-8 rounded-full mb-8 border border-red-100 shadow-sm">
				<ServerCrash className="w-20 h-20 text-red-500" />
			</div>

			<h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
				500 - System Error
			</h1>
			
			<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
				We're sorry, but something went wrong on our end while processing your request. 
				Our research team has been notified and is working on harmonizing the system.
			</p>

			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
				<button
					onClick={() => router.invalidate()}
					className="inline-flex items-center justify-center px-8 py-4 bg-dark text-white hover:bg-slate-800 transition-colors shadow-lg rounded-lg font-medium w-full sm:w-auto cursor-pointer"
				>
					<RefreshCcw className="w-5 h-5 mr-2" />
					Try Again
				</button>
				
				<Link
					to="/"
					className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-dark transition-colors rounded-lg font-medium w-full sm:w-auto"
				>
					<Home className="w-5 h-5 mr-2" />
					Return Home
				</Link>
			</div>
		</main>
	);
}