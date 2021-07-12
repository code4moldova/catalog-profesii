import { Meta, Story } from '@storybook/react';
import { Circle as Component } from './circle.component';

export default {
  title: 'Components / Circle',
  // Let's keep controls disabled at the moment
  // component: Component,
} as Meta;

const numbers = [...Array(16)].map((_, index) => {
  return {
    number: index + 1,
    color: `${index + 1}`.padStart(2, '0').padEnd(3, '0'),
  };
});

export const Circle: Story = () => (
  <>
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100 mb-4">
      {numbers.map((item, index) => (
        <Component
          key={item.number}
          borderColor={`border-rainbow-${item.color}`}
          textColor={`text-rainbow-${item.color}`}
          backgroundColor="bg-white"
        >
          {item.number}
        </Component>
      ))}
    </div>
    <div className="flex flex-wrap gap-4 p-4 bg-gray-100">
      {numbers.map((item, index) => (
        <Component
          key={item.number}
          borderColor={`border-rainbow-${item.color}`}
          textColor={`text-rainbow-${item.color}`}
          backgroundColor="bg-white"
          size="small"
        >
          {item.number}
        </Component>
      ))}
    </div>
  </>
);
