import clsx from 'clsx';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { Column, Container, Row } from '../../components/grid';
import { Circle } from '../../components/circle/circle.component';
import { Button } from '../../components/button/button.component';
import { Panel } from '../../components/panel/panel.component';
import { ExternalCard } from '../../components/external-card/external-card.component';

export function GuideSectionThree(props: JSX.IntrinsicElements['section']) {
  // const [buttonInPanels, setButtonInPanels] = useState<[{}]>([{}]);
  const { className, ...rest } = props;
  return (
    <section className={clsx('pt-12 pb-14 bg-white', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-10/12 xl:w-8/12">
            <div>
              <div className="flex items-center column mb-5">
                <Circle className="lg:-ml-20">3</Circle>
                <h3 className="ml-8 font-medium text-2xl">
                  <span>Ok, ce fac mai departe?</span>
                </h3>
              </div>
              <span className="mb-10">
                Dacă ai nevoie de ghidare adăugătoare, îți oferim câteva surse
                adiționale:
              </span>
            </div>

            {data.map((item, index) => (
              <Row className="mb-10 mt-10" key={index}>
                <Column className="flex-1 sm:w-2/4 md:w-2/5 mb-5 sm:mb-0">
                  <Panel title={item.title}>
                    {item.children.map((item, index) => {
                      return (
                        <>
                          {item.button && (
                            <Link href="#">
                              <Button
                                size="small"
                                variant="outline"
                                className="mb-5"
                              >
                                <span>{item.buttonSlug}</span>
                              </Button>
                            </Link>
                          )}
                          <ExternalCard
                            key={index}
                            href={'#'}
                            header={item.title}
                            description={item.description}
                            links={item.links}
                          />
                        </>
                      );
                    })}
                  </Panel>
                </Column>
              </Row>
            ))}
          </Column>
        </Row>
      </Container>
    </section>
  );
}

const data: {
  title: string;
  children: {
    button?: boolean;
    buttonSlug?: string;
    title: string;
    description: string;
    icon: string;
    links: { title: string; slug: string }[];
  }[];
}[] = [
  {
    title: 'Solicită ajutor de la profesioniști',
    children: [
      {
        button: false,
        title: 'Centre de ghidare în carieră',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        icon: '',
        links: [
          {
            title: 'Something1',
            slug: 'Something',
          },
          {
            title: 'Something1',
            slug: 'Something',
          },
        ],
      },
    ],
  },
  {
    title: 'Obține experiență practică',
    children: [
      {
        button: true,
        buttonSlug: 'Voluntariat',
        title: 'Centre de ghidare în carieră',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        icon: '',
        links: [
          {
            title: 'Something1',
            slug: 'Something',
          },
        ],
      },
    ],
  },
];
