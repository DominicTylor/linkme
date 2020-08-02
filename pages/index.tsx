import React, { useContext } from 'react';
import { ActionLink } from 'precise-ui';

import { UserContext } from '../contexts';

const Index: React.FC = () => {
    const { user, showAuth } = useContext(UserContext);

    if (user) {
        return <div>You login</div>;
    }

    return (
        <>
            <div>
                For full access to app you should <ActionLink onClick={showAuth}>Click me</ActionLink>
            </div>
        </>
    );
};

export default Index;
