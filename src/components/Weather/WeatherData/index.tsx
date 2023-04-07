// Components
import { Error, Loading } from 'components/Common';
import WeatherDataLocation from '../WeatherDataLocation';
import WeatherDataSymbol from '../WeatherDataSymbol';
import WeatherDataWind from '../WeatherDataWind';
import WeatherDataTemp from '../WeatherDataTemp';
import WeatherDataSun from '../WeatherDataSun';
import WeatherDataDaily from '../WeatherDataDaily';

// Other imports
import styled from '@emotion/styled';
import useFetch from 'hooks/useFetch';
import WeatherObject from 'utils/interfaces/WeatherObject';

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

const Columns = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

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
      {data && (
        <div>
          <Columns>
            <div>
              <WeatherDataLocation name={name} admin1={admin1} />

              <WeatherDataWind data={data} />

              <WeatherDataSun data={data} />
            </div>

            <div>
              <WeatherDataSymbol code={data.current_weather.weathercode} />

              <WeatherDataTemp temp={data.current_weather.temperature} />
            </div>
          </Columns>

          <WeatherDataDaily data={data} />
        </div>
      )}
    </>
  );
};

export default WeatherData;
