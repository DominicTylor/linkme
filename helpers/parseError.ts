export const parseError = (error: unknown): string => {
    if (typeof error === 'string') {
        return error;
    }

    if (error instanceof Error && error.message) {
        return error.message;
    }

    return 'Unknown error';
};
