import { Meta, Story } from '@storybook/react';
import { Input as Component } from './input.component';

export default {
  title: 'Components / Input',
  component: Component,
} as Meta;

export const Input: Story = () => (
  <div className="grid gap-3 grid-cols-2">
    <Component type="text" placeholder="Nume" />
    <Component type="text" placeholder="Prenume" />
    <Component type="search" placeholder="Search" />
    <Component type="password" placeholder="Password" />
  </div>
);
