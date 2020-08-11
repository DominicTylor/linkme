import firebase from '@firebase/app';
import { User } from '../contexts/UserContext/types';

export const normalizeUser = (user: firebase.User): User => {
    const { uid, email, displayName, emailVerified } = user;

    return {
        id: uid,
        emailVerified,
        email,
        name: displayName,
    };
};
