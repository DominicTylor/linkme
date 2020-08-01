import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../auth/initFirebase';

initFirebase();

const useUser = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const logout = async () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                cookies.remove('auth');
                setUser(null);
                router.push('/auth');
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        const cookie = cookies.get('auth');
        if (!cookie) {
            router.push('/');
            return;
        }
        setUser(JSON.parse(cookie));
    }, []);

    return { user, logout };
};

export { useUser };
