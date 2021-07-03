import { Story, Meta } from '@storybook/react';
import { Hero as Component } from './hero.section';

export default {
  title: 'Sections / Hero',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Hero: Story = () => <Component />;
