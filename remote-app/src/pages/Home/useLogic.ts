import { useFetchNews } from '@hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	const { data: news, isFetching: isFetchingNews } = useFetchNews();

	// Constants
	const hasNews: boolean = news ? news?.length > 0 : false;

	return { hasNews, isFetchingNews };
}
