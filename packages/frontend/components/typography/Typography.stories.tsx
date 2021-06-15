import { Meta, Story } from '@storybook/react';
import { Typography as TypographyComponent } from './Typography';

export default {
  title: 'Typography',
} as Meta;

export const Typography: Story = () => (
  <>
    <TypographyComponent tag="h1">Heading</TypographyComponent>
    <TypographyComponent tag="h2">Heading</TypographyComponent>
    <TypographyComponent tag="h3">Heading</TypographyComponent>
    <TypographyComponent tag="h4">Heading</TypographyComponent>
    <TypographyComponent tag="h2" body="regular">
      Heading
    </TypographyComponent>
  </>
);
