import { twMerge } from 'tailwind-merge';
import type { BadgeProps, BadgeVariant } from '../lib/types';

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
	const baseClasses = 'inline-block rounded-full px-3 py-1 text-sm font-medium transition-colors';

	const variantClasses: Record<BadgeVariant, string> = {
		default: 'bg-slate-900 text-white',
		light: 'bg-white/10 border border-white/20 text-white backdrop-blur-sm',
		outline: 'border border-slate-300 text-slate-700 bg-transparent',
	};

	return <span className={twMerge(baseClasses, variantClasses[variant], className)} {...props} />;
};
