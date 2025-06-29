import { useState, useEffect } from 'react';
import axios from 'axios';

const useDesserts = () => {
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://6861780b8e748640844617cf.mockapi.io/Desserts')
      .then(response => {
        setDesserts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);

  return { desserts, loading, error };
};

export default useDesserts;
