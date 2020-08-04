export type SignInModalType = {
    isOpen: boolean;
    error?: string;
    inProgress?: boolean;
    closeHandler: () => void;
    actionHandler: (email: string, password: string) => void;
};
