import { Link } from '@tanstack/react-router';
import { BookOpenText, FileCode, Globe, Info, Link2, MoveRight, User } from 'lucide-react';
import { TASKS_INFORMATION } from '../data/tasks';
import type {
	CoreResearchTasksCardProps,
	MemberCardProps,
	ToolCardProps,
	ResearchGrant,
} from '../lib/types';

export const CoreResearchTasksCard = ({
	title,
	description,
	taskId,
	borderColor,
	textColor,
	icon,
}: CoreResearchTasksCardProps) => {
	return (
		<Link to="/tasks/$taskId" params={{ taskId: taskId }}>
			<div
				className={`group bg-white p-8 flex flex-col rounded-xl shadow-sm hover:shadow-xl h-full justify-between transition duration-300 border-t-4 ${borderColor} relative overflow-hidden`}
			>
				<div>
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
						{icon}
					</div>
					<h3 className={`text-xl font-bold text-dark mb-3 group-hover:${textColor} transition`}>
						{title}
					</h3>
					<p className="text-slate-600 mb-4">{description}</p>
				</div>
				<span className="text-blue font-semibold text-sm flex items-center">
					Learn more <MoveRight className="w-4 h-4 ml-1" />
				</span>
			</div>
		</Link>
	);
};

export const MemberCard = ({
	name,
	description,
	workplace,
	cienciaVitae,
	googleScholar,
	isLeadInvestigator,
}: MemberCardProps) => {
	if (isLeadInvestigator) {
		return (
			<div className="bg-white p-8 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-8 items-start">
				<div className="w-32 h-32 bg-slate-200 rounded-full shrink-0 overflow-hidden">
					<User className="w-full h-full text-slate-300" />
				</div>
				<div>
					<h2 className="text-2xl font-bold text-mith-dark">{name}</h2>
					<p className="text-blue font-semibold mb-4">Principal Investigator (PI) | {workplace}</p>
					<p className="mb-4">{description}</p>
					<div className="flex gap-4 text-sm font-medium">
						<a href={cienciaVitae} target="_blank" className="text-teal hover:underline">
							Ciência Vitae
						</a>
						<a href={googleScholar} target="_blank" className="text-teal hover:underline">
							Google Scholar
						</a>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white p-8 rounded-xl shadow-sm">
			<h3 className="text-xl font-bold text-mith-dark">{name}</h3>
			<p className="text-sm text-slate-500 mb-4">Core Member | {workplace}</p>
			<p className="text-sm mb-4">{description}</p>
			<div className="flex gap-4 text-sm font-medium">
				<a href={cienciaVitae} target="_blank" className="text-teal hover:underline">
					Ciência Vitae
				</a>
				<a href={googleScholar} target="_blank" className="text-teal hover:underline">
					Google Scholar
				</a>
			</div>
		</div>
	);
};

export const ToolCard = ({
	title,
	description,
	version,
	codeLink,
	documentationLink,
	demoLink,
	taskId,
}: ToolCardProps) => {
	const currentTask = TASKS_INFORMATION[taskId - 1];
	return (
		<div className="flex flex-col justify-between bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition">
			<div className="flex justify-between items-start">
				<h3 className="text-lg font-bold text-mith-dark">{title}</h3>
				<div className="flex items-center gap-2">
					<Link to="/tasks/$taskId" params={{ taskId: taskId as unknown as string }} className={`${currentTask.bgColor} text-white text-xs font-bold px-2 py-1 rounded-full hover:scale-105 hover:shadow-x transition`}>
						{currentTask.label}
					</Link>
					<span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
						{version}
					</span>
				</div>
			</div>
			<p className="text-sm text-slate-600 mt-2 mb-4">{description}</p>
			<div className="flex flex-row gap-10">
				{demoLink && (
					<a href={demoLink} target="_blank" className="text-blue hover:underline">
						<span className="flex flex-row gap-1 items-center">
							<Link2 className="w-4 h-4" />
							Tool
						</span>
					</a>
				)}
				{codeLink && (
					<a href={codeLink} target="_blank" className="text-blue hover:underline">
						<span className="flex flex-row gap-1 items-center">
							<FileCode className="w-4 h-4" />
							Repository
						</span>
					</a>
				)}
				{documentationLink && (
					<a href={documentationLink} target="_blank" className="text-blue hover:underline">
						<span className="flex flex-row gap-1 items-center">
							<BookOpenText className="w-4 h-4" />
							Documentation
						</span>
					</a>
				)}
			</div>
		</div>
	);
};

export const ResearchGrantCard = ({
	title,
	reference,
	status,
	description,
	skills,
	duration,
	startDate,
	payment,
	location,
	area,
	supervisor,
	uaLink,
	euraxessLink,
	mailTo,
}: ResearchGrant) => {
	const isOpen = status === 'open';

	return (
		<div
			className={`bg-white p-8 rounded-xl shadow-sm border-l-4 transition-colors ${
				isOpen ? 'border-teal' : 'border-red-500'
			}`}
		>
			<div className="flex justify-between items-start flex-col md:flex-row gap-4">
				<div className={isOpen ? '' : 'text-red-500 line-through'}>
					<h3 className="text-xl font-bold text-dark">{title}</h3>
					<p className="text-mith-blue font-medium">Reference: {reference}</p>
				</div>

				<span
					className={`text-xs font-bold px-3 py-1 rounded-full ${
						isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
					}`}
				>
					{isOpen ? 'Open' : 'Closed'}
				</span>
			</div>

			<div className="mt-4 text-slate-600">
				<p>{description}</p>
			</div>

			<div className="mt-2 text-slate-600">
				<p>
					<strong>Preferred skills:</strong> {skills}
				</p>
			</div>

			<div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
				<p>
					<strong>Duration:</strong> {duration}
				</p>
				<p>
					<strong>Start Date:</strong> {startDate}
				</p>
				<p>
					<strong>Monthly Stipend:</strong> {payment}
				</p>
				<p>
					<strong>Location:</strong> {location}
				</p>
				<p>
					<strong>Scientific Area:</strong> {area}
				</p>
				<p>
					<strong>Supervisor:</strong> {supervisor}
				</p>
			</div>

			<div className="mt-6 flex flex-wrap gap-3">
				<a
					href={uaLink}
					target="_blank"
					rel="noopener noreferrer"
					className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
						isOpen
							? 'bg-blue text-white hover:bg-dark'
							: 'bg-slate-100 text-slate-400 line-through pointer-events-none'
					}`}
				>
					<Info className="w-4 h-4 mr-2" /> Full Details (PT)
				</a>

				<a
					href={euraxessLink}
					target="_blank"
					rel="noopener noreferrer"
					className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
						isOpen
							? 'bg-teal text-white hover:bg-dark'
							: 'bg-slate-100 text-slate-400 line-through pointer-events-none'
					}`}
				>
					<Globe className="w-4 h-4 mr-2" />
					EURAXESS (EN)
				</a>

				<a
					href={isOpen ? mailTo : undefined}
					target={isOpen ? '_blank' : undefined}
					rel={isOpen ? 'noopener noreferrer' : undefined}
					aria-disabled={!isOpen}
					tabIndex={isOpen ? 0 : -1}
					onClick={(e) => {
						if (!isOpen) e.preventDefault();
					}}
					className={`inline-flex items-center px-4 py-2 border-2 text-sm font-medium rounded-lg transition-colors ${
						isOpen
							? 'border-slate-300 text-slate-400 hover:bg-dark hover:text-white'
							: 'border-red-300 text-red-400 line-through cursor-not-allowed opacity-70'
					}`}
				>
					Apply Now
				</a>
			</div>
		</div>
	);
};
