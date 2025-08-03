import Icon from './Icon';
import type { NoDataPropsI } from './NoData.types';
import { defaultMsg } from './NoData.utils';

export default function NoData({ message = defaultMsg }: NoDataPropsI) {
	return (
		<div className="flex flex-col items-center justify-center h-full text-gray-500">
			<Icon />
			<p className="text-xl">{message}</p>
		</div>
	);
}
