import React, { useState } from 'react';

import { Year, Author, FooterStyled } from './Footer.styled';

const Footer: React.FC = () => {
    const [s] = useState(() => console.log('aaa'));

    return (
        <FooterStyled>
            <Author>Dominic Tylor</Author>
            <Year>
                {new Date().getFullYear()} {s}
            </Year>
        </FooterStyled>
    );
};

export default Footer;
