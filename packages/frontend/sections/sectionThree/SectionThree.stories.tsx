import img1 from './assets/1.svg';
import img2 from './assets/2.svg';
import img3 from './assets/3.svg';
import { Meta, Story } from '@storybook/react';
import SectionThree from './SectionThree';

export default {
  title: 'SectionThree / Sections',
} as Meta;

const dataa = [
  {
    icon: img1,
    title: 'Specialist Inteligență Artificială',
    buttonText: 'IT (Tehnologii Informaționale)',
    buttonLink: '#',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
  {
    icon: img2,
    title: 'Specialist Inteligență Artificială',
    buttonText: 'IT (Tehnologii Informaționale)',
    buttonLink: '#',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
  {
    icon: img3,
    title: 'Specialist Inteligență Artificială',
    buttonText: 'IT (Tehnologii Informaționale)',
    buttonLink: '#',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
];

export const Section: Story = () => {
  return <SectionThree data={dataa} />;
};
