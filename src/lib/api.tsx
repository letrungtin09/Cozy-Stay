import axios from 'axios';

const getData = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const postData = async (url: string, data: any): Promise<any> => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error: any) {
        return error;
    }
};

const putData = async (url: string, updatedData: any): Promise<any> => {
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

const ApiFunctions = { getData, postData, putData, deleteData };

export default ApiFunctions;