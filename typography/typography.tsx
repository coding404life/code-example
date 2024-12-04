import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../helpers/utils';

const typographyVariants = cva('whitespace-nowrap font-sfpro font-medium', {
  variants: {
    variant: {
      h1: 'heading-1',
      h2: 'heading-2',
      h3: 'heading-3',
      h4: 'heading-4',
      h5: 'heading-5',
      h6: 'heading-6',
      body: 'font-normal',
      fn: 'text-xs font-normal',
      'body-lg': 'text-lg font-normal',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type VariantName =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'fn'
  | 'body-lg';

const tagMapping: Record<VariantName, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  fn: 'p',
  'body-lg': 'p',
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  variant?: VariantName;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variant && tagMapping[variant]) || 'p';

    return (
      <Comp
        className={cn(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
