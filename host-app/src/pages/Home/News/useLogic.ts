import { useFetchNews } from '@utils/hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	// Hooks
	const { data: news } = useFetchNews();

	return {
		news,
	};
}
