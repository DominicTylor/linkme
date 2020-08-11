import React, { useContext, useState } from 'react';
import { TextField } from 'precise-ui';
import { SubmitHandler, useForm } from 'react-hook-form';

import { parseError } from '../../helpers/parseError';

import { UserDetailsFieldsData } from './types';
import { Form, FieldWrapper, StyledSpinner, SubmitButton } from './UserDetails.styled';
import { UserContext } from '../../contexts';

const UserDetails: React.FC = () => {
    const { user } = useContext(UserContext);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const { register, errors, getValues, handleSubmit } = useForm<UserDetailsFieldsData>();
    const onSubmit: SubmitHandler<UserDetailsFieldsData> = async (data) => {
        setInProgress(true);

        try {
            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log(data);
                    resolve();
                }, 2000);
            });
        } catch (error) {
            console.log(parseError(error));
        } finally {
            setInProgress(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} inProgress={inProgress}>
            <StyledSpinner />
            <FieldWrapper>
                <TextField
                    {...{
                        name: 'name',
                        label: 'Name',
                        defaultValue: user?.name || '',
                        type: 'text',
                        error: parseError(errors.name),
                        inputRef: register<HTMLInputElement>({
                            minLength: {
                                value: 4,
                                message: 'Your name too short',
                            },
                            maxLength: {
                                value: 100,
                                message: 'Your name too long',
                            },
                        }),
                    }}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    {...{
                        name: 'email',
                        label: 'Email',
                        type: 'text',
                        defaultValue: user?.email || '',
                        error: parseError(errors.email),
                        inputRef: register<HTMLInputElement>({
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address',
                            },
                            required: {
                                value: true,
                                message: 'This is required filed',
                            },
                        }),
                    }}
                />
            </FieldWrapper>
            {/* disable chrome autofill */}
            <input type="password" style={{ position: 'absolute', top: '-99999px' }} />
            <FieldWrapper>
                <TextField
                    {...{
                        name: 'password',
                        label: 'New password',
                        type: 'password',
                        autocomplete: 'new-password',
                        defaultValue: '',
                        error: parseError(errors['password']),
                        inputRef: register<HTMLInputElement>({
                            minLength: {
                                value: 8,
                                message: 'Your password too short',
                            },
                            maxLength: {
                                value: 42,
                                message: 'Your password too long',
                            },
                        }),
                    }}
                />
            </FieldWrapper>
            <FieldWrapper>
                <TextField
                    {...{
                        name: 'passwordConfirm',
                        label: 'Confirm new password',
                        type: 'password',
                        autocomplete: 'new-password-confirm',
                        defaultValue: '',
                        error: parseError(errors.passwordConfirm),
                        inputRef: register<HTMLInputElement>({
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || "Passwords doesn't match";
                                },
                            },
                        }),
                    }}
                />
            </FieldWrapper>
            <SubmitButton type="submit">Update</SubmitButton>
        </Form>
    );
};

export default UserDetails;
