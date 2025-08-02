import { Outlet } from 'react-router';

export default function AppBody() {
	return (
		<main className="px-6 py-18">
			<div className="max-w-[1200px] mx-auto">
				<Outlet />
			</div>
		</main>
	);
}
