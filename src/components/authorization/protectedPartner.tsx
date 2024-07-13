'use client'; // Add this line to ensure the component is a Client Component

import { useRouter } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';

const ProtectedPartner = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const isLoggedIn = sessionStorage.getItem('currentUser');
            if (isLoggedIn) {
                const userObject = JSON.parse(isLoggedIn);
                const role = userObject.role;
                if (role != 1) {
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

export default ProtectedPartner;
