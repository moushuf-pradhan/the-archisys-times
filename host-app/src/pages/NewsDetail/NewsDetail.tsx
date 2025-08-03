import Loader from '@/components/common/Loader/Loader';
import FakeContent from './FakeContent/FakeContent';
import useLogic from './useLogic';

export default function NewsDetail() {
	const { title, content, author, publishedAtFormatted, isLoading } =
		useLogic();

	if (isLoading) return <Loader />;

	return (
		<div className="max-w-[800px] mx-auto">
			<h1 className="text-4xl font-secondary font-bold mb-4 leading-[1.5] break-all">
				{title}
			</h1>
			<div className="flex items-center text-gray-500 mb-6">
				<span>{author}</span>
				<span className="mx-2">|</span>
				<span>{publishedAtFormatted}</span>
			</div>
			<div className="text-justify">
				<p>{content}</p>
				<FakeContent />
			</div>
		</div>
	);
}
