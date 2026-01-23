// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const API_URL = API_BASE_URL || (process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8000');

export default API_URL;

