import styled from '@emotion/styled';
import WeatherObject from 'utils/interfaces/WeatherObject';
import windDirectionSymbolReturner from 'utils/WindDirectionSymbol';

interface WeatherDataInterface {
  data: WeatherObject | null;
}

const Bold = styled.span({
  fontWeight: 'bold',
});

const WeatherDataWind = ({ data }: WeatherDataInterface) => {
  return (
    <>
      <p>
        <Bold>Wind Speed:</Bold> {data?.current_weather.windspeed} m/s
      </p>

      {data?.current_weather.winddirection && (
        <p>
          <Bold>Wind Direction:</Bold>{' '}
          {windDirectionSymbolReturner(data?.current_weather.winddirection)}
        </p>
      )}
    </>
  );
};

export default WeatherDataWind;
