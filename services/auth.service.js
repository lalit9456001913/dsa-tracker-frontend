import axios from 'axios';
const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${ApiUrl}/auth/login`, credentials);
        return response.data; 
    } catch (error) {
        console.error('Error on Login:', error);
    }
}