import React from 'react';
import Link from 'next/link';

import { UserMenu } from '..';
import { HOME } from '../../constants/paths';

import { HeaderType } from './types';
import { Logo, HeaderStyled } from './Header.styled';

const Header: React.FC<HeaderType> = ({ className }) => (
    <HeaderStyled {...{ className }}>
        <Link href={HOME}>
            <Logo>LinkMe.com</Logo>
        </Link>
        <UserMenu />
    </HeaderStyled>
);

export default Header;
