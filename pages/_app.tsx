import React from 'react';
import { reset } from 'styled-reset';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../theme';

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
        <GlobalStyles />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
