const API_BASE_URL =
  // import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  import.meta.env.VITE_API_URL || "http://62.60.214.42:8000";

export const API_URL =
  API_BASE_URL || (import.meta.env.PROD ? "" : "http://62.60.214.42:8000");

export default API_URL;

