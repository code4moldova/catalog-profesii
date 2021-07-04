import clsx from 'clsx';
import Image from 'next/image';

export type CategoryHeadingProps = {
  title: string;
  icon: string;
  color?: string;
};

export function CategoryHeading(props: CategoryHeadingProps) {
  const { title, color, icon } = props;

  return (
    <div className={clsx('flex items-center p-4 bg-white border-b-4', color)}>
      <Image src={icon} width={40} height={40} alt={icon} />
      <p className="font-bold ml-7">{title}</p>
    </div>
  );
}
