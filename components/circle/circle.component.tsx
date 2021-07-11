import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  size?: CircleSize;
}>;

type CircleSize = keyof typeof circleSizes;
const circleSizes = {
  small: 'h-5 w-5 text-sm border',
  medium: 'h-12 w-12 text-2xl border-2',
};

export function Circle(props: Props) {
  const {
    className,
    children,
    borderColor = 'border-blue-300',
    textColor = 'text-blue-400',
    backgroundColor = 'bg-transparent',
    size,
  } = props;

  const _size: CircleSize = size ?? 'medium';

  return (
    <span
      className={clsx(
        'inline-block rounded-full inline-flex items-center justify-center',
        borderColor,
        textColor,
        backgroundColor,
        circleSizes[_size],
        className
      )}
    >
      {children}
    </span>
  );
}
