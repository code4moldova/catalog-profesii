import React from 'react';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function Column({ children, className }: Props) {
  return <div className={clsx('px-3', className)}>{children}</div>;
}
