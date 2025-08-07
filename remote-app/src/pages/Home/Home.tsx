import Loader from '@archisys/ui-components/Loader';

import useLogic from './useLogic';
import News from './News/News';
import LoadMore from './LoadMore/LoadMore';
import Search from './Search/Search';
// import { lazy, Suspense } from 'react';

// const Test = lazy(() => import('archisys_remote/Test'));

export default function Home() {
	// Hooks
	const { isFetchingNews, hasNews } = useLogic();

	// Loading state
	if (isFetchingNews && !hasNews) return <Loader />;

	return (
		<>
			{/* <Suspense fallback="Loading...">
				<Test />
			</Suspense> */}
			<Search />
			<News />
			<LoadMore />
		</>
	);
}
