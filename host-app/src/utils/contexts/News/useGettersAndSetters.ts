import { useState } from 'react';

import type { NewsParamsI } from './types';

export default function useGettersAndSetters() {
	// Global states
	const [params, setParams] = useState<NewsParamsI>({
		page: 1,
	});

	// Functions
	function updateParams(update: NewsParamsI) {
		setParams(prev => ({
			...prev,
			...update,
		}));
	}

	function incPage() {
		setParams(prev => ({
			page: prev?.page + 1,
		}));
	}

	return {
		params,
		setParams: updateParams,
		incPage,
	};
}
