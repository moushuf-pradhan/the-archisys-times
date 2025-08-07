import Icon from './Icon';
import useLogic from './useLogic';
import { classes } from './Back.styles';

export default function Back() {
	// Hooks
	const { handleBack } = useLogic();

	return (
		<div className={classes.wrapper} onClick={handleBack}>
			<Icon />
		</div>
	);
}
