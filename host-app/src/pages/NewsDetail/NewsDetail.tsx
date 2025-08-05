import Loader from '@/components/common/Loader/Loader';

import FakeContent from './FakeContent/FakeContent';
import useLogic from './useLogic';
import Back from './Back/Back';
import { classes } from './NewsDetail.styles';

export default function NewsDetail() {
	const { title, content, author, publishedAtFormatted, isLoading } =
		useLogic();

	if (isLoading) return <Loader />;

	return (
		<div className={classes.wrapper}>
			<Back />
			<h1 className={classes.heading}>{title}</h1>
			<div className={classes.meta.wrapper}>
				<span>{author}</span>
				<span className={classes.meta.divider}>|</span>
				<span>{publishedAtFormatted}</span>
			</div>
			<div className={classes.body}>
				<p>{content}</p>
				<FakeContent />
			</div>
		</div>
	);
}
