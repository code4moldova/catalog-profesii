import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/button/button.component';
import { Column, Container, Row } from '../../components/grid';
import heroImage from './assets/hero-image.svg';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="bg-blue-100">
      <Container>
        <Row className="items-center py-10 lg:py-28">
          <Column className="w-full md:w-1/2">
            <h1 className="sm:text-center md:text-left leading-12 font-bold tracking-wide">
              Fă o alegere conștientă în viitoarea profesie
            </h1>
            <p className="font-medium text-sm mt-3.5 sm:text-center md:text-left">
              Am pregătit informații utile ca să-ți ușurăm alegerea viitoarei
              profesii. Consultă-te cu resursele afișate pe site.
            </p>
            <div className="flex sm:items-center md:justify-start justify-center mb-10 lg:mb-0 mt-10">
              <Link href="/toate-domeniile" passHref>
                <Button variant="contained" size="large" color="blue">
                  <a>Vezi toate profesiile</a>
                </Button>
              </Link>

              <Link href="/cum-aleg-profesia" passHref>
                <Button variant="contained" size="large" color="darkblue">
                  <a className="ml-2.5">Nu știu ce profesie să aleg</a>
                </Button>
              </Link>
            </div>
          </Column>
          <Column className="w-full md:w-1/2">
            <Image
              src={heroImage}
              width={410}
              height={410}
              alt=""
              layout="responsive"
              className="mx-auto md:mx-0"
            />
          </Column>
        </Row>
      </Container>
    </section>
  );
}
