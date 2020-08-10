import firebase from '@firebase/app';

export type FirebaseAuth = firebase.auth.Auth | null;

export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: boolean;
    photoURL: string | null;
} | null;

export type UserContextType = {
    user: User;
    showSignIn: () => void;
    showSignUp: () => void;
    setUser: (user: User) => void;
    firebaseAuth: FirebaseAuth;
};
