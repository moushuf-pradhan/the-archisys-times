import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { ENDPOINT } from '@constants/endpoints/endpoints';
import type { ArticleI } from '@utils/types/news';

import { fetchNews } from './request';

export function useFetchNews() {
	// Global states
	const { params } = useNewsContext();

	// Hooks
	const navigate = useNavigate();

	const res = useQuery<ArticleI[], Error>({
		queryKey: [ENDPOINT.news.read.key, params],
		queryFn: () => fetchNews(params),
		placeholderData: keepPreviousData,
		retry: 0,
	});

	if (res?.error) navigate('/error');

	return res;
}
