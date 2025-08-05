import { Outlet } from 'react-router';

import { classes } from './AppBody.styles';

export default function AppBody() {
	return (
		<main className={classes.wrapper}>
			<Outlet />
		</main>
	);
}
