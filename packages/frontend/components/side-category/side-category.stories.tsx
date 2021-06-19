import { Meta, Story } from '@storybook/react';
import {
  SideCategory as Component,
  SideCategoryProps,
} from './side-category.component';
import * as Icons from '../../icons';

const disable = {
  table: {
    disable: true,
  },
};

const unCamelCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1 $2');

// TODO: see why Object.fromEntries is complaining
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const items: Record<string, SideCategoryProps> = Object.fromEntries(
  Object.entries(Icons).map(([key, value]) => {
    const random = String(Math.floor(Math.random() * 16))
      .padStart(2, '0')
      .padEnd(3, '0');

    return [
      key,
      {
        title: unCamelCase(key),
        icon: value,
        // see tailwind.config.js
        // border-rainbow-010 ... border-rainbow-160
        color: `border-rainbow-${random}`,
        href: '#',
      } as SideCategoryProps,
    ];
  })
);

export default {
  title: 'Side Category',
  component: Component,
  argTypes: {
    title: disable,
    icon: disable,
    color: disable,
    href: disable,
    industry: {
      name: 'Industry',
      options: Object.keys(items),
      defaultValue: Object.keys(items)[0],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const SideCategory: Story = (args) => {
  const title = items[args.industry].title;
  const icon = items[args.industry].icon;
  const color = items[args.industry].color;
  const href = items[args.industry].href;

  return (
    <div className="grid gap-3 p-3 bg-gray">
      <Component title={title} icon={icon} color={color} href={href} />
      <Component title={title} icon={icon} color={color} href={href} />
      <Component title={title} icon={icon} color={color} href={href} />
    </div>
  );
};
