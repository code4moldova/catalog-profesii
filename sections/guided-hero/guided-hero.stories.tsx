import { Story, Meta } from '@storybook/react';
import group1 from './assets/group1.svg';
import group2 from './assets/group2.svg';
import group3 from './assets/group3.svg';

import GuidedHero from './guided-hero';

export default {
  title: 'Sections / Guided-Hero',
  component: GuidedHero,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const data = [
  {
    image: group1,
    title: 'Te sfătuim să treci prin toți pașii care i-am pregătit:',
    list_type: 'ordered',
    image_alt: 'something',
    list_items: [
      'Autocunoaște-te',
      'Explorează domeniile și profesiile existente',
      'Apelează la ajutor (opțional)',
    ],
  },
  {
    image: group2,
    title: 'Ca să treci pașii cu succes, vei avea nevoie de:',
    list_type: 'dotted',
    image_alt: 'something',
    list_items: ['Timp (30min)', 'Imaginație', 'Curiozitate'],
  },
  {
    image: group3,
    title: 'Ce obții din completarea pașilor:',
    list_type: 'dotted',
    image_alt: 'something',
    list_items: [
      'Descoperi valorile, abilitățile și prioritățile personale.',
      'Claritate - vei fi cu un pas mai aproape de alegerea carierei.',
      'Fișa în format PDF cu caracteristicile tale unice.',
    ],
  },
];

export const GHero: Story = () => <GuidedHero data={data} />;
