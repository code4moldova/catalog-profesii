import { useState } from 'react';
import clsx from 'clsx';

export type PanelProps = {
  title: string;
  collapsable: boolean;
  children: string;
};

export function Panel(props: PanelProps) {
  const { title, collapsable = true, children } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section>
      <div
        onClick={() => collapsable && setCollapsed(!collapsed)}
        className="flex justify-between items-center py-4 px-5 border-b border-gray-200 cursor-pointer"
      >
        <h3 className="text-xl font-medium leading-none">{title}</h3>
        {collapsable && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            className={clsx(
              'transform transition-all duration-300 ease-in-out',
              !collapsed && 'rotate-180',
              collapsed && 'rotate-90'
            )}
          >
            <path
              d="M2.8742e-08 10.5897L2.35 13L10 5.17094L17.65 13L20 10.5897L10 0.333332L2.8742e-08 10.5897Z"
              fill="black"
            />
          </svg>
        )}
      </div>
      <div
        className={clsx(
          'px-4 transform origin-top transition-all duration-300 overflow-hidden',
          collapsed && 'max-h-0 py-0',
          !collapsed && 'max-h-screen py-4'
        )}
      >
        {children}
      </div>
    </section>
  );
}
