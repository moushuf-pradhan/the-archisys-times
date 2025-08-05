import NoData from '@/components/common/NoData/NoData';

import NewsCard from './NewsCard/NewsCard';
import useLogic from './useLogic';
import { classes } from './News.styles';

export default function News() {
	// Hooks
	const { news, noData } = useLogic();

	if (noData) return <NoData />;

	return (
		<div className={classes.wrapper}>
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
