import { User, FirebaseAuth } from '../../../contexts/UserContext/types';

export type SignInFieldsData = {
    email: string;
    password: string;
};

export type SignInModalType = {
    isOpen: boolean;
    firebaseAuth: FirebaseAuth;
    closeHandler: () => void;
    setUser: (user: User) => void;
};
