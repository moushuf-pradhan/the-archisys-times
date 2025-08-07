import Icon from './Icon';
import useLogic from './useLogic';
import { classes } from './Search.styles';

export default function Search() {
	// Hooks
	const { handleSearchChange } = useLogic();

	return (
		<div className={classes.wrapper}>
			<Icon />
			<input
				type="text"
				onChange={handleSearchChange}
				placeholder="Search..."
				className={classes.input}
			/>
		</div>
	);
}
