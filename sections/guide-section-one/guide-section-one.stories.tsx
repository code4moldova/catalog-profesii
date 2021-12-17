import { Meta, Story } from '@storybook/react';
import { GuideSectionOne as Section } from './guide-section-one.section';

export default {
  title: 'Sections / Guide / Guide Section One',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const GuideSectionTwo: Story = () => <Section />;
