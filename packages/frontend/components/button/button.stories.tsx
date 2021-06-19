import { Meta, Story } from '@storybook/react';
import { Button as Component, ButtonProps } from './button.component';

export default {
  title: 'Button',
  component: Component,
  args: {
    label: 'Vezi toate profesiile',
  },
} as Meta;

type StoryArgs = ButtonProps & {
  label: string;
};

export const Button: Story<StoryArgs> = ({ label, ...rest }) => (
  <Component {...rest}>
    <button>{label}</button>
  </Component>
);
