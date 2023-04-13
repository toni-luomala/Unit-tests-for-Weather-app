// Components
import { Error, Loading } from 'components/Common';
import { WeatherDataSymbol } from 'components/Weather';
import { WeatherDataWind } from 'components/Weather';
import { WeatherDataTemp } from 'components/Weather';
import { WeatherDataSun } from 'components/Weather';
import { WeatherDataDaily } from 'components/Weather';

// Other imports
import styled from '@emotion/styled';
import useFetch from 'hooks/useFetch';
import FetchInterface from 'utils/interfaces/FetchInterface';

interface WeatherDataProps {
  latitude: string | undefined;
  longitude: string | undefined;
}

const Columns = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const WeatherDataContainer = ({ latitude, longitude }: WeatherDataProps) => {
  const { data, loading, error } = useFetch(
    latitude,
    longitude
  ) as FetchInterface;

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      {data && (
        <div>
          <Columns>
            <div>
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

export default WeatherDataContainer;
