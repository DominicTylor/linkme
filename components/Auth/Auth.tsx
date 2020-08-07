import React, { useCallback, useContext } from 'react';
import Link from 'next/link';
import { OverflowMenu } from 'precise-ui';

import { UserContext } from '../../contexts';

import { AvatarStyled, ButtonStyled, MenuItem } from './Auth.styled';

const Auth: React.FC = () => {
    const { user, showSignIn, showSignUp, setUser, firebaseAuth } = useContext(UserContext);

    const logout = useCallback(() => {
        if (firebaseAuth) {
            firebaseAuth
                .signOut()
                .then(() => {
                    setUser(null);
                })
                .catch((e) => {
                    window.console.error(e);
                });
        }
    }, []);

    return user ? (
        <OverflowMenu
            {...{
                button: <AvatarStyled>US</AvatarStyled>,
                items: [
                    <Link key="personal" href="/personal">
                        <MenuItem>Personal page</MenuItem>
                    </Link>,
                    <MenuItem key="logout" onClick={logout}>
                        Logout
                    </MenuItem>,
                ],
                flyoutProps: {
                    position: 'bottom-right',
                },
            }}
        />
    ) : (
        <div>
            <ButtonStyled onClick={showSignUp}>Sign up</ButtonStyled>
            <ButtonStyled buttonStyle="secondary" onClick={showSignIn}>
                Sign in
            </ButtonStyled>
        </div>
    );
};

export default Auth;
