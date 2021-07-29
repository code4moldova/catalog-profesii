import { Meta, Story } from '@storybook/react';
import { GuideSectionTwo as Section } from './guide-section-two.section';

export default {
  title: 'Sections / Guide / Guide Section Two',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const GuideSectionTwo: Story = () => <Section />;
