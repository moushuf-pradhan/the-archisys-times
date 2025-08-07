import { classes } from './Hamburger.styles';

export default function Hamburger() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.line}></div>
			<div className={classes.line}></div>
			<div className={classes.line}></div>
		</div>
	);
}
