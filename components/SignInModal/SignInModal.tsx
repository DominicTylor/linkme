import React, { useState, useMemo, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, TextField, PasswordField } from 'precise-ui';

import { SignInModalStyled } from './SignInModal.styled';
import { SignInModalType } from './types';

const SignInModal: React.FC<SignInModalType> = ({ isOpen, error, inProgress = false, closeHandler, actionHandler }) => {
    const [email, setEmail] = useState<string>('');
    const onChangeEmail = useCallback(({ value }) => {
        setEmail(value);
    }, []);
    const emailError = useMemo<string>(() => {
        if (!email) {
            return 'Please provide correct email address';
        }

        return '';
    }, [email]);

    const [password, setPassword] = useState<string>('');
    const onChangePassword = useCallback(({ value }) => {
        setPassword(value);
    }, []);
    const passwordError = useMemo<string>(() => {
        if (!password) {
            return 'Password cannot be empty';
        }

        return '';
    }, [password]);

    const onClickAction = () => {
        actionHandler(email, password);
    };

    return (
        <Modal open={isOpen} onClose={closeHandler}>
            <ModalHeader title="SignIn" label="welcome" />
            <ModalBody>
                <TextField label="Email" error={emailError} value={email} onChange={onChangeEmail} autoFocus />
                <PasswordField label="Password" error={passwordError} value={password} onChange={onChangePassword} />
            </ModalBody>
            <ModalFooter>
                <Button onClick={closeHandler}>Cancel</Button>
                <Button disabled={!!emailError || !!passwordError} onClick={onClickAction}>
                    Sign In
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default SignInModal;
