import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import NewsContextProvider from '@/utils/contexts/News/provider';
import NewsDetail from '@/pages/NewsDetail/NewsDetail';

export default function HomeContainer() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NewsContextProvider>
				<NewsDetail />
			</NewsContextProvider>
		</QueryClientProvider>
	);
}
