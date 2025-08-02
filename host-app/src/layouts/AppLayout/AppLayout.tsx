import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import AppBody from './AppBody/AppBody';

export default function AppLayout() {
	return (
		<div>
			<Header />
			<NavBar />
			<AppBody />
		</div>
	);
}
