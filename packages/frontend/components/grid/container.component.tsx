import React from 'react';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}>;

export function Container({ children, className, tag: Tag = 'div' }: Props) {
  return (
    <Tag className={clsx('lg:container mx-auto px-3', className)}>
      {children}
    </Tag>
  );
}
