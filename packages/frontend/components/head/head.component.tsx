import React, { useState } from 'react';
import Link from 'next/link';

const MobileLinks: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="block sm:hidden">
      {!open ? (
        <img src="./menu.svg" alt="" className="w-6" onClick={clickHandler} />
      ) : (
        <img src="./close.svg" alt="" className="w-6" onClick={clickHandler} />
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
            <li className="">
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
        <li className="ml-8">
          <Link href={`#`}>
            <a>РУ</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className=" bg-white h-15 py-4 px-4 sm:px-0 shadow-sm md:shadow-none sm:shadow-none">
      <div className=" max-w-5xl mx-auto my-0 flex items-center justify-between relative">
        <img src="./Logo.svg" alt="" className="" />

        <DesktopLinks />
        <MobileLinks />
      </div>
    </header>
  );
};

export default Header;
