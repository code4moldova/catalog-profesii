import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  borderColor?: string;
  textColor?: string;
}>;

export function Circle(props: Props) {
  const {
    className,
    children,
    borderColor = 'border-blue-300',
    textColor = 'text-blue-400',
  } = props;
  return (
    <div
      className={clsx(
        'rounded-full h-12 w-12 inline-flex items-center justify-center border-2 text-2xl',
        borderColor,
        textColor,
        className
      )}
    >
      {children}
    </div>
  );
}
