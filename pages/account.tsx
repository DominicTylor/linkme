import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../contexts';
import { UserDetails } from '../containers';
import { HOME } from '../constants/paths';

const Account: React.FC = () => {
    const { push } = useRouter();
    const { user } = useContext(UserContext);

    if (!user) {
        push(HOME);

        return null;
    }

    return <UserDetails />;
};

export default Account;
