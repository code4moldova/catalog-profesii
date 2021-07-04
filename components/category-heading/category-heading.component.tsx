import clsx from 'clsx';

export type CategoryHeadingProps = {
  title: string;
  icon?: string;
  color?: string;
};

export function CategoryHeading(props: CategoryHeadingProps) {
  const { title, color, icon } = props;

  return (
    <div className={clsx('flex items-center p-4 bg-white border-b-4', color)}>
      <img src={icon} alt={icon} className="w-10 h-10" />
      <p className="font-bold ml-7">{title}</p>
    </div>
  );
}
