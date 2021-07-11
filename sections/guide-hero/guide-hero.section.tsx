import React from 'react';
import { Column, Container, Row } from '../../components/grid';
import rafiki from './assets/rafiki.svg';
import Image from 'next/image';
import group1 from './assets/group1.svg';
import group2 from './assets/group2.svg';
import group3 from './assets/group3.svg';
import clsx from 'clsx';

export function GuideHero(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section className={clsx('bg-blue-100 pt-12 pb-14', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="xl:w-10/12">
            <div className="flex items-center pb-8">
              <div className="2xl:-ml-24">
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
            <div className="pt-12">
              <h4 className="font-medium text-2xl mx-auto">
                Cum să folosești ghidul
              </h4>
              <Row>
                {data.map((item: Data, index: number) => (
                  <Column
                    className="w-full sm:w-1/2 md:w-1/3 mt-12"
                    key={index}
                  >
                    {/* TODO */}
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.image_alt}
                        className="mx-auto mb-6"
                        layout="fill"
                      />
                    </div>

                    <span className="mt-7 font-light text-sm w-2">
                      {item.title}
                    </span>
                    {item.list_type === 'ordered' ? (
                      <ol className="mt-7">
                        {item.list_items.map((item, index) => (
                          <li className="flex items-center mb-3" key={index}>
                            <div className="w-6 h-6 mr-4 rounded-full flex items-center justify-center border-2 bg-white text-blue-500 border-blue-500">
                              <span className="text-center">{index + 1}</span>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul>
                        {item.list_items.map((item) => (
                          <li
                            className={
                              index === 2
                                ? 'flex items-start m-0 p-0 mb-3 mt-7'
                                : 'flex items-center m-0 p-0 mb-3 mt-7'
                            }
                            key={index}
                          >
                            <div
                              className={
                                index === 2
                                  ? 'w-2 h-2 mr-4 bg-blue-500 rounded-full mt-2'
                                  : 'w-2 h-2 mr-4 bg-blue-500 rounded-full'
                              }
                            />
                            <span className="w-48">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Column>
                ))}
              </Row>
            </div>
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
