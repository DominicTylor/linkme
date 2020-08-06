import React, { useState, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, TextField, PasswordField } from 'precise-ui';

import { StyledSpinner, ModalContentWrapper, ActionError } from './SignInModal.styled';
import { SignInModalType } from './types';

const SignInModal: React.FC<SignInModalType> = ({ isOpen, error, inProgress = false, closeHandler, actionHandler }) => {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const onChangeEmail = useCallback(({ value }) => {
        setEmailError('');
        setEmail(value);
    }, []);
    const onChangePassword = useCallback(({ value }) => {
        setPasswordError('');
        setPassword(value);
    }, []);

    const checkEmail = () => {
        if (!email) {
            setEmailError("It's required field");

            return true;
        }

        return false;
    };
    const checkPassword = () => {
        if (!password) {
            setPasswordError("It's required field");

            return true;
        }

        return false;
    };

    const onClickAction = () => {
        const emailHasError = checkEmail();
        const passwordHasError = checkPassword();

        if (!emailHasError && !passwordHasError) {
            actionHandler(email, password);
        }
    };

    const handleBeforeClose = () => {
        return !inProgress;
    };

    return (
        <Modal open={isOpen} onClose={closeHandler} onBeforeClose={handleBeforeClose}>
            <ModalContentWrapper inProgress={inProgress}>
                <StyledSpinner />
                <ModalHeader title="SignIn" label="welcome" />
                <ModalBody>
                    {error && <ActionError>{error}</ActionError>}
                    <TextField label="Email" error={emailError} value={email} onChange={onChangeEmail} autoFocus />
                    <br />
                    <PasswordField
                        label="Password"
                        error={passwordError}
                        value={password}
                        onChange={onChangePassword}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler}>Cancel</Button>
                    <Button disabled={!!emailError || !!passwordError} onClick={onClickAction}>
                        Sign In
                    </Button>
                </ModalFooter>
            </ModalContentWrapper>
        </Modal>
    );
};

export default SignInModal;
