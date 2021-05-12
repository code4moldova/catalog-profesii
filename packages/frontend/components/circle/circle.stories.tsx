import { Meta, Story } from '@storybook/react';
import { Circle as CircleComponent } from './circle.component';

export default {
  title: 'Circle',
} as Meta;

export const Circle: Story = () => (
  <div className="flex gap-4">
    <CircleComponent
      borderColor="border-red-500"
      textColor="text-red-500"
      children={1}
    />
    <CircleComponent>2</CircleComponent>
    <CircleComponent
      borderColor="border-indigo-500"
      textColor="text-indigo-500"
      children={3}
    />
    <CircleComponent>4</CircleComponent>
    <CircleComponent
      borderColor="border-yellow-500"
      textColor="text-yellow-500"
      children={5}
    />
    <CircleComponent>6</CircleComponent>
  </div>
);
