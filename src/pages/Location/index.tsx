import { WeatherData } from 'components/Weather';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { latitude, longitude, name, admin1 } = useParams<{
    latitude: string;
    longitude: string;
    name: string;
    admin1: string;
  }>();

  return (
    <>
      <WeatherData
        latitude={latitude}
        longitude={longitude}
        name={name}
        admin1={admin1}
      />
    </>
  );
};

export default LocationPage;
