'use client'; // Add this line to ensure the component is a Client Component

import UserCurrent from '@/lib/currentUser';
import { useRouter } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';

const ProtectedAdmin = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();
    const currentUser = UserCurrent.CheckUser();

    useEffect(() => {
        const checkAuth = async () => {
            if (currentUser !== false) {
                if (currentUser != 2) {
                    await router.push('/');
                } else {
                    setIsAuthorized(true);
                }
            } else {
                await router.push('/auth/login');
            }
            setIsLoading(false);
        };
        checkAuth();
    }, [router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isAuthorized) {
        return <>{children}</>;
    }

    return null;
};

export default ProtectedAdmin;
