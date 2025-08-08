import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';
import { lazy, Suspense } from 'react';

import AppLayout from '@layouts/AppLayout/AppLayout';
const Home = lazy(() => import('archisys_remote/Home'));
const NewsDetail = lazy(() => import('archisys_remote/NewsDetail'));
const Error = lazy(() => import('archisys_remote/Error'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactRoutes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path=":slug" element={<NewsDetail />} />
            <Route path="/error" element={<Error />} />
          </Route>
        </ReactRoutes>
      </Suspense>
    </BrowserRouter>
  );
}
