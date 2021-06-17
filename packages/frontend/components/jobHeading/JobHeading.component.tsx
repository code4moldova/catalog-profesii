import React from 'react';
import { Column } from '../grid/column.component';
import { Container } from '../grid/container.component';
import { Row } from '../grid/row.component';

type Props = React.PropsWithChildren<{
  image: string;
  text: string;
  color: string;
}>;

const JobHeading = ({ image, text, color }: Props) => {
  return (
    <Container>
      <Column>
        <Row className="flex items-center ml-0.5">
          <img src={image} alt="" className="mr-6" />
          <span>{text}</span>
        </Row>
        <Row>
          <div
            style={{ backgroundColor: color }}
            className="w-11/12 h-1 mt-3.5"
          ></div>
        </Row>
      </Column>
    </Container>
  );
};

export default JobHeading;
