import type { ButtonPropsI } from './Button.types';

export default function Button({ children }: ButtonPropsI) {
	return (
		<div className="inline-block px-4 py-2 border-1 border-gray-500 rounded-sm mx-auto cursor-pointer hover:bg-gray-50">
			{children}
		</div>
	);
}
