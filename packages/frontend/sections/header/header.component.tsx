import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { ReactComponent as LogoIcon } from './assets/Logo.svg';
import { Container } from '../../components/grid/container.component';

const MobileLinks: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      {open ? (
        <CloseIcon className="w-6 h-6" onClick={() => setOpen(false)} />
      ) : (
        <MenuIcon className="w-6 h-6" onClick={() => setOpen(true)} />
      )}
      {open ? (
        <div className="absolute left-0 top-12 bg-white">
          <ul>
            <li>
              <Link href={`#`}>
                <a>Toate domeniile</a>
              </Link>
            </li>
            <li>
              <Link href={`#`}>
                <a>Cum aleg profesia?</a>
              </Link>
            </li>
            <li>
              <Link href={`#`}>
                <a>РУ</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const DesktopLinks: React.FC = () => (
  <div className="hidden sm:block">
    <ul className="flex items-center max-w-md justify-around">
      <li>
        <Link href={`#`}>
          <a>Toate domeniile</a>
        </Link>
      </li>
      <li className="ml-10">
        <Link href={`#`}>
          <a>Cum aleg profesia?</a>
        </Link>
      </li>
      <li className="ml-8 bg-gray-200 underline py-0.5 px-2">
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
    className="h-15 py-4 shadow-sm md:shadow-none sm:shadow-none bg-white"
  >
    <div className="flex items-center justify-between relative">
      <Link href="/">
        <LogoIcon className="cursor-pointer" />
      </Link>
      <DesktopLinks />
      <MobileLinks />
    </div>
  </Container>
);
