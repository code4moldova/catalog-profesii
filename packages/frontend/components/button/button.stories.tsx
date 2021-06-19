import { Meta, Story } from '@storybook/react';
import { Button as ButtonComponent } from './button.component';
import { ComponentProps } from 'react';

export default {
  title: 'Button',
  component: ButtonComponent,
  args: {
    label: 'Vezi toate profesiile',
  },
} as Meta;

type StoryProps = ComponentProps<typeof ButtonComponent> & {
  label: string;
};

export const Button: Story<StoryProps> = ({ label, ...rest }) => (
  <ButtonComponent {...rest}>
    <button>{label}</button>
  </ButtonComponent>
);
