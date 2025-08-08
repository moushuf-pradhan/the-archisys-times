import { classes } from './NoData.styles';
import { defaultMsg } from './NoData.utils';
import type { NoDataPropsI } from './NoData.types';

export default function NoData({ message = defaultMsg }: NoDataPropsI) {
	return (
		<div className={classes.wrapper}>
			{/* <d style={styles.icon}></d */}
			<p className={classes.message}>{message}</p>
		</div>
	);
}
