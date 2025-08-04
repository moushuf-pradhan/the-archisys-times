import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import Home from '@/pages/Home/Home';
import AppLayout from '@layouts/AppLayout/AppLayout';
import NewsContextProvider from '@/utils/contexts/News/provider';
import NewsDetail from '@/pages/NewsDetail/NewsDetail';
import Error from '@/pages/Error/Error';

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
					<Route path=":slug" element={<NewsDetail />} />
					<Route path="/error" element={<Error />} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
