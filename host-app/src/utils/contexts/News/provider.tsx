import NewsContext from './context';
import useGettersAndSetters from './useGettersAndSetters';
import type { ProviderProps } from './types';

export default function NewsContextProvider({ children }: ProviderProps) {
	return (
		<NewsContext.Provider value={useGettersAndSetters()}>
			{children}
		</NewsContext.Provider>
	);
}
