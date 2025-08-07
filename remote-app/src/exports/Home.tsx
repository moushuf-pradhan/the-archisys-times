import Home from '@/pages/Home/Home';
import NewsContextProvider from '@/utils/contexts/News/provider';
import Provider from '@/components/Provider';

export default function HomeContainer() {
	return (
		<Provider>
			<NewsContextProvider>
				<Home />
			</NewsContextProvider>
		</Provider>
	);
}
