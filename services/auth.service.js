import axios from 'axios';
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
        return response.data; 
    } catch (error) {
        console.error('Error on Login:', error);
    }
}