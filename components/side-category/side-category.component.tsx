import clsx from 'clsx';
import Image from 'next/image';
import { forwardRef, ForwardRefRenderFunction } from 'react';

export type SideCategoryProps = {
  href?: string;
  title: string;
  icon: string;
  color: string;
};

const SideCategoryRender: ForwardRefRenderFunction<
  HTMLAnchorElement,
  SideCategoryProps
> = (props, ref) => {
  const { title, color, icon, ...rest } = props;

  return (
    <a
      className={clsx('flex items-center p-5 bg-white border-l-4', color)}
      {...rest}
      ref={ref}
    >
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="ml-5 font-bold">{title}</p>
    </a>
  );
};

export const SideCategory = forwardRef(SideCategoryRender);
