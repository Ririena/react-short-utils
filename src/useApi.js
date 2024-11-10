
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to handle API requests using Axios.
 * @param {string} url - The API endpoint to make the request to.
 * @param {Object} options - The options for the axios request (method, body, headers, etc.).
 * @returns {Object} Contains `data`, `loading`, `error`, and `fetchData` function.
 */
const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      });

      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error, fetchData };
};

export default useApi;
