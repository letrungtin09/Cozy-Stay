'use client'; // Add this line to ensure the component is a Client Component

import UserCurrent from '@/lib/currentUser';
import { useRouter } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';
const ProtectedCustomer = ({ children }: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();
    const currentUser = UserCurrent.CheckUser();

    useEffect(() => {
        const checkAuth = async () => {
            if (currentUser === false) {
                await router.push('/auth/login');
            } else {
                setIsAuthorized(true);
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

export default ProtectedCustomer;
