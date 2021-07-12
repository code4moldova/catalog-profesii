import { Story, Meta } from '@storybook/react';
import { GuideHero as Section } from './guide-hero.section';

export default {
  title: 'Sections / Guide Hero',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const GuideHero: Story = () => <Section />;
