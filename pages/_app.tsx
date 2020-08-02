import React from 'react';
import { reset } from 'styled-reset';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { Layout } from '../layouts';
import { UserContextProvider } from '../contexts';

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    body {
        font-family: 'Roboto', sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <UserContextProvider>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserContextProvider>
    </ThemeProvider>
);

export default MyApp;
