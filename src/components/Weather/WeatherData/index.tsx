import { Error, Loading } from 'components/Common';
import useFetch from 'hooks/useFetch';
import WeatherDataLocation from '../WeatherDataLocation';
import weatherCodeSymbolReturner from 'utils/WeatherCodeSymbol';
import WeatherObject from 'utils/interfaces/WeatherObject';
import WeatherDataSymbol from '../WeatherDataSymbol';

interface WeatherDataProps {
  latitude: string | undefined;
  longitude: string | undefined;
  name: string | undefined;
  admin1: string | undefined;
}

interface FetchInterface {
  loading: boolean;
  error: string | null;
  data: WeatherObject | null;
}

const WeatherData = ({
  latitude,
  longitude,
  name,
  admin1,
}: WeatherDataProps) => {
  const { data, loading, error } = useFetch(
    latitude,
    longitude
  ) as FetchInterface;

  if (loading) return <Loading />;

  if (error) return <Error />;

  console.log('data: ', data);

  return (
    <>
      <WeatherDataLocation name={name} admin1={admin1} />

      {data && (
        <div>
          <WeatherDataSymbol code={data.current_weather.weathercode} />
        </div>
      )}
    </>
  );
};

export default WeatherData;
