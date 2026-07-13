import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { DropdownProps, DropdownItemProps } from '../lib/types';

export const Dropdown = ({ label, className, menuClassName, children }: DropdownProps) => {
	return (
		<div className={twMerge('relative group inline-block', className)}>
			<button className="flex items-center py-2 transition focus:outline-none hover:text-teal">
				<span>{label}</span>
				<ChevronDown className="ml-1 h-4 w-4" />
			</button>

			<div
				className={twMerge(
					'absolute left-0 top-full z-50 mt-0 w-64 origin-top-left rounded-lg border border-slate-100 bg-white opacity-0 invisible shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100',
					menuClassName
				)}
			>
				{children}
			</div>
		</div>
	);
};

export const DropdownItem = ({ taskNumber, title, description, className }: DropdownItemProps) => {
	return (
		<Link to={`/tasks/$taskId`} params={{ taskId: taskNumber.toString() }}>
			<span
				className={twMerge(
					'block border-b border-slate-50 px-4 py-3 hover:bg-slate-50 last:border-b-0 cursor-pointer transition',
					className
				)}
			>
				<span className="block text-sm font-bold text-dark">{title}</span>
				{description ? <span className="block text-xs text-slate-500">{description}</span> : null}
			</span>
		</Link>
	);
};
