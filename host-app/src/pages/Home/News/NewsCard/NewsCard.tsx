import { Link } from 'react-router';

import { truncate } from '@utils/functions/global';

import type { NewsCardPropsI } from './NewsCard.types';
import useLogic from './useLogic';

export default function NewsCard({
	image,
	heading,
	description,
}: NewsCardPropsI) {
	// Hooks
	const { slug } = useLogic(heading);

	return (
		<div className="bg-white rounded-sm shadow-md overflow-hidden">
			<img
				src={image}
				alt="News preview"
				className="w-full h-48 object-cover"
				loading="lazy"
			/>
			<div className="p-4">
				<Link
					to={`/${slug}`}
					className="hover:text-gray-500 mt-2 inline-block hover:gray-200"
				>
					<h2 className="text-xl font-secondary font-semibold mb-2">
						{heading}
					</h2>
					<p className="text-gray-600">
						{truncate(description, 150)}
					</p>
				</Link>
			</div>
		</div>
	);
}
