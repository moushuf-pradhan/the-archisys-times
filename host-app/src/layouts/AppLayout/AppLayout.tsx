import { Outlet } from 'react-router';

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';

export default function AppLayout() {
	return (
		<div>
			<Header />
			<NavBar />
			<Outlet />
		</div>
	);
}
