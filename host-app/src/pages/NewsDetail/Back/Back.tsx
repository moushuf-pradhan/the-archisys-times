import Icon from './Icon';
import useLogic from './useLogic';

export default function Back() {
	// Hooks
	const { handleBack } = useLogic();

	return (
		<div
			className="border-1 inline-flex border-gray-500 px-3 py-1 rounded-sm font-small mb-6 cursor-pointer hover:bg-gray-100"
			onClick={handleBack}
		>
			<Icon />
		</div>
	);
}
