import { keepPreviousData, useQuery } from '@tanstack/react-query';

import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { ENDPOINT } from '@constants/endpoints/endpoints';
import type { ArticleI } from '@utils/types/news';

import { fetchNews } from './request';

export function useFetchNews() {
	const { params } = useNewsContext();

	return useQuery<ArticleI[], Error>({
		queryKey: [ENDPOINT.news.read.key, params],
		queryFn: () => fetchNews(params),
		placeholderData: keepPreviousData,
	});
}
