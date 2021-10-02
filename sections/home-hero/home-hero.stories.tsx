import { Story, Meta } from '@storybook/react';
import { HomeHero as Section } from './home-hero.section';

export default {
  title: 'Sections / Home / Home Hero',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const HomeHero: Story = () => <Section />;
