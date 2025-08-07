import { classes } from './Links.styles';
import { links } from './Links.utils';

export default function Links() {
	return (
		<div className={classes.links}>
			{links?.map(item => (
				<div key={item.key} className={classes.link}>
					{item.label}
				</div>
			))}
		</div>
	);
}
