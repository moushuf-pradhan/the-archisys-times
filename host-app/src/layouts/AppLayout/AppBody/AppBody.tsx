import { Outlet } from 'react-router';

export default function AppBody() {
	return (
		<main className="px-6 pt-10 pb-20 max-w-[1200px] mx-auto">
			<Outlet />
		</main>
	);
}
