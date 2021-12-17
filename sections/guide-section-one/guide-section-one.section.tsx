import clsx from 'clsx';

import { Column, Container, Row } from '../../components/grid';
import { Circle } from '../../components/circle/circle.component';
import { Card } from '../../components/card/card.component';

export function GuideSectionOne(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section className={clsx('pt-12 pb-14 bg-white', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-10/12 xl:w-8/12">
            <>
              <div className="flex items-center column mb-5">
                <Circle className="lg:-ml-20">1</Circle>
                <h3 className="ml-8 font-medium text-2xl">
                  <span>Autocunoaște-te</span>
                </h3>
              </div>
              <span className="mb-10">
                În alegerea unei cariere potrivite, e important să-ți cunoști
                abilitățile și preferințele personale. Fă testele de mai jos
                pentru a înțelege mai bine ce abilități și personalitate ai.
              </span>
            </>

            <Column className="flex flex-col sm:flex-row sm:mt-5">
              <Column className="sm:w-1/2 mt-5 sm:mt-0">
                <Card {...data} />
              </Column>
              <Column className="sm:w-1/2 mt-10 sm:mt-0">
                <Card {...data} />
              </Column>
            </Column>
          </Column>
        </Row>
      </Container>
    </section>
  );
}

const data = {
  image: 'https://picsum.photos/400/125',
  imageAlt: 'Test',
  title: 'Test de carieră',
  description:
    'Acest test îți arată inclinația către tipuri de profesie. Analizând ce îți place să faci în viața de zi cu zi, testul îți  arată în ce domeniu ți-ar place să lucrezi.',
  captionList: ['Tipul carierei potrivite', 'Descrierea tipului carierei'],
  captionTitle: 'La ce să atragi atenția?',
  linkUrl: 'https://dreamfoundation.eu',
  linkText: 'Ia testul',
};

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
