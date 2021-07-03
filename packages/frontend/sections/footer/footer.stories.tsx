import { Meta, Story } from '@storybook/react';
import { Footer as Section } from './footer.section';

export default {
  title: 'Sections / Footer',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Footer: Story = () => <Section />;
