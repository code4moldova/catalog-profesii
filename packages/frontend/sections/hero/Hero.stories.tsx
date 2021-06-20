import { Story, Meta } from '@storybook/react';
import { Hero as Component } from './Hero.section';

export default {
  title: 'Sections / Hero',
  component: Component,
} as Meta;
export const Hero: Story = () => <Component />;
