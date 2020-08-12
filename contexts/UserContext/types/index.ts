export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: boolean;
} | null;

export type UserContextType = {
    user: User;
    showSignIn: () => void;
    showSignUp: () => void;
    setUser: (user: User) => void;
};
