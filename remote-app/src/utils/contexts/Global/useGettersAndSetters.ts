import { useState } from 'react';

import { THEME } from '@utils/enums/global';

export default function useGettersAndSetters() {
	const [theme, setTheme] = useState<THEME>(THEME.Light);

	return {
		theme,
		setTheme,
	};
}
