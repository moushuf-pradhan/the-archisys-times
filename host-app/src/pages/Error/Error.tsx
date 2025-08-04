import { Link } from 'react-router';

export default function Error() {
	return (
		<div className=" flex items-center justify-center">
			<div className="text-center">
				<p className="text-2xl mt-4">Something Went Wrong</p>
				<p className="text-gray-600 mt-2">
					An unexpected error occurred. Please try again later.
				</p>
				<Link
					to="/"
					className="inline-block px-4 py-2  bg-gray-700 text-white rounded-sm mx-auto cursor-pointer hover:bg-gray-600"
				>
					Go to Home
				</Link>
			</div>
		</div>
	);
}
