// Central API configuration.
// Override in production by setting REACT_APP_API_URL in the environment.
export const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiUrl = (path) => `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
