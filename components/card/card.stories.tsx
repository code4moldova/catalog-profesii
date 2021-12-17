import { Story, Meta } from '@storybook/react';
import { Card as Component, CardProps } from './card.component';
import { Column, Container, Row } from '../grid';

export default {
  title: 'Components / Card',
  component: Component,
  args: {
    image: 'https://picsum.photos/400/125',
    imageAlt: 'Test',
    title: 'Test de carieră',
    description:
      'Acest test îți arată inclinația către tipuri de profesie. Analizând ce îți place să faci în viața de zi cu zi, testul îți  arată în ce domeniu ți-ar place să lucrezi.',
    captionList: ['Tipul carierei potrivite', 'Descrierea tipului carierei'],
    captionTitle: 'La ce să atragi atenția?',
    linkUrl: 'https://dreamfoundation.eu',
    linkText: 'Ia testul',
  },
} as Meta<CardProps>;

export const Card: Story<CardProps> = (args) => {
  return (
    <Container>
      <Row>
        <Column className="flex flex-col sm:flex-row">
          <Column className="sm:w-1/2">
            <Component {...args} />
          </Column>
          <Column className="sm:w-1/2 mt-10 sm:mt-0">
            <Component {...args} />
          </Column>
        </Column>
      </Row>
    </Container>
  );
};
