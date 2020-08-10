import React, { useMemo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextField } from 'precise-ui';

import { parseError } from '../../helpers/parseError';

import { ActionModalFieldType, ActionModalType } from './types';
import { ActionError, Form, FieldWrapper, StyledSpinner } from './ActionModal.styled';

const ActionModal = <T extends Record<string, string>>({
    isOpen,
    fields,
    title,
    label,
    actionText = 'Submit',
    cancelText = 'Cancel',
    closeHandler,
    actionHandler,
}: React.PropsWithChildren<ActionModalType<T>>): JSX.Element => {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [actionError, setActionError] = useState<string>('');

    const { register, errors, handleSubmit } = useForm<T>();

    const onSubmit: SubmitHandler<T> = async (data) => {
        setInProgress(true);

        try {
            await actionHandler(data);
        } catch (error) {
            setActionError(parseError(error));
        } finally {
            setInProgress(false);
        }
    };

    const handleBeforeClose = () => {
        return !inProgress;
    };

    const renderHeader = useMemo(
        () => (
            <>
                <StyledSpinner />
                <ModalHeader {...{ title, label }} />
            </>
        ),
        [title, label],
    );

    const renderFooter = useMemo(
        () => (
            <ModalFooter>
                <Button onClick={closeHandler}>{cancelText}</Button>
                <Button type="submit">{actionText}</Button>
            </ModalFooter>
        ),
        [actionText, cancelText, closeHandler],
    );

    return (
        <Modal open={isOpen} onClose={closeHandler} onBeforeClose={handleBeforeClose}>
            <Form inProgress={inProgress} onSubmit={handleSubmit<T>(onSubmit)}>
                {renderHeader}
                <ModalBody>
                    {actionError && <ActionError>{actionError}</ActionError>}
                    {fields.map(({ type, name, label, rules }, index) => {
                        switch (type) {
                            case ActionModalFieldType.text:
                            case ActionModalFieldType.password:
                                return (
                                    <FieldWrapper key={name}>
                                        <TextField
                                            {...{
                                                name,
                                                label,
                                                type,
                                                error: parseError(errors[name]),
                                                inputRef: register<HTMLInputElement>(rules),
                                                autoFocus: index === 0,
                                            }}
                                        />
                                    </FieldWrapper>
                                );
                            default:
                                window.console.error('ActionModal: Unexpected field type');
                        }
                    })}
                </ModalBody>
                {renderFooter}
            </Form>
        </Modal>
    );
};

export default ActionModal;
