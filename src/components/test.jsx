import axios from 'axios';

const BASE_URL = 'YOUR_API_BASE_URL';

const AuthService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { username, password });
            return response.data.token;
        } catch (error) {
            throw new Error('Failed to login');
        }
    },
    getData: async (token) => {
        try {
            const response = await axios.get(`${BASE_URL}/data`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
}