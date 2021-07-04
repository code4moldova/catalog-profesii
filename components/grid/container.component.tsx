import React from 'react';
import clsx from 'clsx';

const classes = 'lg:container mx-auto px-5';

export function Container(props: JSX.IntrinsicElements['div']) {
  const { className, ...rest } = props;
  return <div className={clsx(classes, className)} {...rest} />;
}
