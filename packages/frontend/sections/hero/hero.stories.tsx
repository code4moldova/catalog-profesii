import { Story, Meta } from '@storybook/react';
import { Hero as Section } from './hero.section';

export default {
  title: 'Sections / Hero',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Hero: Story = () => <Section />;
