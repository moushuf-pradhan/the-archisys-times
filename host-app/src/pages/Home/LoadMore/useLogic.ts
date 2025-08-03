import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { useFetchNews } from '@/utils/hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	// Global states
	const { incPage } = useNewsContext();

	// Hooks
	const { data: news, isFetching: isFetchingNews } = useFetchNews();

	// Constants
	const noData: boolean = news?.length === 0;

	// Functions
	function handlePaginate() {
		incPage();
	}

	return {
		isFetchingNews,
		handlePaginate,
		noData,
	};
}
