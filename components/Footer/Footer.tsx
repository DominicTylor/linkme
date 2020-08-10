import React from 'react';
import Link from 'next/link';

import { ABOUT } from '../../constants/paths';

import { Year, StyledLink, FooterStyled } from './Footer.styled';

const Footer: React.FC = () => (
    <FooterStyled>
        <Link href={ABOUT}>
            <StyledLink>About</StyledLink>
        </Link>
        <div>
            <Year>{new Date().getFullYear()}</Year>
            <StyledLink href="https://github.com/DominicTylor/linkme">@github</StyledLink>
        </div>
    </FooterStyled>
);

export default React.memo(Footer);
