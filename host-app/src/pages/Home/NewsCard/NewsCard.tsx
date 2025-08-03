import { Link } from 'react-router';

import { truncate } from '@utils/functions/global';

import type { NewsCardPropsI } from './NewsCard.types';

export default function NewsCard({
	image,
	heading,
	description,
}: NewsCardPropsI) {
	return (
		<div className="bg-white rounded-sm shadow-md overflow-hidden">
			<img
				src={image}
				alt="News 1"
				className="w-full h-48 object-cover"
				loading="lazy"
			/>
			<div className="p-4">
				<Link
					to="/detail"
					className="hover:text-gray-600 mt-2 inline-block"
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
