import React, { createContext, useCallback, useEffect, useState } from 'react';
import 'firebase/auth';
import cookie from 'js-cookie';
import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import initFirebase from '../../utils/auth/initFirebase';

import { User, UserContextType } from './types';

initFirebase();

export const UserContext = createContext<UserContextType>({
    user: null,
    showAuth: () => null,
    logout: async () => null,
});

export const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [renderAuth, setRenderAuth] = useState<boolean>(false);

    const firebaseAuthConfig: firebaseui.auth.Config = {
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: false,
            },
        ],
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: ({ user }) => {
                const { uid, email, xa } = user;
                const userData = {
                    id: uid,
                    email,
                    token: xa,
                    name: 'V',
                    surname: 'P',
                };
                cookie.set('auth', userData, {
                    expires: 1,
                });
                setUser(userData);

                return true;
            },
        },
    };

    const showAuth = useCallback(() => {
        setRenderAuth(true);
    }, []);

    const logout = useCallback(async () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                cookie.remove('auth');
                setUser(null);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cookieAuth = cookie.get('auth');

            if (cookieAuth) {
                setUser(JSON.parse(cookieAuth));
            }
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, showAuth, logout }}>
            {renderAuth && <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} />}
            {children}
        </UserContext.Provider>
    );
};
