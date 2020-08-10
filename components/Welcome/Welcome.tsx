import React, { useContext } from 'react';
import { ActionLink } from 'precise-ui';

import { UserContext } from '../../contexts';

import { Wrapper } from './Welcome.styled';

const Welcome: React.FC = () => {
    const { showSignIn, showSignUp } = useContext(UserContext);

    return (
        <Wrapper>
            For full access to app you should <ActionLink onClick={showSignIn}>Sign In</ActionLink> or{' '}
            <ActionLink onClick={showSignUp}>Sign Up</ActionLink>
        </Wrapper>
    );
};

export default Welcome;
