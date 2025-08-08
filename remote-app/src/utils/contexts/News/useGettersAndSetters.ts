import { useState } from 'react';

import { useFetchNews } from '@/utils/hooks/api/news/fetch/useFetchNews';

import type { NewsParamsI } from './types';

export default function useGettersAndSetters() {
	// Global states
	const [params, setParams] = useState<NewsParamsI>({
		q: '',
	});

	const {
		data,
		isLoading: isLoadingNews,
		isFetching: isFetchingNews,
		...rest
	} = useFetchNews(params);

	const news = data?.pages?.flat();
	const hasNews = news ? news?.length > 0 : false;
	const noNews = !news || news?.length === 0;

	// Functions
	function updateParams(update: NewsParamsI) {
		setParams(prev => ({
			...prev,
			...update,
		}));
	}

	return {
		news,
		hasNews,
		noNews,
		isLoadingNews,
		isFetchingNews,
		params,
		updateParams,
		...rest,
	};
}
