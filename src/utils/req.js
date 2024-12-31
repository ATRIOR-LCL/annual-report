import Cookies from 'js-cookie';
import Axios from 'axios';

if (typeof window !== 'undefined') {
  window.Cookies = Cookies;
}

const req = Axios.create({
  baseURL: '/onlinejudge3/api',
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-csrf-token': Cookies.get('csrfToken') || '',
  },
});

req.interceptors.response.use(
  (response) => {
    if (!response.data || typeof response.data !== 'object' || !('success' in response.data)) {
      throw new Error('Invalid response');
    }
    if (!response.data.success) {
      const e = new Error(`API Error: ${response.data.msg} ${response.data.code}`);
      e.code = response.data.code;
      e.msg = response.data.msg;
      throw e;
    }
    return response.data.data;
  },
  (error) => {
    throw error;
  },
);

export default req