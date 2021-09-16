import { useEffect, useState } from 'react';
import axios from 'axios';

import { getEndpoint } from '../Api/index';
import { formatData } from '../Utils/utils';

export const useApiCall = (typeSelected, page) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    const endpoint = getEndpoint(typeSelected, page);
    axios.get(endpoint)
      .then(({ data }) => {
        const dataFormated = formatData(data);
        setData(dataFormated);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        throw new Error({ type: `::ERROR:: calling api ${endpoint}`, error });
      });
  }, [typeSelected, page]);

  return { loading, data, error };
};