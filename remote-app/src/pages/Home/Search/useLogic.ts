import useNewsContext from '@/utils/contexts/News/useNewsContext';
import { debounce } from '@/utils/functions/global';

export default function useLogic() {
	// Global states
	// @ts-expect-error // Add types later
	const { updateParams } = useNewsContext();

	// Functions
	const handleSearch = debounce((value: string) => {
		updateParams({ q: value });
	}, 400);

	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		handleSearch(e.target.value);
	}

	return {
		handleSearchChange,
	};
}
