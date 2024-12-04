import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'atoms/Typography',
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-lg', 'body', 'fn'],
      },
    },
    asChild: { control: 'boolean' },
  },
};

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    children: 'Primary Typography',
    variant: 'body',
  },
};

export const H1: Story = {
  args: {
    children: 'H1 Typography',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'H2 Typography',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'H3 Typography',
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'H4 Typography',
    variant: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'H5 Typography',
    variant: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'H6 Typography',
    variant: 'h6',
  },
};

export const BodyLG: Story = {
  args: {
    children: 'Body Large Typography',
    variant: 'body-lg',
  },
};

export const Body: Story = {
  args: {
    children: 'Body Typography',
    variant: 'body',
  },
};

export const BodyWithClassName: Story = {
  args: {
    children: 'Body Typography with className',
    variant: 'body',
    className: 'text-red-500',
  },
};

export const Fn: Story = {
  args: {
    children: 'Fn Typography',
    variant: 'fn',
  },
};

export default meta;
