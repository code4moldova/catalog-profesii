import { Meta, Story } from '@storybook/react';
import { Circle as CircleComponent } from './circle.component';

export default {
  title: 'Circle',
} as Meta;

export const Circle: Story = () => (
  <div className="flex flex-wrap gap-4">
    <CircleComponent
      borderColor="border-rainbow-010"
      textColor="text-rainbow-010"
      children="010"
    />
    <CircleComponent
      borderColor="border-rainbow-020"
      textColor="text-rainbow-020"
      children="020"
    />
    <CircleComponent
      borderColor="border-rainbow-030"
      textColor="text-rainbow-030"
      children="030"
    />
    <CircleComponent
      borderColor="border-rainbow-040"
      textColor="text-rainbow-040"
      children="040"
    />
    <CircleComponent
      borderColor="border-rainbow-050"
      textColor="text-rainbow-050"
      children="050"
    />
    <CircleComponent
      borderColor="border-rainbow-060"
      textColor="text-rainbow-060"
      children="060"
    />
    <CircleComponent
      borderColor="border-rainbow-070"
      textColor="text-rainbow-070"
      children="070"
    />
    <CircleComponent
      borderColor="border-rainbow-080"
      textColor="text-rainbow-080"
      children="080"
    />
    <CircleComponent
      borderColor="border-rainbow-090"
      textColor="text-rainbow-090"
      children="090"
    />
    <CircleComponent
      borderColor="border-rainbow-100"
      textColor="text-rainbow-100"
      children="100"
    />
    <CircleComponent
      borderColor="border-rainbow-110"
      textColor="text-rainbow-110"
      children="110"
    />
    <CircleComponent
      borderColor="border-rainbow-120"
      textColor="text-rainbow-120"
      children="120"
    />
    <CircleComponent
      borderColor="border-rainbow-130"
      textColor="text-rainbow-130"
      children="130"
    />
    <CircleComponent
      borderColor="border-rainbow-140"
      textColor="text-rainbow-140"
      children="140"
    />
    <CircleComponent
      borderColor="border-rainbow-150"
      textColor="text-rainbow-150"
      children="150"
    />
    <CircleComponent
      borderColor="border-rainbow-160"
      textColor="text-rainbow-160"
      children="160"
    />
  </div>
);
