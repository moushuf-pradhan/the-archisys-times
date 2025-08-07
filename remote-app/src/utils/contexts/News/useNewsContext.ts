import { useContext } from 'react';

import NewsContext from './context';

const useNewsContext = () => useContext(NewsContext);

export default useNewsContext;
