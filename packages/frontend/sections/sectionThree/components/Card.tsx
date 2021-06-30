import { Button } from '../../../components/button/button.component';
import React from 'react';
import { DataType } from './DataType';

const Card = ({
  icon,
  title,
  buttonText,
  buttonLink,
  description,
}: DataType) => {
  return (
    <div className="bg-white py-9 px-5 h-full">
      <img src={icon} alt="" className="mb-4" />
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <Button size="xsmall" variant="outline">
        <a href={buttonLink}>{buttonText}</a>
      </Button>
      <p className="font-light text-sm mt-4">{description}</p>
    </div>
  );
};

export default Card;
