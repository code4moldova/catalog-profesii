import * as Icons from '../icons';

const unCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2');

export const iconItems: Record<string, any> = Object.fromEntries(
  Object.entries(Icons).map(([key, value]) => [
    key,
    {
      title: unCamelCase(key),
      icon: value,
      // see tailwind.config.js
      // border-rainbow-010 ... border-rainbow-160
      href: '#',
    },
  ])
);

export function getRainbowColors() {
  const colors = [];

  for (let i = 1; i < 17; i++) {
    const color = String(i).padStart(2, '0').padEnd(3, '0');
    colors.push(`border-rainbow-${color}`);
  }

  return colors;
}
