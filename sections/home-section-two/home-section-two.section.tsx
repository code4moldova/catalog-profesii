import React from 'react';
import Image from 'next/image';
import { Column, Container, Row } from '../../components/grid';
import img1 from './assets/1.svg';
import img2 from './assets/2.svg';
import img3 from './assets/3.svg';
import { Button } from '../../components/button/button.component';
import clsx from 'clsx';

export function HomeSectionTwo(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section {...rest} className={clsx('pt-16 pb-20 bg-gray-100', className)}>
      <Container>
        <h2 className="font-semibold text-2xl text-center md:text-left">
          Joburile viitorului
        </h2>
        <Row>
          {data.map((item, index) => (
            <Column
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 mx-auto lg:mx-0 mt-10"
            >
              <Card {...item} />
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  );
}

type CardData = {
  icon: StaticImageData;
  title: string;
  buttonText: string;
  buttonLink: string;
  description: string;
};

function Card({ icon, title, buttonText, buttonLink, description }: CardData) {
  return (
    <div className="bg-white py-9 px-5 h-full">
      <Image src={icon} alt="" className="mb-4" width={75} height={75} />
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <Button size="xsmall" variant="outline">
        <a href={buttonLink}>{buttonText}</a>
      </Button>
      <p className="font-light text-sm mt-4">{description}</p>
    </div>
  );
}

const data = [
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
