import { useEffect, useState } from 'react';
import axios from 'axios';

import { getEndpoint } from '../Api/index';
import { formatData } from '../Utils/utils';

export const useApiCall = (typeSelected, page, limit) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let endpoint = null;

    setLoading(true);
    //get endpoint url
    endpoint = getEndpoint(typeSelected, page, limit);

    //get data hits
    axios.get(endpoint)
      .then(({ data }) => {
        //filter data by empty fields
        setData(formatData(data));
        return data;
      })
      .catch(error => {
        setError(error);
      });
    setLoading(false);

  }, [typeSelected, page]);// eslint-disable-line react-hooks/exhaustive-deps

  return { loading, data, error };
};