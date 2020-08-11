import React, { useCallback, useMemo } from 'react';

import { normalizeUser } from '../../services/normalization';
import { ActionModal, ActionModalField, ActionModalFieldType } from '../../components';

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
                    minLength: {
                        value: 8,
                        message: 'Your password too short',
                    },
                    maxLength: {
                        value: 42,
                        message: 'Your password too long',
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
                setUser(normalizeUser(user.user));

                closeHandler();
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
