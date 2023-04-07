import { useState, useEffect } from 'react';

type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

const useUserCoordinates = (): {
  coordinates: Coordinates;
  loading: boolean;
} => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  return { coordinates, loading };
};

export default useUserCoordinates;
