import { ReactNode } from 'react';

export interface ProviderProps {
	children: ReactNode;
}

export interface NewsParamsI {
	page: number;
}

// export interface ReturnI {
// 	params: NewsParamsI;
// 	setParams: (update: NewsParamsI) => void;
// 	incPage: () => void;
// }
