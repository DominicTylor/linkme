import styled from 'styled-components';

export const Author = styled.div`
    font-size: 12px;
    font-style: italic;
`;

export const Year = styled.div`
    font-size: 12px;
    font-style: italic;
`;

export const FooterStyled = styled.footer`
    padding: 10px 30px;
    background: ${({ theme }) => theme.colors.whiteSmoke};
    color: ${({ theme }) => theme.colors.charcoal};
    text-align: right;
    display: flex;
    justify-content: space-between;
`;
