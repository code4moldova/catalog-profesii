import React from 'react';
import clsx from 'clsx';

type TagVariant = 'default' | 'outline';

type Props = {
  children: React.ReactElement;
  variant?: TagVariant;
};

export const Tag = (props: Props) => {
  const { children, variant } = props;
  const _variant = variant ?? 'default';
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    className: clsx(
      'select-none px-2 py-1.5 rounded text-center text-white text-xs font-medium border-2',
      colorVariant[_variant],
      child.props.className
    ),
  });
};

const colorVariant: Record<TagVariant, string> = {
  default: ['bg-blue-500', 'hover:bg-blue-400', 'active:bg-blue-600'].join(' '),
  outline: [
    'text-blue-500 border-blue-500',
    'hover:text-blue-400 hover:border-blue-400',
    'active:border-blue-600 active:bg-blue-300',
  ].join(' '),
};
