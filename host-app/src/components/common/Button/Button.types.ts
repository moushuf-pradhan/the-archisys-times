import type { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ButtonPropsI extends HtmlHTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	loading?: boolean;
}
