import styled, { css } from 'styled-components';
import { Spinner } from 'precise-ui';

export const StyledSpinner = styled(Spinner)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -23px;
    margin-left: -23px;
    z-index: 1;
`;

export const FieldWrapper = styled.div`
    padding-bottom: 10px;
`;

export const Form = styled.form<{
    inProgress: boolean;
}>`
    ${StyledSpinner} {
        display: none;
    }

    ${({ inProgress, theme }) =>
        inProgress &&
        css`
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: ${theme.colors.whiteSmoke};
                opacity: 0.7;
                z-index: 1;
            }

            ${StyledSpinner} {
                display: block;
            }
        `}
`;

export const ActionError = styled.div`
    padding: 5px 10px;
    color: ${({ theme }) => theme.colors.red4};
    border-left: 5px solid ${({ theme }) => theme.colors.red4};
    margin: 10px 0;
`;
