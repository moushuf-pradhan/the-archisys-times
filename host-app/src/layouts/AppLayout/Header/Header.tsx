import { classes } from './Header.styles';

export default function Header() {
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.heading}>{`the archisys() { times } ;`}</h1>
		</div>
	);
}
