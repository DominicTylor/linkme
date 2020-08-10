import styled from 'styled-components';

export const StyledLink = styled.a`
    font-size: 12px;
    font-style: italic;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:active {
        text-decoration: underline;
    }
`;

export const Year = styled.span`
    font-size: 12px;
    font-style: italic;
    margin-right: 10px;
`;

export const FooterStyled = styled.footer`
    padding: 10px 30px;
    background: ${({ theme }) => theme.colors.whiteSmoke};
    color: ${({ theme }) => theme.colors.charcoal};
    text-align: right;
    display: flex;
    justify-content: space-between;
`;
