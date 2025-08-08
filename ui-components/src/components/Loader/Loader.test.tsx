// Loader.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Loader from './Loader';
import { classes } from './Loader.styles';

describe('Loader Component', () => {
	it('renders loading text', () => {
		render(<Loader />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('applies wrapper class', () => {
		render(<Loader />);
		const loader = screen.getByText('Loading...');
		expect(loader).toHaveClass(classes.wrapper);
	});
});
