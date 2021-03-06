import { Meta, Story } from '@storybook/react';
import { CategoryHeading as Component } from './category-heading.component';
import { getRainbowColors, iconItems } from '../../utils/icons-story-helpers';
import { disableControl } from '../../utils/disable-control';

const rainbowColors = getRainbowColors();

export default {
  title: 'Components / Category Heading',
  component: Component,
  argTypes: {
    title: disableControl,
    icon: disableControl,
    color: disableControl,
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

export const CategoryHeading: Story = (args) => {
  const { title, icon } = iconItems[args.industry];

  return (
    <div className="grid gap-3 p-3 bg-gray-100">
      <Component title={title} color={args.border} icon={icon} />
      <Component title={title} color={args.border} icon={icon} />
      <Component title={title} color={args.border} icon={icon} />
    </div>
  );
};
