import {
	BrowserRouter,
	Link,
	Routes as ReactRoutes,
	Route,
} from 'react-router';
import AppLayout from '../layouts/AppLayout/AppLayout';

export default function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Link to="/detail">Home</Link>} />
					<Route path="detail" element={<p>Detail</p>} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
