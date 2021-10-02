import clsx from 'clsx';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Column, Container, Row } from '../../components/grid';
import { Circle } from '../../components/circle/circle.component';
import { Button } from '../../components/button/button.component';

export function GuideSectionTwo(props: JSX.IntrinsicElements['section']) {
  const { className, ...rest } = props;
  return (
    <section className={clsx('pt-12 pb-14', className)} {...rest}>
      <Container>
        <Row className="justify-center">
          <Column className="lg:w-10/12 xl:w-8/12">
            <div className="flex items-center mb-10">
              <Circle className="lg:-ml-20">2</Circle>
              <h3 className="ml-8 font-medium text-2xl">
                <span>Explorează domeniile și profesiile existente</span>
              </h3>
            </div>

            {items.map((item, index) => (
              <Row className="mb-10" key={index}>
                <Column className="w-full sm:w-2/4 md:w-2/5 mb-5 sm:mb-0">
                  {item.type === 'double' && (
                    <Row>
                      <Column className="w-1/2">
                        <item.LeftImage />
                      </Column>
                      <Column className="w-1/2">
                        <item.RightImage />
                      </Column>
                    </Row>
                  )}
                  {item.type === 'single' && <item.Image />}
                </Column>
                <Column className="w-full sm:w-2/4 md:w-3/5 flex items-center text-sm font-light">
                  {item.text}
                </Column>
              </Row>
            ))}

            <Link href="/toate-domeniile" passHref>
              <Button>
                <a>Vezi toate profesiile</a>
              </Button>
            </Link>
          </Column>
        </Row>
      </Container>
    </section>
  );
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
type Double = {
  type: 'double';
  LeftImage: FunctionComponent;
  RightImage: FunctionComponent;
  text: string;
};
type Single = {
  type: 'single';
  Image: FunctionComponent;
  text: string;
};

const items: Array<Double | Single> = [
  {
    type: 'double',
    LeftImage: Square1,
    RightImage: Square1,
    text: 'Alege 2 domenii care îți trezesc interesul.',
  },
  {
    type: 'double',
    LeftImage: Square2,
    RightImage: Square2,
    text: 'Explorează profesiile din acele domenii. ',
  },
  {
    type: 'double',
    LeftImage: Square3Left,
    RightImage: Square3Right,
    text: 'Alege 5 profesii care te atrag cel mai mult.',
  },
  {
    type: 'double',
    LeftImage: Square4Left,
    RightImage: Square4Right,
    text: 'Compară aptitudinile personale cu abilitățile și responsabilitățile profesiilor care te interesează. Cu cât mai mult ele coincid, cu atât mai mult ți se potrivește profesia.Ia în considerare avantajele și dezavantajele fiecărui job.',
  },
  {
    type: 'single',
    Image: Square5,
    text: 'Decizia finală e în mînile tale! Suntem încrezuți că îți va reuși.',
  },
];

function Square1() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
    </svg>
  );
}

function Square2() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
      <rect x="11" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="11" y="48" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="48" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="48" width="32" height="32" rx="5" fill="white" />
      <rect x="11" y="12" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="12" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="12" width="32" height="32" rx="5" fill="white" />
    </svg>
  );
}

function Square3Left() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
      <rect x="11" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="84" width="32" height="32" rx="5" fill="white" />
      <rect x="11" y="48" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="48" width="32" height="32" rx="5" fill="white" />
      <rect
        x="86"
        y="49"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
      <rect
        x="12"
        y="13"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
      <rect x="48" y="12" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="12" width="32" height="32" rx="5" fill="white" />
    </svg>
  );
}

function Square3Right() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
      <rect
        x="12"
        y="85"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
      <rect x="48" y="84" width="32" height="32" rx="5" fill="white" />
      <rect
        x="86"
        y="85"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
      <rect x="11" y="48" width="32" height="32" rx="5" fill="white" />
      <rect
        x="49"
        y="49"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
      <rect x="85" y="48" width="32" height="32" rx="5" fill="white" />
      <rect x="11" y="12" width="32" height="32" rx="5" fill="white" />
      <rect x="48" y="12" width="32" height="32" rx="5" fill="white" />
      <rect x="85" y="12" width="32" height="32" rx="5" fill="white" />
    </svg>
  );
}

function Square4Left() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
      <rect
        x="11"
        y="106"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="88"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="71"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="53"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="12"
        y="13"
        width="30"
        height="30"
        rx="4"
        fill="#FEF2FF"
        stroke="#BA68C8"
        strokeWidth="2"
      />
    </svg>
  );
}

function Square4Right() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="5" fill="#EAEFF7" />
      <rect
        x="11"
        y="106"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="88"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="71"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="53"
        width="106"
        height="11"
        rx="5"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="12"
        y="13"
        width="30"
        height="30"
        rx="4"
        fill="#F2F7FF"
        stroke="#18A0FB"
        strokeWidth="2"
      />
    </svg>
  );
}

function Square5() {
  return (
    <svg viewBox="0 0 278 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="278" height="128" rx="5" fill="#F6FFF1" />
      <mask
        id="mask0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="278"
        height="128"
      >
        <rect width="278" height="128" rx="5" fill="#F6FFF1" />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="139"
          cy="64"
          r="133"
          stroke="#B5DF70"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <circle
          cx="139"
          cy="64"
          r="102"
          stroke="#B5DF70"
          strokeOpacity="0.5"
          strokeWidth="2"
        />
        <circle
          cx="139"
          cy="64"
          r="69"
          stroke="#B5DF70"
          strokeOpacity="0.8"
          strokeWidth="2"
        />
      </g>
      <path
        d="M128.333 65.3333L136.333 73.3332L149.667 57.3333"
        stroke="#B5DF70"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M139 90.6666C153.728 90.6666 165.667 78.7275 165.667 63.9999C165.667 49.2723 153.728 37.3333 139 37.3333C124.272 37.3333 112.333 49.2723 112.333 63.9999C112.333 78.7275 124.272 90.6666 139 90.6666Z"
        stroke="#B5DF70"
        strokeWidth="4"
      />
    </svg>
  );
}
