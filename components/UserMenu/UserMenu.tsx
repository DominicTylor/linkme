import React, { useCallback, useContext } from 'react';
import Link from 'next/link';
import { OverflowMenu } from 'precise-ui';

import { UserContext } from '../../contexts';
import { logout } from '../../services/firebase';
import { ACCOUNT, MY_LINKS } from '../../constants/paths';

import { AvatarStyled, ButtonStyled, MenuItem } from './UserMenu.styled';

const UserMenu: React.FC = () => {
    const { user, showSignIn, showSignUp, setUser } = useContext(UserContext);

    const logoutHandler = useCallback(async () => {
        await logout();

        setUser(null);
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
                    <MenuItem key="logout" onClick={logoutHandler}>
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
            <ButtonStyled onClick={showSignIn}>Sign in</ButtonStyled>
            <ButtonStyled buttonStyle="secondary" onClick={showSignUp}>
                Sign up
            </ButtonStyled>
        </div>
    );
};

export default UserMenu;
