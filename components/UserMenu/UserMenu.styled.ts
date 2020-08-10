import styled from 'styled-components';
import { Button } from 'precise-ui';

export const AvatarStyled = styled.div`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.pacificBlue};
    text-transform: uppercase;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`;

export const MenuItem = styled.div`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.pacificBlue};
    white-space: nowrap;
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;

    &:hover,
    &:active {
        background: ${({ theme }) => theme.colors.pacificBlue};
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const ButtonStyled = styled(Button)`
    margin: 0 10px;
`;
