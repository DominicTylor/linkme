export type User = {
    id: string;
    name: string;
    surname: string;
    email: string;
    token: string;
} | null;

export type UserContextType = {
    user: User;
    showAuth: () => void;
    logout: () => void;
};
