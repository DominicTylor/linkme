import { User } from '../../../contexts/UserContext/types';

export type SignInFieldsData = {
    email: string;
    password: string;
};

export type SignInModalType = {
    isOpen: boolean;
    closeHandler: () => void;
    setUser: (user: User) => void;
};
