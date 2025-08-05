import { Link } from 'react-router';

import { truncate } from '@utils/functions/global';

import useLogic from './useLogic';
import { classes } from './NewsCard.styles';
import type { NewsCardPropsI } from './NewsCard.types';

export default function NewsCard({
	image,
	heading,
	description,
}: NewsCardPropsI) {
	// Hooks
	const { slug } = useLogic(heading);

	return (
		<div className={classes.wrapper}>
			<img
				src={image}
				alt="News preview"
				className={classes.image}
				loading="lazy"
			/>
			<div className="p-4">
				<Link to={`/${slug}`} className={classes.link}>
					<h2 className={classes.heading}>{heading}</h2>
					<p className={classes.description}>
						{truncate(description, 150)}
					</p>
				</Link>
			</div>
		</div>
	);
}
