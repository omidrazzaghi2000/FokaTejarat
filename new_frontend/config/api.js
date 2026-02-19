// API configuration
// import.meta.env.VITE_REACT_APP_API_URL
const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://127.0.0.1:8000';

export const API_URL = API_BASE_URL || (import.meta.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8000');

export default API_URL;

