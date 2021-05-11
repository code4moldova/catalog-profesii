import React from 'react';
import clsx from 'clsx';

export function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-wrap -mx-3', className)}>{children}</div>
  );
}
