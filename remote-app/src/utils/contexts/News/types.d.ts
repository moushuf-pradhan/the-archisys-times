import { ReactNode } from 'react';

export interface ProviderProps {
	children: ReactNode;
}

export interface NewsParamsI {
	page?: number;
	q?: '';
}
