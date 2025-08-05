import Button from '@/components/common/Button/Button';

import useLogic from './useLogic';
import { classes } from './LoadMore.styles';

export default function LoadMore() {
	// Hooks
	const { isFetchingNews, handlePaginate, noData } = useLogic();

	if (noData) return null;

	return (
		<div className={classes.wrapper}>
			<Button onClick={handlePaginate} loading={isFetchingNews}>
				Load more
			</Button>
		</div>
	);
}
