import { User, FirebaseAuth } from '../../../contexts/UserContext/types';

export type SignUpFieldsData = {
    email: string;
    password: string;
};

export type SignUpModalType = {
    isOpen: boolean;
    firebaseAuth: FirebaseAuth;
    closeHandler: () => void;
    setUser: (user: User) => void;
};
