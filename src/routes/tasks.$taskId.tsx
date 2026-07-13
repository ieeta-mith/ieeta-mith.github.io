/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, useParams } from '@tanstack/react-router';
import { PROJECT_START_DATE } from '../lib/constants';
import { TASKS_INFORMATION } from '../data/tasks';
import { CircleCheckBig } from 'lucide-react';
import { addMonths, formatDate } from '../lib/utils';

export const Route = createFileRoute('/tasks/$taskId')({
	component: TaskComponent,
});

function TaskComponent() {
	const { taskId } = useParams({ strict: false });
	const taskInfo = taskId ? TASKS_INFORMATION[parseInt(taskId) - 1] : undefined;
	if (!taskInfo) {
		return <div className="p-8">Task not found.</div>;
	}

	const taskStartDate = addMonths(PROJECT_START_DATE, taskInfo.startMonthOffset);
	const taskEndDate = addMonths(taskStartDate, taskInfo.durationMonths);

	return (
		<>
			<header className={`${taskInfo?.bgColor} text-white pt-48 pb-28 px-6 md:px-12 lg:px-24`}>
				<div className="max-w-7xl mx-auto h-full">
					<span
						id="task-number"
						className="uppercase tracking-widest text-sm font-semibold opacity-80"
					>
						{taskInfo?.label}
					</span>
					<h1 id="task-title" className="text-3xl md:text-4xl font-bold mt-2 mb-4">
						{taskInfo?.title}
					</h1>
					<p id="task-subtitle" className="text-lg opacity-90 max-w-2xl">
						{taskInfo?.subtitle}
					</p>
				</div>
			</header>

			<main className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
				<div className="md:col-span-2 space-y-8">
					<section>
						<h2 className="text-2xl font-bold text-mith-dark mb-4">Overview</h2>
						<p className="leading-relaxed text-slate-600 mb-4">{taskInfo?.overview}</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-mith-dark mb-4">Key Objectives</h2>
						<ul className="space-y-4">
							{taskInfo?.objectives?.map((obj, index) => (
								<li key={index} className="flex items-start">
									<CircleCheckBig className={`w-6 h-6 mt-1 mr-3 shrink-0 ${taskInfo?.iconColor}`} />
									<p className="text-dark">
										<span className="font-bold">{obj.label}: </span> {obj.description}
									</p>
								</li>
							))}
						</ul>
					</section>
				</div>

				<div className="space-y-8">
					<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
						<h3 className="text-lg font-bold text-dark mb-4 border-b border-slate-200 pb-2">
							Timeline
						</h3>
						<div className="flex items-center text-slate-600 mb-2">
							<span className="w-24 font-semibold text-xs uppercase text-slate-400">Duration</span>
							<span>{taskInfo.durationMonths} Months</span>
						</div>
						<div className="flex items-center text-slate-600">
							<span className="w-24 font-semibold text-xs uppercase text-slate-400">Period</span>
							<span className="text-sm">
								{formatDate(taskStartDate)} - {formatDate(taskEndDate)}
							</span>
						</div>
					</div>

					<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
						<h3 className="text-lg font-bold text-dark mb-4 border-b border-slate-200 pb-2">
							Key Deliverables
						</h3>
						<ul className="space-y-3 text-sm text-slate-600">
							{taskInfo.keyDeliverables.map((deliverable, index) => {
								const deliverableDate = addMonths(taskStartDate, deliverable.months);

								return (
									<li key={index} className="flex items-center justify-between">
										<span>{deliverable.name}</span>
										<span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">
											{formatDate(deliverableDate)}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</main>
		</>
	);
}
