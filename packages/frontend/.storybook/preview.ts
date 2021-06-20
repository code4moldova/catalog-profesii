import type { Parameters } from '@storybook/react';
import '../tailwind.css';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on.*' },
};
