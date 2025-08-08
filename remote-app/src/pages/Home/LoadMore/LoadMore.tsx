import Button from '@archisys/ui-components/Button';

import useLogic from './useLogic';
import { classes } from './LoadMore.styles';

export default function LoadMore() {
	// Hooks
	const { isFetchingNews, handlePaginate, returnNull } = useLogic();

	if (returnNull) return null;

	return (
		<div className={classes.wrapper}>
			<Button onClick={handlePaginate} loading={isFetchingNews}>
				Load more
			</Button>
		</div>
	);
}
