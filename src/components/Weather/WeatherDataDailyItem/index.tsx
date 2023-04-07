import styled from '@emotion/styled';
import WeatherDataSymbol from '../WeatherDataSymbol';
import timeFormatter from 'utils/timeFormatter';

interface WeatherDataDailyItemInterface {
  data: any;
}

const Centered = styled.div({
  textAlign: 'center',
  margin: '0px 15px',
});

const Bold = styled.span({
  fontWeight: 'bold',
});

const WeatherDataDailyItem = ({ data }: WeatherDataDailyItemInterface) => {
  return (
    <Centered>
      <h3>{timeFormatter(data.time)}</h3>

      <WeatherDataSymbol code={data.weathercode} />

      <p>
        <Bold>Rain</Bold>: {data.precipitation_probability_max} %
      </p>

      <p>
        <Bold>Temp max</Bold>. {data.temperature_2m_max}°C
      </p>

      <p>
        <Bold>Temp min</Bold>. {data.temperature_2m_min}°C
      </p>
    </Centered>
  );
};

export default WeatherDataDailyItem;
