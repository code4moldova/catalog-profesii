import React from 'react';
import { Container } from '../../grid/container.component';
import { Row } from '../../grid/row.component';
import { Column } from '../../grid/column.component';

import jobHunt from '../assets/sectionTwo/1JobHunting.svg';
import resume from '../assets/sectionTwo/2resume.svg';
import locatingJob from '../assets/sectionTwo/3location.svg';
import findingJob from '../assets/sectionTwo/4Find.svg';

import SectionTwoComponent from './SectionTwo.component';

const componentsData: {
  image?: string;
  title: string;
  subtitle: string;
  alt?: string;
  linkText?: string;
  link?: string;
}[] = [
  {
    image: jobHunt,
    title: 'Catalogul profesiilor',
    subtitle:
      'Acest catalog te va informa despre toate oportunitățile în alegerea unei cariere. Cu toții știm că există multe tipuri de doctori, dar știai că există zeci de tipuri de programiști?',
    alt: 'Catalogul profesiilor',
    linkText: 'Vezi catalogul',
    link: '#',
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
    link: '#',
  },
  {
    image: findingJob,
    title: 'Resurse utile',
    subtitle:
      'Am pregătit link-uri și resurse utile ca să-ți simplificăm căutarea pe internet.',
    alt: 'Resurse utile',
  },
];

const SectionTwo = () => {
  return (
    <Container tag="div">
      <h1
        style={{ fontFamily: 'Montserrat', fontWeight: 600 }}
        className="text-2xl mt-11 mb-24 ml-4"
      >
        Punem la dispoziția ta{' '}
        <span className="text-blue-500">următoarele instrumente</span>
      </h1>
      <Row>
        {componentsData.map((component) => (
          <Column className="my-0 mx-auto">
            <SectionTwoComponent
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
  );
};

export default SectionTwo;
