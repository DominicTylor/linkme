import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { HOME } from '../constants/paths';
import { UserContext } from '../contexts';
import { UserDetails } from '../containers';

const Account: React.FC = () => {
    const { push } = useRouter();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            push(HOME);
        }
    }, [user]);

    return user && <UserDetails />;
};

export default Account;
