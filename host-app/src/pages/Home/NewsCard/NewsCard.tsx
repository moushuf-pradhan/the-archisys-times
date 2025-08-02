import { Link } from 'react-router';

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
				<h2 className="text-xl font-semibold mb-2">{heading}</h2>
				<p className="text-gray-600">{description}</p>
				<Link
					to="/detail"
					className="text-blue-600 hover:underline mt-2 inline-block"
				>
					Read More
				</Link>
			</div>
		</div>
	);
}
