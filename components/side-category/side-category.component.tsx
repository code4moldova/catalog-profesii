import clsx from 'clsx';
import Image from 'next/image';

export type SideCategoryProps = {
  href?: string;
  title: string;
  icon: string;
  color: string;
};

export function SideCategory(props: SideCategoryProps) {
  const { title, color, icon, href } = props;

  return (
    <a
      href={href}
      className={clsx('flex items-center p-5 bg-white border-l-4', color)}
    >
      <Image src={icon} alt={title} width={40} height={40} />
      <p className="ml-5 font-bold">{title}</p>
    </a>
  );
}
