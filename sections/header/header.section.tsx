import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as CloseIcon } from './assets/close';
import { ReactComponent as MenuIcon } from './assets/menu';
import { ReactComponent as LogoIcon } from './assets/Logo';
import { Container } from '../../components/grid';

const MobileLinks: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <CloseIcon
          className="w-6 h-6 block md:hidden"
          onClick={() => setOpen(false)}
        />
      ) : (
        <MenuIcon
          className="w-6 h-6 block md:hidden"
          onClick={() => setOpen(true)}
        />
      )}

      {open ? (
        <div className="absolute left-4 top-20 bg-white block md:hidden mx-auto px-8 right-4">
          <div className="flex rounded-md border-2">
            <input
              type="text"
              placeholder="Căutare profesie"
              className="border-none outline-none w-72 py-2.5 pl-4 pr-3 "
            />
            <div className="ml-auto mr-4 flex items-center">
              <Search />
            </div>
          </div>
          <ul className="mx-auto text-center ">
            <li className="mt-2">
              <Link href={`#`}>
                <a className="w-4">Toate domeniile</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href={`#`}>
                <a className="w-4">Cum aleg profesia?</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href={`#`}>
                <a className="bg-gray-200 underline py-0.5 px-2">РУ</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

const DesktopLinks: React.FC = () => (
  <div className="hidden md:block">
    <ul className="flex items-center max-w-md justify-around">
      <li className="text-sm">
        <Link href={`#`}>
          <a>Toate domeniile</a>
        </Link>
      </li>
      <li className="ml-10 text-sm">
        <Link href={`#`}>
          <a>Cum aleg profesia?</a>
        </Link>
      </li>
      <li className="ml-8 text-sm	bg-gray-200 underline py-0.5 px-2">
        <Link href={`#`}>
          <a>РУ</a>
        </Link>
      </li>
    </ul>
  </div>
);

export function Header(props: JSX.IntrinsicElements['header']) {
  return (
    <header {...props}>
      <Container className="h-15 py-4 shadow-sm md:shadow-none sm:shadow-none bg-white flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <LogoIcon className="cursor-pointer" />
            </a>
          </Link>

          <div className="flex border-2 rounded-md md:ml-10 sm:ml-10 ">
            <input
              type="text"
              placeholder="Căutare profesie"
              className="border-none outline-none w-42 hidden md:block py-2.5 pl-4 pr-3"
            />
            <div className="hidden md:flex pr-3 ml-auto items-center">
              <Search />
            </div>
          </div>
        </div>
        <DesktopLinks />
        <MobileLinks />
      </Container>
    </header>
  );
}

const Search = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.8067 10.86L9.54 8.6C10.2713 7.66831 10.6681 6.51777 10.6667 5.33334C10.6667 4.2785 10.3539 3.24736 9.76784 2.37029C9.18181 1.49323 8.34885 0.809646 7.37431 0.405978C6.39978 0.00231083 5.32742 -0.103307 4.29285 0.102481C3.25829 0.308269 2.30798 0.81622 1.5621 1.5621C0.81622 2.30798 0.308269 3.25829 0.102481 4.29285C-0.103307 5.32742 0.00231083 6.39978 0.405978 7.37431C0.809646 8.34885 1.49323 9.18181 2.37029 9.76784C3.24736 10.3539 4.2785 10.6667 5.33334 10.6667C6.51777 10.6681 7.66831 10.2713 8.6 9.54L10.86 11.8067C10.922 11.8692 10.9957 11.9188 11.077 11.9526C11.1582 11.9864 11.2453 12.0039 11.3333 12.0039C11.4213 12.0039 11.5085 11.9864 11.5897 11.9526C11.671 11.9188 11.7447 11.8692 11.8067 11.8067C11.8692 11.7447 11.9188 11.671 11.9526 11.5897C11.9864 11.5085 12.0039 11.4213 12.0039 11.3333C12.0039 11.2453 11.9864 11.1582 11.9526 11.077C11.9188 10.9957 11.8692 10.922 11.8067 10.86ZM1.33334 5.33334C1.33334 4.54221 1.56793 3.76885 2.00746 3.11106C2.44698 2.45326 3.0717 1.94057 3.8026 1.63782C4.53351 1.33507 5.33777 1.25585 6.1137 1.41019C6.88962 1.56454 7.60235 1.9455 8.16176 2.50491C8.72117 3.06432 9.10214 3.77705 9.25648 4.55297C9.41082 5.3289 9.3316 6.13317 9.02885 6.86407C8.7261 7.59497 8.21341 8.21969 7.55562 8.65921C6.89782 9.09874 6.12446 9.33334 5.33334 9.33334C4.27247 9.33334 3.25505 8.91191 2.50491 8.16176C1.75476 7.41162 1.33334 6.3942 1.33334 5.33334Z"
      fill="#ABABAB"
    />
  </svg>
);
