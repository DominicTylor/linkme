import React, { useState } from 'react';
import Link from 'next/link';

import { AvatarStyled, ButtonStyled } from './Auth.styled';

const Header: React.FC = () => {
    const [user, setUser] = useState(null);

    return user ? (
        <Link href="/test">
            <AvatarStyled>US</AvatarStyled>
        </Link>
    ) : (
        <div>
            <ButtonStyled>Sign up</ButtonStyled>
            <ButtonStyled buttonStyle="secondary">Sign in</ButtonStyled>
        </div>
    );
};

export default Header;
