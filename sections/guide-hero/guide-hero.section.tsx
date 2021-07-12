import React from 'react';
import { Column, Container, Row } from '../../components/grid';
import rafiki from './assets/rafiki.svg';
import Image from 'next/image';
import group1 from './assets/group1.svg';
import group2 from './assets/group2.svg';
import group3 from './assets/group3.svg';
import clsx from 'clsx';
import { Circle } from '../../components/circle/circle.component';

export function GuideHero(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section className={clsx('bg-blue-100 pt-12 pb-14', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="xl:w-10/12">
            <div className="flex flex-col justify-center sm:flex-row sm:justify-start items-center mb-20">
              <div className="2xl:-ml-24 mb-8 sm:mb-0">
                <div className="relative w-24 h-24 2xl:-ml-5">
                  <Image src={rafiki} layout="fill" />
                </div>
              </div>
              <h3 className="ml-5 font-semibold text-2xl">
                <span className="text-blue-500">Încă nu ai decis?</span>
                <br />
                <span>Urmează ghidul de mai jos.</span>
              </h3>
            </div>

            <h4 className="font-medium text-2xl mb-12">
              Cum să folosești ghidul
            </h4>

            <Row className="space-y-7 md:space-y-0 sm:justify-center">
              {data.map((item: Data, index: number) => {
                const ListType = item.list_type === 'ordered' ? 'ol' : 'ul';

                return (
                  <Column className="w-full sm:w-2/3 md:w-1/3" key={index}>
                    <div className="mx-auto w-2/3 mb-7">
                      <div className="aspect-w-1 aspect-h-1">
                        <Image
                          src={item.image}
                          alt={item.image_alt}
                          layout="fill"
                        />
                      </div>
                    </div>

                    <div className="mb-7 font-light text-sm">{item.title}</div>

                    <ListType className="space-y-3">
                      {item.list_items.map((listItem, index) => (
                        <li className="flex items-baseline" key={index}>
                          {item.list_type === 'ordered' && (
                            <Circle
                              textColor="text-blue-500"
                              backgroundColor="bg-white"
                              borderColor="border-blue-500"
                              size="small"
                              className="flex-shrink-0"
                            >
                              {index + 1}
                            </Circle>
                          )}

                          {item.list_type === 'dotted' && (
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          )}

                          <span className="ml-4">{listItem}</span>
                        </li>
                      ))}
                    </ListType>
                  </Column>
                );
              })}
            </Row>
          </Column>
        </Row>
      </Container>
    </section>
  );
}

export type Data = {
  image: string;
  title: string;
  image_alt?: string;
  list_type: 'ordered' | 'dotted';
  list_items: string[];
};

const data: Data[] = [
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
