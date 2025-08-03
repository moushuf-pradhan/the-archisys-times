import NoData from '@/components/common/NoData/NoData';

import NewsCard from './NewsCard/NewsCard';
import useLogic from './useLogic';

export default function News() {
	// Hooks
	const { news, noData } = useLogic();

	if (noData) return <NoData />;

	return (
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
	);
}
