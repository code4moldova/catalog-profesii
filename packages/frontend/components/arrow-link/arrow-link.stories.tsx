import { Meta, Story } from '@storybook/react';
import { ArrowLink as Component } from './arrow-link.component';

export default {
  title: 'Components / Arrow Link',
  component: Component,
} as Meta;

export const ArrowLink: Story = () => (
  <div className="grid grid-cols-2 gap-3 text-blue-500">
    <Component href="#">Front-end Developer</Component>
    <Component href="#">Backend-end Developer</Component>
    <Component href="#">Full-Stack Developer</Component>
    <Component href="#">Web Administrator</Component>
    <Component href="#">Designer grafic</Component>
    <Component href="#">UX Designer</Component>
    <Component href="#">UI Designer</Component>
    <Component href="#">Illustrator</Component>
  </div>
);
