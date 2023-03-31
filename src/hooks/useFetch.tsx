import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook, jossa haetaan säädata halutusta sijainnista.

const useFetch = (latitude = '62.24', longitude = '25.72') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&windspeed_unit=ms&forecast_days=3&timezone=auto`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [latitude, longitude]);

  return { data, loading, error };
};
export default useFetch;
