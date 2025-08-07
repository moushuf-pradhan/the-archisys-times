import Hamburger from './Hamburger/Hamburger';
import Links from './Links/Links';
import { classes } from './NavBar.styles';

export default function NavBar() {
	return (
		<nav className={classes.wrapper}>
			<div className={classes.inner}>
				<Hamburger />
				<Links />
			</div>
		</nav>
	);
}
