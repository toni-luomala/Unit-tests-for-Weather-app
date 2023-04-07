import styled from '@emotion/styled';
import WeatherObject from 'utils/interfaces/WeatherObject';
import timeFormatter from 'utils/timeFormatter';

interface WeatherDataInterface {
  data: WeatherObject | null;
}

const Bold = styled.span({
  fontWeight: 'bold',
});

const WeatherDataSun = ({ data }: WeatherDataInterface) => {
  return (
    <>
      {data?.daily.sunrise && data?.daily.sunset && (
        <>
          <p>
            <Bold>Sunrise:</Bold>{' '}
            {timeFormatter(data?.daily.sunrise[0].toString())}
          </p>

          <p>
            <Bold>Sunset:</Bold>{' '}
            {timeFormatter(data?.daily.sunset[0].toString())}
          </p>
        </>
      )}
    </>
  );
};

export default WeatherDataSun;
