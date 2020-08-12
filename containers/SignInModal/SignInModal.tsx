import React, { useCallback, useMemo } from 'react';

import { signIn } from '../../services/firebase';
import { ActionModal, ActionModalField, ActionModalFieldType } from '../../components';

import { SignInFieldsData, SignInModalType } from './types';

const SignInModal: React.FC<SignInModalType> = ({ isOpen, setUser, closeHandler }) => {
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

    const actionHandler = useCallback(async ({ email, password }) => {
        const user = await signIn(email, password);

        setUser(user);

        closeHandler();
    }, []);

    return (
        <ActionModal<SignInFieldsData>
            {...{ isOpen, title: 'Sign In', label: 'welcome back', closeHandler, actionHandler, fields }}
        />
    );
};

export default SignInModal;
