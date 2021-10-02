import { Meta, Story } from '@storybook/react';
import { HomeSectionOne as Section } from './home-section-one.section';

export default {
  title: 'Sections / Home / Home Section One',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const HomeSectionOne: Story = () => <Section />;
