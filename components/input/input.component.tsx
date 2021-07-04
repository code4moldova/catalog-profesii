import React from 'react';
import clsx from 'clsx';

export function Input({ className, ...rest }: JSX.IntrinsicElements['input']) {
  return (
    <input
      {...rest}
      className={clsx('border-2 rounded-md px-3 py-2', className)}
    />
  );
}
