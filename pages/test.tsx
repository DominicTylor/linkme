import React from 'react';
import styled from 'styled-components';
import { Button } from 'precise-ui';
import Link from 'next/link';

import { Layout } from '../layouts';

export const StyledTest = styled.div`
    padding: 20px;
    background: ${({ theme }) => theme.colors.pacificBlue};
    color: ${({ theme }) => theme.colors.white};
`;

const Test: React.FC = () => (
    <Layout>
        <>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Button>Testische</Button>
            <StyledTest>What is aaaaappp</StyledTest>
        </>
    </Layout>
);

export default Test;
