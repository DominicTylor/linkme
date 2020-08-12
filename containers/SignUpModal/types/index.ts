import { User } from '../../../contexts/UserContext/types';

export type SignUpFieldsData = {
    email: string;
    password: string;
};

export type SignUpModalType = {
    isOpen: boolean;
    closeHandler: () => void;
    setUser: (user: User) => void;
};
