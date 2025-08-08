import Loader from '@archisys/ui-components/Loader';

import useLogic from './useLogic';
import News from './News/News';
import LoadMore from './LoadMore/LoadMore';
import Search from './Search/Search';

export default function Home() {
	// Hooks
	const { showLoader } = useLogic();

	// Loading state
	// if (showLoader) return <Loader />;

	return (
		<>
			<Search />
			{showLoader ? (
				<Loader />
			) : (
				<>
					<News />
					<LoadMore />
				</>
			)}
		</>
	);
}
