import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './typography';

describe('Typography', () => {
  it('should render a p tag by default', () => {
    render(<Typography variant="body">Test</Typography>);
    expect(screen.getByText('Test').tagName.toLowerCase()).toBe('p');
  });

  it('renders with the body variant', () => {
    render(<Typography variant="h1">h1 text</Typography>);
    const h1 = screen.getByText('h1 text');
    expect(h1.tagName.toLowerCase()).toBe('h1');
    expect(h1).toHaveClass('heading-1');
  });

  it('renders with the h2 variant', () => {
    render(<Typography variant="h2">h2 text</Typography>);
    const h2 = screen.getByText('h2 text');
    expect(h2.tagName.toLowerCase()).toBe('h2');
    expect(h2).toHaveClass('heading-2');
  });

  it('renders with the h3 variant', () => {
    render(<Typography variant="h3">h3 text</Typography>);
    const h3 = screen.getByText('h3 text');
    expect(h3.tagName.toLowerCase()).toBe('h3');
    expect(h3).toHaveClass('heading-3');
  });

  it('renders with the h4 variant', () => {
    render(<Typography variant="h4">h4 text</Typography>);
    const h4 = screen.getByText('h4 text');
    expect(h4.tagName.toLowerCase()).toBe('h4');
    expect(h4).toHaveClass('heading-4');
  });

  it('renders with the h5 variant', () => {
    render(<Typography variant="h5">h5 text</Typography>);
    const h5 = screen.getByText('h5 text');
    expect(h5.tagName.toLowerCase()).toBe('h5');
    expect(h5).toHaveClass('heading-5');
  });

  it('renders with the h6 variant', () => {
    render(<Typography variant="h6">h6 text</Typography>);
    const h6 = screen.getByText('h6 text');
    expect(h6.tagName.toLowerCase()).toBe('h6');
    expect(h6).toHaveClass('heading-6');
  });

  it('renders with the body-lg variant', () => {
    render(<Typography variant="body-lg">Body large text</Typography>);
    const bodyLg = screen.getByText('Body large text');
    expect(bodyLg.tagName.toLowerCase()).toBe('p');
    expect(bodyLg).toHaveClass('text-lg');
  });

  it('renders with the body variant', () => {
    render(<Typography variant="body">Body text</Typography>);
    const body = screen.getByText('Body text');
    expect(body.tagName.toLowerCase()).toBe('p');
    expect(body).toHaveClass('font-normal');
  });

  it('renders with the fn variant', () => {
    render(<Typography variant="fn">Footnote text</Typography>);
    const fn = screen.getByText('Footnote text');
    expect(fn.tagName.toLowerCase()).toBe('p');
    expect(fn).toHaveClass('text-xs');
  });
});
