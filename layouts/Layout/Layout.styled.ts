import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.whiterSmoke};
`;

export const Main = styled.main`
    flex-grow: 1;
    overflow: auto;
    padding: 10px 30px;
    margin: auto;
    width: 100%;
`;
