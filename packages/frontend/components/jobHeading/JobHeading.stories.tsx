import { Meta, Story } from '@storybook/react';
import JobHunting from './JobHeading.component';
import image from './assets/ant.svg';

export default {
  title: 'JobHunting',
} as Meta;

const ex = {
  image,
  text: 'Marketing',
  color: '#DDDF70',
};

export const JobHeading: Story = () => (
  <JobHunting image={ex.image} text={ex.text} color={ex.color} />
);
