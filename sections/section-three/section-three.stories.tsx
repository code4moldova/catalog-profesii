import { Meta, Story } from '@storybook/react';
import { SectionThree as Section } from './section-three.section';

export default {
  title: 'Sections / Section Three',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const SectionThree: Story = () => <Section />;
