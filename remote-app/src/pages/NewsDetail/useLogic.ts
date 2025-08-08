import { useParams } from 'react-router';

import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { formatDate } from '@/utils/functions/global';
import { NewsModel } from '@/utils/models/NewsModel';

export default function useLogic() {
	// Global states
	// @ts-expect-error // Add types later
	const { news: allNews } = useNewsContext();

	// Hooks
	const { slug } = useParams();

	// Constants
	const news = new NewsModel(allNews);
	const newsDetail = news.getNewsBySlug(slug);
	const publishedAtFormatted = formatDate(newsDetail?.publishedAt);
	const isLoading = !newsDetail;

	return {
		...newsDetail,
		isLoading,
		publishedAtFormatted,
	};
}
