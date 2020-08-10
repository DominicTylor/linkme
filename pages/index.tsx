import React, { useContext } from 'react';

import { UserContext } from '../contexts';
import { Welcome } from '../components';

const Index: React.FC = () => {
    const { user } = useContext(UserContext);

    if (user) {
        return <div style={{ marginTop: '100px', textAlign: 'center' }}>You login</div>;
    }

    return <Welcome />;
};

export default Index;
