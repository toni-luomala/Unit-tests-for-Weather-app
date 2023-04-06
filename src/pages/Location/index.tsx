import { WeatherData } from 'components/Weather';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { latitude, longitude } = useParams<{
    latitude: string;
    longitude: string;
  }>();

  return (
    <>
      <WeatherData latitude={latitude} longitude={longitude} />
    </>
  );
};

export default LocationPage;
