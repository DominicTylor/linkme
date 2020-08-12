import React, { createContext, useCallback, useEffect, useState } from 'react';

import { SignInModal, SignUpModal } from '../../containers';
import { getUser } from '../../services/firebase';

import { User, UserContextType } from './types';

export const UserContext = createContext<UserContextType>({
    user: null,
    showSignIn: () => null,
    showSignUp: () => null,
    setUser: () => null,
});

export const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    const [renderSignIn, setRenderSignIn] = useState<boolean>(false);
    const [renderSignUp, setRenderSignUp] = useState<boolean>(false);

    const showSignIn = useCallback(() => {
        setRenderSignIn(true);
    }, []);
    const hideSignIn = useCallback(() => {
        setRenderSignIn(false);
    }, []);

    const showSignUp = useCallback(() => {
        setRenderSignUp(true);
    }, []);
    const hideSignUp = useCallback(() => {
        setRenderSignUp(false);
    }, []);

    useEffect(() => {
        setUser(getUser());
    }, []);

    return (
        <UserContext.Provider value={{ user, showSignIn, showSignUp, setUser }}>
            <SignInModal
                {...{
                    setUser,
                    isOpen: renderSignIn,
                    closeHandler: hideSignIn,
                }}
            />
            <SignUpModal
                {...{
                    setUser,
                    isOpen: renderSignUp,
                    closeHandler: hideSignUp,
                }}
            />
            {children}
        </UserContext.Provider>
    );
};
