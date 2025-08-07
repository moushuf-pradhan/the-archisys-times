import GlobalContext from './context';
import useGettersAndSetters from './useGettersAndSetters';
import type { ProviderProps } from './types';

export default function GlobalContextProvider({ children }: ProviderProps) {
	return (
		<GlobalContext.Provider value={useGettersAndSetters()}>
			{children}
		</GlobalContext.Provider>
	);
}
