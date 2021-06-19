import clsx from 'clsx';

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
      <img src={icon} alt={title} className="w-10 h-10" />
      <p className="ml-5 font-bold">{title}</p>
    </a>
  );
}
