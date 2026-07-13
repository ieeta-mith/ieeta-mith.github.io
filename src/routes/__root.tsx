/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';
import { NotFoundComponent } from '../components/not-found';
import { ServerErrorComponent } from '../components/server-error';

const RootLayout = () => {
	return (
		<div className="flex min-h-screen">
			<main className="flex-1 overflow-auto">
				<NavBar />
				<div className="min-h-screen bg-slate-50 text-slate-700">
					<Outlet />
				</div>
				<Footer />
			</main>
		</div>
	);
};

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFoundComponent,
	errorComponent: ServerErrorComponent,
});
