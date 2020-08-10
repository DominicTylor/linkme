import React, { createContext, useCallback, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { SignInModal, SignUpModal } from '../../containers';

import { User, FirebaseAuth, UserContextType } from './types';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
const isClient = typeof window !== 'undefined';

if (isClient && !firebase.apps.length) {
    firebase.initializeApp(config);
}

export const UserContext = createContext<UserContextType>({
    user: null,
    showSignIn: () => null,
    showSignUp: () => null,
    setUser: () => null,
    firebaseAuth: null,
});

export const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    const [renderSignIn, setRenderSignIn] = useState<boolean>(false);
    const [renderSignUp, setRenderSignUp] = useState<boolean>(false);
    const [firebaseAuth] = useState<FirebaseAuth>(isClient ? firebase.auth() : null);

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
        if (firebaseAuth) {
            const user = firebaseAuth.currentUser;

            if (user) {
                const { uid, email, displayName } = user;

                setUser({
                    id: uid,
                    email,
                    name: displayName,
                });
            }
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, showSignIn, showSignUp, setUser, firebaseAuth }}>
            <SignInModal
                {...{
                    setUser,
                    firebaseAuth,
                    isOpen: renderSignIn,
                    closeHandler: hideSignIn,
                }}
            />
            <SignUpModal
                {...{
                    setUser,
                    firebaseAuth,
                    isOpen: renderSignUp,
                    closeHandler: hideSignUp,
                }}
            />
            {children}
        </UserContext.Provider>
    );
};
