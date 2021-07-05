import { Meta, Story } from '@storybook/react';
import { Breadcrumbs as Component } from './breadcrumbs.component';

export default {
  title: 'Components / Breadcrumbs',
  component: Component,
} as Meta;

const links = [
  { title: 'Toate domeniile', url: 'link 1' },
  { title: 'IT (Tehnologii Informaționale)', url: 'link 2' },
  { title: 'Design', url: 'link 3' },
  { title: 'title 4', url: 'link 4' },
];

export const Breadcrumbs: Story = () => <Component links={links} />;
