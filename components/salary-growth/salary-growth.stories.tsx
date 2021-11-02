import { Meta, Story } from '@storybook/react';
import { SalaryGrowth as Component } from './salary-growth.component';

export default {
  title: 'Components / Salary Growth',
  component: Component,
} as Meta;

export const SalaryGrowth: Story = () => (
  <Component low={6000} medium={10000} high={12000} />
);
