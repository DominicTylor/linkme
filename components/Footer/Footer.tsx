import React, { useState } from 'react';

import { Year, Author, FooterStyled } from './Footer.styled';

const Footer: React.FC = () => (
    <FooterStyled>
        <Author>Dominic Tylor</Author>
        <Year>{new Date().getFullYear()}</Year>
    </FooterStyled>
);

export default React.memo(Footer);
