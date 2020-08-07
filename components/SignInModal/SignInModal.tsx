import React, { useCallback, useMemo } from 'react';

import { ActionModal, ActionModalField, ActionModalFieldType } from '../';

import { SignInFieldsData, SignInModalType } from './types';

const SignInModal: React.FC<SignInModalType> = ({ isOpen, setUser, firebaseAuth, closeHandler }) => {
    const fields = useMemo<ActionModalField[]>(
        () => [
            {
                name: 'email',
                label: 'Email',
                type: ActionModalFieldType.text,
                rules: {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                    },
                    required: {
                        value: true,
                        message: 'This is required filed',
                    },
                },
            },
            {
                name: 'password',
                label: 'Password',
                type: ActionModalFieldType.password,
                rules: {
                    required: {
                        value: true,
                        message: 'This is required filed',
                    },
                },
            },
        ],
        [],
    );

    const actionHandler = useCallback(async ({ email, password }) => {
        if (firebaseAuth) {
            const user = await firebaseAuth.signInWithEmailAndPassword(email, password);

            if (user?.user) {
                const { uid, email, displayName } = user.user;

                setUser({
                    id: uid,
                    email,
                    name: displayName,
                });

                closeHandler();
            } else {
                throw 'Sign In error';
            }
        }
    }, []);

    return (
        <ActionModal<SignInFieldsData>
            {...{ isOpen, title: 'Sign In', label: 'welcome back', closeHandler, actionHandler, fields }}
        />
    );
};

export default SignInModal;
