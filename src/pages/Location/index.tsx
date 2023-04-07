import { WeatherData } from 'components/Weather';
import { useParams } from 'react-router-dom';

import LocationName from 'components/LocationPage/LocationName';
import FavoritesButton from 'components/LocationPage/FavoritesButton';

const LocationPage = () => {
  const { latitude, longitude, name, admin1 } = useParams<{
    latitude: string;
    longitude: string;
    name: string;
    admin1: string;
  }>();

  return (
    <>
      <LocationName name={name} admin1={admin1} />

      {name && admin1 && latitude && longitude && (
        <FavoritesButton
          name={name}
          admin1={admin1}
          latitude={latitude}
          longitude={longitude}
        />
      )}

      <WeatherData latitude={latitude} longitude={longitude} />
    </>
  );
};

export default LocationPage;
