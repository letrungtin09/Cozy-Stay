"use client"
// pages/index.js
import { useEffect, useState } from 'react';
import ApiFunctions from '../../services/api';
interface Category {
    cate: TypesCategory[];
}
const Page: React.FC = () => {
    const [data, setData] = useState<Category[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await ApiFunctions.fetchData('http://localhost:3000/api/category');
            console.log('API', response)
        };

        fetchData();
    }, []);

    return (

        <h1>API Data</h1>

    );
}

export default Page;