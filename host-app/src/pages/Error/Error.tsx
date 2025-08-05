import { Link } from 'react-router';

import { classes } from './Error.styles';

export default function Error() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<p className={classes.heading}>Something Went Wrong</p>
				<p className={classes.subheading}>
					An unexpected error occurred. Please try again later.
				</p>
				<Link to="/" className={classes.action}>
					Go to Home
				</Link>
			</div>
		</div>
	);
}
