import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { ReactComponent as LogoIcon } from './assets/Logo.svg';

const MobileLinks: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="block sm:hidden">
      {open ? (
        <CloseIcon className="w-6" onClick={clickHandler} />
      ) : (
        <MenuIcon className="w-6" onClick={clickHandler} />
      )}
      {open ? (
        <div className="block sm:hidden absolute mx-auto inset-x-5 top-10 left-0 w-full bg-white">
          <ul className="">
            <li className="w-max mb-2">
              <Link href={`#`}>
                <a>Toate domeniile</a>
              </Link>
            </li>
            <li className="w-max mb-2">
              <Link href={`#`}>
                <a>Cum aleg profesia?</a>
              </Link>
            </li>
            <li className="underline">
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

const DesktopLinks: React.FC = () => {
  return (
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
};

export const Header: React.FC = () => {
  return (
    <header className="bg-white h-15 py-4 px-4 sm:px-0 shadow-sm md:shadow-none sm:shadow-none">
      <div className="max-w-5xl mx-auto my-0 flex items-center justify-between relative">
        <LogoIcon />
        <DesktopLinks />
        <MobileLinks />
      </div>
    </header>
  );
};