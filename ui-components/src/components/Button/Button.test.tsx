// Button.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Button from './Button';
import { classes } from './Button.styles';

describe('Button Component', () => {
	it('renders children text when not loading', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('renders loading text when loading is true', () => {
		render(<Button loading>Click Me</Button>);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('applies wrapper class correctly', () => {
		render(<Button>Click Me</Button>);
		const button = screen.getByText('Click Me');
		expect(button).toHaveClass(classes.wrapper);
	});

	it('calls onClick handler when clicked', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText('Click Me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
