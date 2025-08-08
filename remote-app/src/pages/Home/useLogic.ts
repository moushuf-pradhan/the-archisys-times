import useNewsContext from '@/utils/contexts/News/useNewsContext';

export default function useLogic() {
	// @ts-expect-error // Add types later
	const { hasNews, isLoadingNews } = useNewsContext();

	const showLoader = isLoadingNews && !hasNews;

	return { showLoader };
}
