import React from 'react';
import { Button } from '../../components/button/button.component';
import Link from 'next/link';
import { Container } from '../../components/grid/container.component';

import heroImage from './assets/Frame.svg';
import { Row } from '../../components/grid/row.component';
import { Column } from '../../components/grid/column.component';

export const Hero = () => {
  return (
    <section className="bg-blue-100 pt-">
      <Container>
        <Row className="items-center py-hero">
          <Column className="md:w-1/2">
            <h1 className="leading-14 font-bold tracking-wide text-5xl sm:text-center md:text-left">
              Fă o alegere conștientă în viitoarea profesie
            </h1>
            <p className="font-medium text-sm mt-3.5 sm:text-center md:text-left">
              Am pregătit informații utile ca să-ți ușurăm alegerea viitoarei
              profesii. Consultă-te cu resursele afișate pe site.
            </p>
            <div className="flex sm:items-center md:justify-start justify-center  mb-20 mt-10">
              <Button variant="contained" size="large" color="blue">
                <a href={'#'}>Vezi toate profesiile</a>
              </Button>

              <Button variant="contained" size="large" color="darkblue">
                <a className="ml-2.5" href={'#'}>
                  Nu știu ce profesie să aleg
                </a>
              </Button>
            </div>
          </Column>
          <img src={heroImage} alt="" className="mx-auto md:mx-0" />
        </Row>
      </Container>
    </section>
  );
};
