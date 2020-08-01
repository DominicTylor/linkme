import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import cookie from 'js-cookie';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import initFirebase from '../utils/auth/initFirebase';

initFirebase();

const firebaseAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: ({ user }, redirectUrl) => {
            const { uid, email, xa } = user;
            const userData = {
                id: uid,
                email,
                token: xa,
            };
            cookie.set('auth', userData, {
                expires: 1,
            });

            return true;
        },
    },
};

const FirebaseAuth = () => {
    const [renderAuth, setRenderAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true);
        }
    }, []);

    return (
        <div>
            {renderAuth ? <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} /> : null}
        </div>
    );
};

export default FirebaseAuth;
