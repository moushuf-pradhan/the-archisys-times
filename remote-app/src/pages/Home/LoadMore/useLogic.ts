import useNewsContext from '@/utils/contexts/News/useNewsContext';

export default function useLogic() {
	// Global states
	// @ts-expect-error // Add types later
	const { noNews, isFetchingNews, fetchNextPage, hasNextPage } =
		useNewsContext();

	// Constants
	const returnNull = noNews || !hasNextPage;

	// Functions
	function handlePaginate() {
		fetchNextPage();
	}

	return {
		isFetchingNews,
		handlePaginate,
		returnNull,
	};
}
