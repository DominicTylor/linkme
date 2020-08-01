import React from 'react';
import styled from 'styled-components';
import { Button } from 'precise-ui';

export const StyledTest = styled.div`
    padding: 20px;
    background: ${({ theme }) => theme.colors.pacificBlue};
    color: ${({ theme }) => theme.colors.white};
`;

const Test: React.FC = () => (
    <>
        <Button>Testische</Button>
        <StyledTest>What is aaaaappp</StyledTest>
    </>
);

export default Test;
