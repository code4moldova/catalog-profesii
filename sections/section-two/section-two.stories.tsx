import { Meta, Story } from '@storybook/react';
import { SectionTwo as Section } from './section-two.section';

export default {
  title: 'Sections / Section Two',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const SectionTwo: Story = () => <Section />;
