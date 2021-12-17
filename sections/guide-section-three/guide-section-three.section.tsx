import clsx from 'clsx';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { Column, Container, Row } from '../../components/grid';
import { Circle } from '../../components/circle/circle.component';
import { Button } from '../../components/button/button.component';
import { Panel } from '../../components/panel/panel.component';
import { ExternalCard } from '../../components/external-card/external-card.component';

// Icons
import Building from '../../icons/guide-section-three/building-house.svg';
import Psycho from '../../icons/guide-section-three/psicholog.svg';
import Mentor from '../../icons/guide-section-three/mentor.svg';
import Rabota from '../../icons/guide-section-three/rabota.svg';
import Cntm from '../../icons/guide-section-three/cntm.svg';

export function GuideSectionThree(props: JSX.IntrinsicElements['section']) {
  // const [buttonInPanels, setButtonInPanels] = useState<[{}]>([{}]);
  const { className, ...rest } = props;
  return (
    <section className={clsx('pt-12 pb-14 bg-white', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-10/12 xl:w-8/12">
            <>
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
            </>

            {data.map((item, index) => (
              <Row className="mb-10 mt-10" key={index}>
                <Column className="flex-1 sm:w-2/4 md:w-2/5 mb-5 sm:mb-0">
                  <Panel title={item.title}>
                    {item.children.map((item, index) => {
                      return (
                        <div className="mt-5" key={index}>
                          {item.button && (
                            <Button
                              size="small"
                              variant="outline"
                              className="mb-5 cursor-pointer"
                            >
                              <span>{item.buttonSlug}</span>
                            </Button>
                          )}
                          <ExternalCard
                            key={index}
                            href={'#'}
                            header={item.title}
                            description={item.description}
                            links={item.links}
                            className="mt-5"
                            icon={item.Icon}
                          />
                        </div>
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
    Icon: React.ReactNode | string;
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
        Icon: Building,
        links: [
          {
            title: '01',
            slug: 'Something',
          },
          {
            title: '02',
            slug: 'Something',
          },
          {
            title: '03',
            slug: 'Something',
          },
          {
            title: '04',
            slug: 'Something',
          },
        ],
      },
      {
        title: 'Psiholog',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        Icon: Psycho,
        links: [
          {
            title: 'SFERA',
            slug: 'Something',
          },
          {
            title: 'reThink Center',
            slug: 'Something',
          },
          {
            title: '03',
            slug: 'Something',
          },
          {
            title: '04',
            slug: 'Something',
          },
        ],
      },
      {
        title: 'Mentorat',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        Icon: Mentor,
        links: [
          {
            title: 'mentorme.md',
            slug: 'mentorme.md',
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
        title: 'Consiliul Național al Tineretului din Moldova',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        Icon: Cntm,
        links: [
          {
            title: 'cntm.md',
            slug: 'cntm.md',
          },
        ],
      },
      {
        title: 'Consiliul Național al Tineretului din Moldova',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis dignissim egestas morbi ac eget nulla tortor.',
        Icon: Rabota,
        links: [
          {
            title: 'rabota.md',
            slug: 'rabota.md',
          },
        ],
      },
    ],
  },
];
