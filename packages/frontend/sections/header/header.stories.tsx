import { Meta, Story } from '@storybook/react';
import { Header as Section } from './header.section';

export default {
  title: 'Sections / Header',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Header: Story = () => <Section />;
