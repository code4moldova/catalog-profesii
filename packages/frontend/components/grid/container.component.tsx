import React from 'react';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}>;

export function Container({ children, className, tag: Tag = 'div' }: Props) {
  return (
    <Tag
      className={clsx(
        'container max-w-5xl mx-auto my-0 px-4 sm:px-8',
        className
      )}
    >
      {children}
    </Tag>
  );
}
