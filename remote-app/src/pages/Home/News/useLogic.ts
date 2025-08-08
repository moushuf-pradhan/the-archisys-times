import useNewsContext from '@/utils/contexts/News/useNewsContext';

export default function useLogic() {
	// Global states
	// @ts-expect-error // Add types later
	const { news, noNews } = useNewsContext();

	return {
		news,
		noNews,
	};
}
