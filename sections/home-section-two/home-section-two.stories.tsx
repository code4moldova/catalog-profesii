import { Meta, Story } from '@storybook/react';
import { HomeSectionTwo as Section } from './home-section-two.section';

export default {
  title: 'Sections / Home / Home Section Two',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const HomeSectionTwo: Story = () => <Section />;
