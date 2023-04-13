// Components
import { WeatherDataSymbol } from 'components/Weather';

// Other imports
import styled from '@emotion/styled';
import timeFormatter from 'utils/functions/timeFormatter';
import WeatherObjectSmall from 'utils/interfaces/WeatherObjectSmall';

const Centered = styled.div({
  textAlign: 'center',
  margin: '0px 15px',
});

type Props = {
  data: WeatherObjectSmall;
};

const WeatherDataDailyItem = ({ data }: Props) => {
  return (
    <Centered>
      <h3>{timeFormatter(data.time)}</h3>

      <WeatherDataSymbol code={data.weathercode} />

      <p>
        <span className="bold">Rain</span>: {data.precipitation_probability_max}{' '}
        %
      </p>

      <p>
        <span className="bold">Temp max</span>. {data.temperature_2m_max}
        {data.tempUnit}
      </p>

      <p>
        <span className="bold">Temp min</span>. {data.temperature_2m_min}
        {data.tempUnit}
      </p>
    </Centered>
  );
};

export default WeatherDataDailyItem;
