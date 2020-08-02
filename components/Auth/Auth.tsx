import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { OverflowMenu } from 'precise-ui';

import { UserContext } from '../../contexts';

import { AvatarStyled, ButtonStyled, MenuItem } from './Auth.styled';

const Header: React.FC = () => {
    const { user, showAuth, logout } = useContext(UserContext);

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
            <ButtonStyled>Sign up</ButtonStyled>
            <ButtonStyled buttonStyle="secondary" onClick={showAuth}>
                Sign in
            </ButtonStyled>
        </div>
    );
};

export default Header;
