import React from 'react';
import { Row } from '../../components/grid/row.component';
import { Column } from '../../components/grid/column.component';
import { Container } from '../../components/grid/container.component';
import rafiki from './assets/rafiki.svg';
import { howToUseGuidedDataArray } from './type';
import HowToAdvices from './how-to-advices';
import Image from 'next/image';

const GuidedHero: React.FC<howToUseGuidedDataArray> = ({ data }) => {
  return (
    <section className="bg-blue-100">
      <Container>
        <div className="pt-12 pb-8 ">
          <Row className="items-center">
            <Column>
              <Image src={rafiki} />
            </Column>
            <Column>
              <h3 className="items-center font-semibold text-2xl">
                <span className="text-blue-500">Încă nu ai decis?</span>{' '}
                <br></br> Urmează ghidul de mai jos.
              </h3>
            </Column>
          </Row>
        </div>
        <div className="pt-12 pb-14">
          <Row>
            <Column>
              <h4 className="font-medium text-2xl mx-auto">
                Cum să folosești ghidul
              </h4>
            </Column>
          </Row>
          <HowToAdvices data={data} />
        </div>
      </Container>
    </section>
  );
};

export default GuidedHero;
