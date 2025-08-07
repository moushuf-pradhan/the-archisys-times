import NewsContextProvider from '@/utils/contexts/News/provider';
import NewsDetail from '@/pages/NewsDetail/NewsDetail';
import Provider from '@/components/Provider';

export default function HomeContainer() {
	return (
		<Provider>
			<NewsContextProvider>
				<NewsDetail />
			</NewsContextProvider>
		</Provider>
	);
}
