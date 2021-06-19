import * as Icons from '../icons';

const unCamelCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1 $2');

// TODO: see why Object.fromEntries is complaining
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const iconItems: Record<string, any> = Object.fromEntries(
  Object.entries(Icons).map(([key, value]) => {
    const random = String(Math.floor(Math.random() * 16))
      .padStart(2, '0')
      .padEnd(3, '0');

    return [
      key,
      {
        title: unCamelCase(key),
        icon: value,
        // see tailwind.config.js
        // border-rainbow-010 ... border-rainbow-160
        color: `border-rainbow-${random}`,
        href: '#',
      },
    ];
  })
);
