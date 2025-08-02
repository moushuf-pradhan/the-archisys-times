import Button from '@components/common/Button/Button';

import NewsCard from './NewsCard/NewsCard';

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{Array.from({ length: 10 }).map((_, index) => (
					<NewsCard
						key={index}
						image="https://images.pexels.com/photos/33148681/pexels-photo-33148681.jpeg"
						heading="Breaking News Title"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua."
					/>
				))}
			</div>
			<div className="text-center mt-12 ">
				<Button>Read more</Button>
			</div>
		</>
	);
}
