import NoData from '@archisys/ui-components/NoData';

import type { ArticleI } from '@/utils/types/news';

import NewsCard from './NewsCard/NewsCard';
import useLogic from './useLogic';
import { classes } from './News.styles';

export default function News() {
	// Hooks
	const { news, noNews } = useLogic();

	if (noNews) return <NoData />;

	return (
		<div className={classes.wrapper}>
			{news?.map((item: ArticleI, i: number) => (
				<NewsCard
					key={i}
					image={item?.urlToImage}
					heading={item?.title}
					description={item?.description}
				/>
			))}
		</div>
	);
}
