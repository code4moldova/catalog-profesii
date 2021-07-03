import React from 'react';
import clsx from 'clsx';

const classes = 'px-3';

export function Column(props: JSX.IntrinsicElements['div']) {
  const { className, ...rest } = props;
  return <div className={clsx(classes, className)} {...rest} />;
}
