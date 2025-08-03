import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import Home from '@/pages/Home/Home';
import AppLayout from '@layouts/AppLayout/AppLayout';
import NewsContextProvider from '@/utils/contexts/News/provider';

export default function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<AppLayout />}>
					<Route
						index
						element={
							<NewsContextProvider>
								<Home />
							</NewsContextProvider>
						}
					/>
					<Route path="detail" element={<p>Detail</p>} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
