export type User = {
    id: string;
    name: string | null;
    email: string | null;
} | null;

export type UserContextType = {
    user: User;
    showSignIn: () => void;
    showSignUp: () => void;
    logout: () => void;
};
