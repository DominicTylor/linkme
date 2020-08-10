import { SubmitHandler, ValidationRules } from 'react-hook-form';

export enum ActionModalFieldType {
    'text' = 'text',
    'password' = 'password',
}

export type ActionModalField = {
    name: string;
    label: string;
    type: ActionModalFieldType;
    rules?: ValidationRules;
};

export type ActionModalType<T> = {
    isOpen: boolean;
    title: string;
    label?: string;
    actionText?: string;
    cancelText?: string;
    fields: ActionModalField[];
    closeHandler: () => void;
    actionHandler: SubmitHandler<T>;
};
