import Button from '@components/common/Button/Button';

import Loader from '@/components/common/Loader/Loader';

import NewsCard from './NewsCard/NewsCard';
import useLogic from './useLogic';

export default function Home() {
	// Hooks
	const { news, isFetchingNews } = useLogic();

	// Loading state
	if (isFetchingNews) return <Loader />;

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{news?.map((item, index) => (
					<NewsCard
						key={index}
						image={item?.urlToImage}
						heading={item?.title}
						description={item?.description}
					/>
				))}
			</div>
			<div className="text-center mt-12 ">
				<Button>Load more</Button>
			</div>
		</>
	);
}
