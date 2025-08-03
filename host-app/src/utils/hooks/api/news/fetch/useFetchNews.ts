import { useQuery } from '@tanstack/react-query';

import { ENDPOINT } from '@constants/endpoints/endpoints';
import type { ArticleI } from '@utils/types/news';

import { fetchNews } from './request';

export function useFetchNews() {
	return useQuery<ArticleI[], Error>({
		queryKey: [ENDPOINT.news.read.key],
		queryFn: fetchNews,
	});
}
