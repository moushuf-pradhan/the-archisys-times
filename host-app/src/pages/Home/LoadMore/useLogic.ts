import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { useFetchNews } from '@/utils/hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	// Global states
	const { incPage } = useNewsContext();

	// Hooks
	const { isFetching: isFetchingNews } = useFetchNews();

	// Functions
	function handlePaginate() {
		incPage();
	}

	return {
		isFetchingNews,
		handlePaginate,
	};
}
