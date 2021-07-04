import { Meta, Story } from '@storybook/react';
import { Button as Component, ButtonProps } from './button.component';

export default {
  title: 'Components / Button',
  component: Component,
  args: {
    label: 'Vezi toate profesiile',
  },
} as Meta;

type StoryArgs = ButtonProps & {
  label: string;
};

export const Button: Story<StoryArgs> = ({ label, ...rest }) => (
  <div className="flex flex-wrap gap-3">
    <div>
      <label>Button</label>
      <br />
      <Component {...rest}>
        <button>{label}</button>
      </Component>
    </div>
    <div>
      <label>Link</label>
      <br />
      <Component {...rest}>
        <a href="https://code4.md" target="_blank">
          {label}
        </a>
      </Component>
    </div>
    <div>
      <label>Tag</label>
      <br />
      <Component {...rest}>
        <span>{label}</span>
      </Component>
    </div>
  </div>
);
