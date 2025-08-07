import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';
import { lazy } from 'react';

// import Home from '@/pages/Home/Home';
const Home = lazy(() => import('archisys_remote/Home'));
const NewsDetail = lazy(() => import('archisys_remote/NewsDetail'));
// const Error = lazy(() => import('archisys_remote/Error'));
import AppLayout from '@layouts/AppLayout/AppLayout';
// import NewsDetail from '@/pages/NewsDetail/NewsDetail';
// import Error from '@/pages/Error/Error';

export default function Routes() {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path=":slug" element={<NewsDetail />} />
					{/* <Route path="/error" element={<Error />} /> */}
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
