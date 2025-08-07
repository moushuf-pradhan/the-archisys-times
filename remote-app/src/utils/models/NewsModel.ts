import { slugify } from '@functions/global';
import type { ArticleI } from '@utils/types/news';

export class NewsModel {
	news: ArticleI[];

	constructor(news: ArticleI[] | undefined) {
		this.news = news || [];
	}

	getNewsBySlug(title?: string): ArticleI | undefined {
		return this.news?.find(news => slugify(news.title) == slugify(title));
	}
}
