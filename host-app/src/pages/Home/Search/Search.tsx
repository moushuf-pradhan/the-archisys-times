import Icon from './Icon';
import useLogic from './useLogic';

export default function Search() {
	// Hooks
	const { handleSearchChange } = useLogic();

	return (
		<div className="relative flex ml-auto w-full max-w-xs mb-8">
			<Icon />
			<input
				type="text"
				onChange={handleSearchChange}
				placeholder="Search..."
				className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-500 "
			/>
		</div>
	);
}
