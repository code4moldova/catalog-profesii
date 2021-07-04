import { Meta, Story } from '@storybook/react';
import {
  ExternalCard as Component,
  ExternalCardProps,
} from './external-card.component';

export default {
  title: 'Components / External Card',
  component: Component,
  args: {
    href: '#',
    header: 'Marketing',
    icon: 'https://picsum.photos/seed/external-card/512/512',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  } as ExternalCardProps,
} as Meta;

export const ExternalCard: Story<ExternalCardProps> = (args) => (
  <Component {...args} />
);
