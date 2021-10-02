import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Column, Container, Row } from '../../components/grid';
import jobHunt from './assets/1JobHunting.svg';
import resume from './assets/2resume.svg';
import locatingJob from './assets/3location.svg';
import findingJob from './assets/4Find.svg';
import clsx from 'clsx';

export function SectionTwo(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section {...rest} className={clsx('bg-white', className)}>
      <Container className="pt-5 sm:pt-10">
        <h2 className="my-10 leading-8 sm:text-center lg:text-left">
          Punem la dispoziția ta{' '}
          <span className="text-blue-500">următoarele instrumente</span>
        </h2>
        <Row>
          {data.map((component) => (
            <Column
              key={component.title}
              className="w-full sm:w-1/2 lg:w-1/4 flex justify-center lg:justify-start"
            >
              <Card
                title={component.title}
                subtitle={component.subtitle}
                image={component.image}
                linkText={component?.linkText}
                link={component?.link}
                alt={component.alt}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  );
}

type CardData = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  alt: string;
  linkText?: string;
  link?: string;
};

const data: CardData[] = [
  {
    image: jobHunt,
    title: 'Catalogul profesiilor',
    subtitle:
      'Acest catalog te va informa despre toate oportunitățile în alegerea unei cariere. Cu toții știm că există multe tipuri de doctori, dar știai că există zeci de tipuri de programiști?',
    alt: 'Catalogul profesiilor',
    linkText: 'Vezi catalogul',
    link: '/toate-domeniile',
  },
  {
    image: resume,
    title: 'Detalii despre job-uri',
    subtitle:
      'Alege un job și află detalii utile despre ce reprezintă și ce pași trebuie să iai ca să ajungi acel specialist.',
    alt: 'Detalii despre job-uri',
  },
  {
    image: locatingJob,
    title: 'Ghid în alegerea profesiei',
    subtitle:
      'Consultă-te cu ghidul nostru pentru a învăța o structură eficientă în alegerea unei cariere și pregătirea pentru aceasta.',
    alt: 'Ghid în alegerea profesiei',
    linkText: 'Vezi ghidul',
    link: '/cum-aleg-profesia',
  },
  {
    image: findingJob,
    title: 'Resurse utile',
    subtitle:
      'Am pregătit link-uri și resurse utile ca să-ți simplificăm căutarea pe internet.',
    alt: 'Resurse utile',
  },
];

function Card({ title, subtitle, link, linkText, alt, image }: CardData) {
  return (
    <div className="pt-11 pb-9">
      <Image src={image} alt={alt} className="block mx-auto" />
      <h2
        style={{ fontFamily: 'Montserrat' }}
        className="text-base my-4 font-semibold"
      >
        {title}
      </h2>
      <p className="text-base font-light leading-6 w-72 sm:w-64 mb-6">
        {subtitle}
      </p>
      {linkText && link ? (
        <Link href={link}>
          <a className="text-sm text-blue-400 ">{linkText}</a>
        </Link>
      ) : null}
    </div>
  );
}
