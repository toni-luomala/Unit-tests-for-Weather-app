// Components
import { WeatherDataContainer } from 'components/Weather';

// Other imports
import { useParams } from 'react-router-dom';
import LocationTitle from 'components/LocationPage/LocationTitle';

const LocationPage = () => {
  const { latitude, longitude, name, admin1 } = useParams<{
    latitude: string;
    longitude: string;
    name: string;
    admin1: string;
  }>();

  return (
    <>
      {name && latitude && longitude && (
        <LocationTitle
          name={name}
          admin1={admin1}
          latitude={latitude}
          longitude={longitude}
        />
      )}

      {latitude && longitude && (
        <WeatherDataContainer latitude={latitude} longitude={longitude} />
      )}
    </>
  );
};

export default LocationPage;
