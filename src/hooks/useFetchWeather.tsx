import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const useFetch = (
  latitude: string | undefined,
  longitude: string | undefined
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const useFahrenheit = useSelector(
    (state: any) => state.settings.useFahrenheit
  );

  useEffect(() => {
    if (latitude && longitude) {
      const tempUnit = useFahrenheit ? 'fahrenheit' : 'celsius';

      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&current_weather=true&windspeed_unit=ms&forecast_days=3&timezone=auto&temperature_unit=${tempUnit}`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }
  }, [latitude, longitude, useFahrenheit]);

  return { data, loading, error };
};
export default useFetch;
