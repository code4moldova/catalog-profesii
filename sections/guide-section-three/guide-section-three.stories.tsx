import { Meta, Story } from '@storybook/react';
import { GuideSectionThree as Section } from './guide-section-three.section';

export default {
  title: 'Sections / Guide / Guide Section Three',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const GuideSectionTwo: Story = () => <Section />;
