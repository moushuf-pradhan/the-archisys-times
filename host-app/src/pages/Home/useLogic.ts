import { useState } from 'react';

import { useFetchNews } from '@hooks/api/news/fetch/useFetchNews';

export default function useLogic() {
	// Local states
	const [page, setPage] = useState<number>(1);

	// Hooks
	const { data: news, isFetching: isFetchingNews } = useFetchNews({ page });

	// Constants
	const hasNews: boolean = news ? news?.length > 0 : false;

	// Functions - start
	function handlePaginate() {
		if (isFetchingNews) return;

		setPage(prev => prev + 1);
	}
	// Functions - end

	return { news, hasNews, isFetchingNews, handlePaginate };
}
