import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { debounce } from '@/utils/functions/global';

export default function useLogic() {
	// Global states
	const { setParams } = useNewsContext();

	// Functions
	const handleSearch = debounce((value: string) => {
		setParams({ q: value });
	}, 400);

	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		handleSearch(e.target.value);
	}

	return {
		handleSearchChange,
	};
}
