import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from '@/pages/Home/Home';
import NewsContextProvider from '@/utils/contexts/News/provider';

export default function HomeContainer() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NewsContextProvider>
				<Home />
			</NewsContextProvider>
		</QueryClientProvider>
	);
}
