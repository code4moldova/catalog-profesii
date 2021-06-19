import { Meta, Story } from '@storybook/react';
import { Tag as TagComponent } from './Tag.component';

export default {
  title: 'Tag',
  component: TagComponent,
  args: {
    label: 'Tag example',
  },
} as Meta;

export const DefaultTag: Story = ({ label, ...rest }) => (
  <TagComponent {...rest}>
    <span>{label}</span>
  </TagComponent>
);
