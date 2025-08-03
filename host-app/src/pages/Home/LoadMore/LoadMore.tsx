import Button from '@/components/common/Button/Button';
import useLogic from './useLogic';

export default function LoadMore() {
	// Hooks
	const { isFetchingNews, handlePaginate } = useLogic();

	return (
		<div className="text-center mt-12 ">
			<Button onClick={handlePaginate} loading={isFetchingNews}>
				Load more
			</Button>
		</div>
	);
}
