import type { Parameters } from '@storybook/react';
import * as NextImage from 'next/image';
import '../tailwind.css';

// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: NextImage.ImageProps) => (
    <OriginalNextImage {...props} unoptimized />
  ),
});

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
