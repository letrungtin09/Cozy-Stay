import axios from 'axios';

const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const createData = async (url: string, newData: any): Promise<any> => {
    try {
        const response = await axios.post(url, newData);
        return response.data;
    } catch (error: any) {
        console.error('Error creating data:', error);
        return null;
    }
};

const updateData = async (url: string, updatedData: any): Promise<any> => {
    try {
        const response = await axios.put(url, updatedData);
        return response.data;
    } catch (error: any) {
        console.error('Error updating data:', error);
        return null;
    }
};

const deleteData = async (url: string): Promise<boolean> => {
    try {
        await axios.delete(url);
        return true;
    } catch (error: any) {
        console.error('Error deleting data:', error);
        return false;
    }
};
const ApiFunctions = { fetchData, createData, updateData, deleteData };

export default ApiFunctions;