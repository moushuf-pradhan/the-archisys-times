import Loader from '@/components/common/Loader/Loader';

import useLogic from './useLogic';
import News from './News/News';
import LoadMore from './LoadMore/LoadMore';
import Search from './Search/Search';

export default function Home() {
	// Hooks
	const { isFetchingNews, hasNews } = useLogic();

	// Loading state
	if (isFetchingNews && !hasNews) return <Loader />;

	return (
		<>
			<Search />
			<News />
			<LoadMore />
		</>
	);
}
