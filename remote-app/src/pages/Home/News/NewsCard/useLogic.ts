import { slugify } from '@utils/functions/global';

export default function useLogic(title: string) {
	const slug = slugify(title);

	return {
		slug,
	};
}
