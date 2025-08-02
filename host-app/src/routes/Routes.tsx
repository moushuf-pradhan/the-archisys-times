import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import Home from '@/pages/Home/Home';
import AppLayout from '@layouts/AppLayout/AppLayout';

export default function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="detail" element={<p>Detail</p>} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
