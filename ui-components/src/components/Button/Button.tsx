import { classes } from './Button.styles';
import type { ButtonPropsI } from './Button.types';

export default function Button({ children, loading, ...rest }: ButtonPropsI) {
	return (
		<div className={classes.wrapper} {...rest}>
			{loading ? 'Loading...' : children}
		</div>
	);
}
