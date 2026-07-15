import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface AvatarInvestigatorProps {
	name: string;
	role: string;
	roleColor: string;
}

export type BadgeVariant = 'default' | 'light' | 'outline';
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
	variant?: BadgeVariant;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary';
};

export interface CoreResearchTasksCardProps {
	title: string;
	description: string;
	taskId: string;
	borderColor: string;
	textColor: string;
	icon: React.ReactNode;
}

export interface MemberCardProps {
	name: string;
	description: string;
	workplace: string;
	cienciaVitae: string;
	googleScholar: string;
	isLeadInvestigator: boolean;
}

export interface DissertationCardProps {
	title: string;
	description: string;
	status: 'planned' | 'in-progress' | 'completed';
	link?: string;
}

export interface ToolCardProps {
	title: string;
	description: string;
	version?: string;
	codeLink?: string;
	documentationLink?: string;
	demoLink?: string;
}

export interface DropdownProps {
	label: ReactNode;
	className?: string;
	menuClassName?: string;
	children: ReactNode;
}

export interface DropdownItemProps {
	taskNumber: number;
	title: string;
	description?: string;
	className?: string;
}

export interface Publication {
	title: string;
	date: string;
	doi: string;
	publicationPlace: string;
	link?: string;
}

export interface ResearchGrant {
	title: string;
	reference: string;
	status: 'open' | 'closed';
	description: string;
	skills: string;
	duration: string;
	startDate: string;
	payment: string;
	location: string;
	area: string;
	supervisor: string;
	uaLink: string;
	euraxessLink: string;
	mailTo: string;
}
