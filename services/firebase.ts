import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { User } from '../contexts/UserContext/types';
import { normalizeUser } from '../helpers/normalization';

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

const firebaseAuth = isClient && firebase.auth();

export const getUser = (): User => {
    if (firebaseAuth) {
        const user = firebaseAuth.currentUser;

        if (user) {
            return normalizeUser(user);
        }
    }

    return null;
};

export const logout = async (): Promise<void> => {
    if (firebaseAuth) {
        try {
            return await firebaseAuth.signOut();
        } catch (e) {
            window.console.error(e);

            throw e;
        }
    }

    return Promise.reject();
};

export const signIn = async (email: string, password: string): Promise<User> => {
    if (firebaseAuth) {
        const { user } = await firebaseAuth.signInWithEmailAndPassword(email, password);

        if (user) {
            return normalizeUser(user);
        }

        throw 'Sign In error';
    }

    return Promise.reject();
};

export const signUp = async (email: string, password: string): Promise<User> => {
    if (firebaseAuth) {
        const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);

        if (user) {
            return normalizeUser(user);
        }

        throw 'Sign Up error';
    }

    return Promise.reject();
};
