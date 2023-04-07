// Components
import { WeatherDataDailyItem } from 'components/Weather';

// Other imports
import WeatherObject from 'utils/interfaces/WeatherObjectInterface';
import styled from '@emotion/styled';

interface WeatherDataInterface {
  data: WeatherObject | null;
}

const DailyWeatherContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
});

const WeatherDataDaily = ({ data }: WeatherDataInterface) => {
  return (
    <>
      <h2>Daily Weather</h2>

      <DailyWeatherContainer>
        {data?.daily.time.map((time, index) => {
          const dayObject = {
            time: time,
            weathercode: data.daily.weathercode[index],
            precipitation_probability_max:
              data.daily.precipitation_probability_max[index],
            temperature_2m_max: data.daily.temperature_2m_max[index],
            temperature_2m_min: data.daily.temperature_2m_min[index],
          };

          return <WeatherDataDailyItem key={index} data={dayObject} />;
        })}
      </DailyWeatherContainer>
    </>
  );
};

export default WeatherDataDaily;
