import { Meta, Story } from '@storybook/react';
import { CareerGrowth as Component } from './career-growth.component';

export default {
  title: 'Components / Career Growth',
  component: Component,
} as Meta;

export const CareerGrowth: Story = () => (
  <Component
    jobs={[
      { name: 'Junior Graphic Desinger', future: false },
      { name: 'Middle Graphic Designer', future: false },
      { name: 'Senior Designer', future: true },
      { name: 'Art Director', future: true },
      { name: 'Creative Director', future: true },
    ]}
  />
);
