// NoData.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import NoData from './NoData';
import { classes } from './NoData.styles';
import { defaultMsg } from './NoData.utils';

describe('NoData Component', () => {
	it('renders default message when no message prop is given', () => {
		render(<NoData />);
		expect(screen.getByText(defaultMsg)).toBeInTheDocument();
	});

	it('renders custom message when provided', () => {
		const customMessage = 'No items found';
		render(<NoData message={customMessage} />);
		expect(screen.getByText(customMessage)).toBeInTheDocument();
	});

	it('applies wrapper and message classes', () => {
		render(<NoData />);
		const wrapper = screen.getByText(defaultMsg).parentElement;
		expect(wrapper).toHaveClass(classes.wrapper);
		expect(screen.getByText(defaultMsg)).toHaveClass(classes.message);
	});
});
