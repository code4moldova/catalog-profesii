import { Meta, Story } from '@storybook/react';
import { Typography as Component } from './typography';

export default {
  title: 'Typography',
  component: Component,
} as Meta;

export const Typography: Story = () => (
  <>
    <Component tag="h1">Heading</Component>
    <Component tag="h2">Heading</Component>
    <Component tag="h3">Heading</Component>
    <Component tag="h4">Heading</Component>
    <Component tag="h2" body="regular">
      Heading
    </Component>
  </>
);
