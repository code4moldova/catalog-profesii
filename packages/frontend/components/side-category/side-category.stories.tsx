import { Meta, Story } from '@storybook/react';
import { SideCategory as Component } from './side-category.component';
import { getRainbowColors, iconItems } from '../../utils/icons-story-helpers';
import { disableControl } from '../../utils/disable-control';

const rainbowColors = getRainbowColors();

export default {
  title: 'Components / Side Category',
  component: Component,
  argTypes: {
    title: disableControl,
    icon: disableControl,
    color: disableControl,
    href: disableControl,
    industry: {
      name: 'Industry',
      options: Object.keys(iconItems),
      defaultValue: Object.keys(iconItems)[0],
      control: {
        type: 'select',
      },
    },
    border: {
      name: 'Color',
      options: rainbowColors,
      defaultValue: rainbowColors[0],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const SideCategory: Story = (args) => {
  const { title, icon, href } = iconItems[args.industry];

  return (
    <div className="grid gap-3 p-3 bg-gray">
      <Component title={title} icon={icon} color={args.border} href={href} />
      <Component title={title} icon={icon} color={args.border} href={href} />
      <Component title={title} icon={icon} color={args.border} href={href} />
    </div>
  );
};
