import React from 'react';

import { Header, Footer } from '../../components';

import { Wrapper, Main } from './Layout.styled';

export const Layout: React.FC = ({ children }) => (
    <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
);
