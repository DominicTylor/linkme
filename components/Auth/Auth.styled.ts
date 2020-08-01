import styled from 'styled-components';
import { Button } from 'precise-ui';

export const AvatarStyled = styled.div`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.pacificBlue};
    text-transform: uppercase;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
`;

export const ButtonStyled = styled(Button)`
    margin: 0 10px;
`;
