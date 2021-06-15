import React, { useState } from 'react';
import Link from 'next/link';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as MenuIcon } from './assets/menu.svg';
import { ReactComponent as LogoIcon } from './assets/Logo.svg';
import { Container } from '../grid/container.component';
import { Row } from '../grid/row.component';
import { Column } from '../grid/column.component';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row className="flex justify-between">
        <LogoIcon />
        <ul className="flex hidden sm:block">
          <li>LOL</li>
          <li>LOL</li>
          <li>LOL</li>
        </ul>

        {open ? (
          <CloseIcon
            className="w-6 h-6 block sm:hidden"
            onClick={() => setOpen(false)}
          />
        ) : (
          <MenuIcon
            className="w-6 h-6 block sm:hidden"
            onClick={() => setOpen(true)}
          />
        )}
        {open ? (
          <>
            <div className="absolute">
              <input type="text" />
              <img src="" alt="" />
            </div>
            <ul className="block sm:hidden absolute">
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
          </>
        ) : null}
      </Row>
    </Container>
  );
};
