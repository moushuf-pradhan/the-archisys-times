import type { ArticleI } from '@/utils/types/news';

export interface ResI {
	status: string;
	totalResults: number;
	articles: ArticleI[];
}

// export interface ReqI {}
