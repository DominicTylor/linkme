import styled from 'styled-components';

export const Logo = styled.div`
    padding: 10px 0;
    background: ${({ theme }) => theme.colors.pacificBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    line-height: 30px;
    cursor: pointer;
`;

export const HeaderStyled = styled.header`
    padding: 10px 30px;
    background: ${({ theme }) => theme.colors.pacificBlue};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
