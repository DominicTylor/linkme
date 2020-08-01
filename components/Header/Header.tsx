import React from 'react';
import Link from 'next/link';

import { Auth } from '..';

import { HeaderType } from './Header.type';
import { Logo, HeaderStyled } from './Header.styled';

const Header: React.FC<HeaderType> = ({ className }) => (
    <HeaderStyled {...{ className }}>
        <Link href="/">
            <Logo>LinkMe.com</Logo>
        </Link>
        <Auth />
    </HeaderStyled>
);

export default Header;
