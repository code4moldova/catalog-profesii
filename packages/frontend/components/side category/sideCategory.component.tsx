import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  borderColor?: string;
  textColor?: string;
  icon?: string;
}>;

export function SideCategory(props: Props) {
  const { className, borderColor, textColor, children, icon } = props;
  return (
    <div className={clsx('border-l-4', borderColor, textColor, className)}>
      <img src={icon} alt={icon} className={clsx('w-12 h-12 float-left')} />
      <span className={clsx('text-left')}>{children}</span>
    </div>
  );
}
