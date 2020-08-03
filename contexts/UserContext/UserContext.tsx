import React, { createContext, useCallback, useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { User, UserContextType } from './types';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(config);
}

export const UserContext = createContext<UserContextType>({
    user: null,
    showSignIn: () => null,
    showSignUp: () => null,
    logout: async () => null,
});

const firebaseAuth = firebase.auth();

export const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>(null);
    const [renderSignIn, setRenderSignIn] = useState<boolean>(false);
    const [renderSignUp, setRenderSignUp] = useState<boolean>(false);

    const showSignIn = useCallback(() => {
        setRenderSignIn(true);
    }, []);

    const showSignUp = useCallback(() => {
        setRenderSignUp(true);
    }, []);

    const logout = useCallback(
        async () =>
            firebaseAuth
                .signOut()
                .then(() => {
                    setUser(null);
                })
                .catch((e) => {
                    console.error(e);
                }),
        [],
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = firebase.auth().currentUser;

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

    const signUp = useCallback(async (email: string, password: string) => {
        try {
            const user = await firebaseAuth.createUserWithEmailAndPassword(email, password);

            if (user?.user) {
                const { uid, email, displayName } = user.user;

                setUser({
                    id: uid,
                    email,
                    name: displayName,
                });

                return true;
            }

            throw new Error('Login error');
        } catch (error) {
            return false;
        }
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        try {
            const user = await firebaseAuth.signInWithEmailAndPassword(email, password);

            if (user?.user) {
                const { uid, email, displayName } = user.user;

                setUser({
                    id: uid,
                    email,
                    name: displayName,
                });

                return true;
            }

            throw new Error('Login error');
        } catch (error) {
            return false;
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, showSignIn, showSignUp, logout }}>
            {/*{renderSignIn && <SignInModal signIn />}
            {renderSignUp && <SignUpModal signUp />}*/}
            {children}
        </UserContext.Provider>
    );
};
