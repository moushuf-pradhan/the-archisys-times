import { useFetchNews } from '@hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	// Hooks
	const { data: news, isFetching: isFetchingNews } = useFetchNews();

	return { news, isFetchingNews };
}
