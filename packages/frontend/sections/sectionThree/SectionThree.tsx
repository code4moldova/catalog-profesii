import { Container } from '../../components/grid/container.component';
import { Row } from '../../components/grid/row.component';
import { Column } from '../../components/grid/column.component';
import React from 'react';
import Card from './components/Card';
import { DataType } from './components/DataType';

interface SectionThreeProps {
  data: DataType[];
}

const SectionThree: React.FC<SectionThreeProps> = ({ data }) => {
  return (
    <section className="pt-16 pb-20 bg-gray-100">
      <Container>
        <h2 className="font-semibold text-2xl text-center md:text-left">
          Joburile viitorului
        </h2>
        <Row>
          {data.map((item, index) => (
            <Column
              className={`w-full sm:w-1/2 md:w-1/3 mx-auto lg:mx-0 mt-10`}
            >
              <Card {...item} />
            </Column>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SectionThree;
