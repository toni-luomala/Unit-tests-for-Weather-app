import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSearch() {
  const [searchWord, setSearchWord] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: any = null;

    if (searchWord !== '' || searchWord.length > 1) {
      setLoading(true);

      timer = setTimeout(() => {
        axios
          .get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchWord}&count=5`
          )
          .then((response) => {
            setResults(response.data.results);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }, 1000);
    } else {
      setResults([]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchWord]);

  return { searchWord, setSearchWord, results, loading };
}
