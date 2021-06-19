import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { ReactComponent as LogoIcon } from './assets/Logo.svg';
import search from './assets/search.svg';
import { Container } from '../../components/grid/container.component';

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
            <img
              src={search}
              alt=""
              style={{ marginLeft: 'auto', marginRight: '1rem' }}
            />
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

export const Header: React.FC = () => (
  <Container
    tag="header"
    className="h-15 py-4 shadow-sm md:shadow-none sm:shadow-none bg-white flex items-center justify-between"
  >
    <div className="flex items-center">
      <Link href="/">
        <LogoIcon className="cursor-pointer" />
      </Link>

      <div className="flex border-2 rounded-md md:ml-10 sm:ml-10 ">
        <input
          type="text"
          placeholder="Căutare profesie"
          className="border-none outline-none w-42 hidden md:block py-2.5 pl-4 pr-3"
        />
        <img
          src={search}
          alt=""
          className="hidden md:block pr-3"
          style={{ marginLeft: 'auto' }}
        />
      </div>
    </div>
    <DesktopLinks />
    <MobileLinks />
  </Container>
);
