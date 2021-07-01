import React from 'react';
import { ReactComponent as Icon } from './assets/Vector.svg';

export function ArrowLink({ children, ...rest }: JSX.IntrinsicElements['a']) {
  return (
    <div className="flex items-center">
      <Icon className="mr-1" />
      <a {...rest}>{children}</a>
    </div>
  );
}
