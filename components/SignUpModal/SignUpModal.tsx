import React, { useCallback, useMemo } from 'react';

import { ActionModal, ActionModalField, ActionModalFieldType } from '../';

import { SignUpModalType, SignUpFieldsData } from './types';

const SignUpModal: React.FC<SignUpModalType> = ({ isOpen, setUser, firebaseAuth, closeHandler }) => {
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

    const actionHandler = useCallback(async ({ email, password }: SignUpFieldsData) => {
        if (firebaseAuth) {
            const user = await firebaseAuth.createUserWithEmailAndPassword(email, password);

            if (user?.user) {
                const { uid, email: userEmail, displayName } = user.user;

                setUser({
                    id: uid,
                    email: userEmail,
                    name: displayName,
                });
            } else {
                throw 'Sign Up error';
            }
        }
    }, []);

    return (
        <ActionModal<SignUpFieldsData>
            {...{ isOpen, title: 'Sign Up', label: 'welcome', closeHandler, actionHandler, fields }}
        />
    );
};

export default SignUpModal;
