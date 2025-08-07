import { formatDate } from '@/utils/functions/global';
import { useFetchNews } from '@/utils/hooks/api/news/fetch/useFetchNews';
import { NewsModel } from '@/utils/models/NewsModel';
import { useParams } from 'react-router';

export default function useLogic() {
	// Hooks
	const { slug } = useParams();
	const { data: allNews } = useFetchNews();

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
