import React, { useCallback, useContext } from 'react';
import Link from 'next/link';
import { OverflowMenu } from 'precise-ui';

import { UserContext } from '../../contexts';
import { ACCOUNT, MY_LINKS } from '../../constants/paths';

import { AvatarStyled, ButtonStyled, MenuItem } from './UserMenu.styled';

const UserMenu: React.FC = () => {
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
                    <Link key="account" href={MY_LINKS}>
                        <MenuItem>My links</MenuItem>
                    </Link>,
                    <Link key="account" href={ACCOUNT}>
                        <MenuItem>Account</MenuItem>
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

export default UserMenu;
