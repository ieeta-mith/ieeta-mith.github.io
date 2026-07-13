import { User } from 'lucide-react';
import type { AvatarInvestigatorProps } from '../lib/types';

export const AvatarInvestigator = ({ name, role, roleColor }: AvatarInvestigatorProps) => {
	return (
		<div className="text-center">
			<div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 overflow-hidden">
				<User className="w-full h-full text-slate-300" />
			</div>
			<h4 className="font-bold text-dark">{name}</h4>
			<p className={`text-xs ${roleColor} font-bold uppercase tracking-wide`}>{role}</p>
		</div>
	);
};
