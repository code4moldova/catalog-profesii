import { Meta, Story } from '@storybook/react';
import { SideCategory as Component } from './sideCategory.component';

export default {
  title: 'SideCategory',
} as Meta;

export const SideCategory: Story = () => (
  <div className="flex gap-4">
    <Component
      className="rounded"
      borderColor="border-green-300"
      textColor="text-green-300"
      icon="https://img.icons8.com/ios/452/tractor.png"
    >
      Agricultură
    </Component>
    <Component
      className="rounded"
      borderColor="border-green-300"
      textColor="text-green-300"
      icon="https://img.icons8.com/ios/452/tractor.png"
    >
      Transport
    </Component>
    <Component
      className="rounded"
      borderColor="border-green-300"
      textColor="text-green-300"
      icon="https://img.icons8.com/ios/452/tractor.png"
      children="Transport"
    />
  </div>
);
