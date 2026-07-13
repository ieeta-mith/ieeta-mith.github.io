import { twMerge } from 'tailwind-merge';
import type { ButtonProps } from '../lib/types';

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {
	const baseClasses =
		'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors cursor-pointer';

	const variantClasses = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700',
		secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
		ghost: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50',
	};

	return <button className={twMerge(baseClasses, variantClasses[variant], className)} {...props} />;
};
