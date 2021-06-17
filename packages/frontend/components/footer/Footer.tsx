import React from 'react';
import Link from 'next/link';
import { Row } from '../grid/row.component';
import { Container } from '../grid/container.component';
import { ReactComponent as FacebookLogo } from './assets/fa.svg';
import logoc4md from './assets/logo_c4md.svg';

const Footer = () => {
  return (
    <Container>
      <Row className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-start">
        <div className="sm:mr-32 w-56 pt-6 pb-5 pl-6 shadow-md">
          <span className="mb-1.5 font-normal text-gray-400 text-xs">
            Creat de
          </span>
          <img src={logoc4md} alt="code for moldova logo" className="mb-1.5" />
          <span className="font-normal text-gray-400 text-xs ">
            Organizație neguvernamentală <br></br>
            independentă, neafiliată politic
          </span>
        </div>
        <ul className="sm:mr-52 mt-10 sm:mt-0 sm:mt-6">
          <li className="mb-1">
            <Link href={`#`}>
              <a className="font-medium text-sm">Cum aleg cariera?</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href={`#`}>
              <a className="font-medium text-sm">Toate domeniile</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href={`#`}>
              <a className="font-medium text-sm">Despre noi</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href={`#`}>
              <a className="font-medium text-sm">Termeni și Condiții</a>
            </Link>
          </li>
        </ul>
        <FacebookLogo className="mt-10 sm:mt-6" />
      </Row>
      <Row className="mt-16">
        <h4 className="text-center mx-auto text-gray-400 text-xs align-center">
          profesii.md © 2021
        </h4>
      </Row>
    </Container>
  );
};

export default Footer;
