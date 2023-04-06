import { Error, Loading } from 'components/Common';
import useFetch from 'hooks/useFetch';

interface WeatherDataProps {
  latitude: string | undefined;
  longitude: string | undefined;
}

const WeatherData = ({ latitude, longitude }: WeatherDataProps) => {
  const { data, loading, error } = useFetch(latitude, longitude);

  if (loading) return <Loading />;

  if (error) return <Error />;

  console.log('data: ', data);

  return (
    <>
      <h3>
        Location: {latitude}, {longitude}
      </h3>
    </>
  );
};

export default WeatherData;
