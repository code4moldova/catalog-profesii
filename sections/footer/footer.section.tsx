import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Row, Container, Column } from '../../components/grid';
import codeForMoldova from './assets/code-for-moldova.svg';

export function Footer(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;

  return (
    <section className={clsx('bg-white', className)} {...rest}>
      <Container>
        <Row className="pt-12 pb-4">
          <Column className="w-full sm:w-1/2 md:w-1/3 mb-10 md:mb-0">
            <div className="p-6 space-y-1.5 border border-gray-100 shadow-md text-sm text-gray-400 inline-block mx-auto">
              <p>Creat de</p>
              <a
                href="https://code4.md/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block"
              >
                <Image
                  src={codeForMoldova}
                  width={100}
                  height={50}
                  alt="code for moldova logo"
                />
              </a>
              <p>
                Organizație neguvernamentală <br />
                independentă, neafiliată politic
              </p>
            </div>
          </Column>
          <Column className="w-full sm:w-1/2 md:w-1/3 mb-10 md:mb-0 md:flex justify-center lg:justify-start">
            <ul className="space-y-1">
              <li>
                <Link href="/cum-aleg-cariera">
                  <a className="font-medium text-sm">Cum aleg cariera?</a>
                </Link>
              </li>
              <li>
                <Link href="/toate-domeniile">
                  <a className="font-medium text-sm">Toate domeniile</a>
                </Link>
              </li>
              <li>
                <Link href="/despre-noi">
                  <a className="font-medium text-sm">Despre noi</a>
                </Link>
              </li>
              <li>
                <Link href="/termeni-si-conditii">
                  <a className="font-medium text-sm">Termeni și Condiții</a>
                </Link>
              </li>
            </ul>
          </Column>
          <Column className="w-full md:w-1/3">
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <a
                href="https://code4.md/facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="inline"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.8571 0H5.14286C3.77889 0 2.47078 0.541835 1.50631 1.50631C0.541835 2.47078 0 3.77889 0 5.14286L0 42.8571C0 44.2211 0.541835 45.5292 1.50631 46.4937C2.47078 47.4582 3.77889 48 5.14286 48H19.8482V31.6811H13.0982V24H19.8482V18.1457C19.8482 11.4868 23.8125 7.80857 29.8843 7.80857C32.7921 7.80857 35.8329 8.32714 35.8329 8.32714V14.8629H32.4825C29.1814 14.8629 28.1518 16.9114 28.1518 19.0125V24H35.5211L34.3425 31.6811H28.1518V48H42.8571C44.2211 48 45.5292 47.4582 46.4937 46.4937C47.4582 45.5292 48 44.2211 48 42.8571V5.14286C48 3.77889 47.4582 2.47078 46.4937 1.50631C45.5292 0.541835 44.2211 0 42.8571 0Z"
                    fill="#1096F5"
                  />
                </svg>
              </a>
            </div>
          </Column>
        </Row>
        <div className="text-center text-gray-500 text-xs py-5">
          profesii.md © {new Date().getFullYear()}
        </div>
      </Container>
    </section>
  );
}
