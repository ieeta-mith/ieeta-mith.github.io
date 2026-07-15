import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Dropdown, DropdownItem } from './dropdown';

const TASK_MENU = [
	{ taskNumber: 1, title: 'Task 1', description: 'LLMs & Knowledge Extraction' },
	{ taskNumber: 2, title: 'Task 2', description: 'Privacy-Preserving ETL' },
	{ taskNumber: 3, title: 'Task 3', description: 'Compliance & Sustainability' },
];

export const NavBar = () => {
	const navigate = useNavigate();
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const closeMobileMenu = () => setIsMobileOpen(false);

	const navigateAndClose = (to: '/' | '/team' | '/results' | '/jobs') => {
		closeMobileMenu();
		navigate({ to });
	};

	const goToTask = (taskNumber: number) => {
		closeMobileMenu();
		navigate({ to: '/tasks/$taskId', params: { taskId: String(taskNumber) } });
	};

	useEffect(() => {
		const media = window.matchMedia('(min-width: 768px)');
		const handler = (event: MediaQueryListEvent) => {
			if (event.matches) closeMobileMenu();
		};

		media.addEventListener('change', handler);
		return () => media.removeEventListener('change', handler);
	}, []);

	return (
		<nav className="bg-white/95 backdrop-blur shadow-sm fixed w-full z-50 border-b border-slate-100">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				<div className="flex justify-between items-center space-x-3">
					<button
						type="button"
						onClick={() => navigate({ to: '/' })}
						className="cursor-pointer text-lg font-semibold text-gray-800 py-4 block"
						aria-label="Go to home"
					>
						<img src="/nav_icon.svg" alt="Logo" className="h-20 w-25" />
					</button>

					<div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
						<button
							type="button"
							className="text-teal font-bold transition cursor-pointer"
							onClick={() => navigate({ to: '/' })}
						>
							Home
						</button>

						<Dropdown label="Research Tasks">
							{TASK_MENU.map((task) => (
								<DropdownItem
									key={task.taskNumber}
									taskNumber={task.taskNumber}
									title={task.title}
									description={task.description}
								/>
							))}
						</Dropdown>

						<button
							type="button"
							className="hover:text-teal transition cursor-pointer"
							onClick={() => navigate({ to: '/team' })}
						>
							Team
						</button>

						<button
							type="button"
							className="hover:text-teal transition cursor-pointer"
							onClick={() => navigate({ to: '/results' })}
						>
							Results
						</button>

						<button
							type="button"
							className="text-blue font-bold transition border border-blue px-4 py-2 rounded-full hover:bg-blue cursor-pointer hover:text-white text-sm"
							onClick={() => navigate({ to: '/jobs' })}
						>
							Positions
						</button>

						<a
							href="https://github.com/ieeta-mith"
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-500 hover:text-dark transition"
							title="View on GitHub"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>

					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsMobileOpen((prev) => !prev)}
							className="text-slate-600 hover:text-mith-teal focus:outline-none cursor-pointer transition"
							aria-expanded={isMobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle mobile menu"
						>
							{isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
						</button>
					</div>
				</div>
			</div>

			<div
				id="mobile-menu"
				className={`md:hidden overflow-hidden border-t border-slate-100 bg-white shadow-lg transition-all duration-300 ${
					isMobileOpen ? 'max-h-128 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="px-6 py-4 space-y-4 font-medium text-slate-700">
					<button
						type="button"
						className="block w-full text-left hover:text-teal"
						onClick={() => navigateAndClose('/')}
					>
						Home
					</button>

					{TASK_MENU.map((task) => (
						<button
							key={task.taskNumber}
							type="button"
							className="block w-full text-left hover:text-teal"
							onClick={() => goToTask(task.taskNumber)}
						>
							{task.title}: {task.description.split(' & ')[0]}
						</button>
					))}

					<hr className="border-slate-100" />

					<button
						type="button"
						className="block w-full text-left hover:text-teal"
						onClick={() => navigateAndClose('/team')}
					>
						Team
					</button>

					<button
						type="button"
						className="block w-full text-left hover:text-teal"
						onClick={() => navigateAndClose('/results')}
					>
						Results
					</button>

					<button
						type="button"
						className="block w-full text-left font-bold text-blue"
						onClick={() => navigateAndClose('/jobs')}
					>
						Open Positions
					</button>

					<a
						href="https://github.com/ieeta-mith"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-slate-600 hover:text-teal"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							/>
						</svg>
						<span>GitHub</span>
					</a>
				</div>
			</div>
		</nav>
	);
};
