import { WeatherObjectFull } from 'utils/interfaces';
import { WindDirectionSymbol } from 'utils/functions';

type Props = {
  data: WeatherObjectFull | null;
};

const WeatherDataWind = ({ data }: Props) => {
  return (
    <>
      <p>
        <span className="bold">Wind Speed:</span>{' '}
        {data?.current_weather.windspeed} m/s
      </p>

      {data?.current_weather.winddirection && (
        <p>
          <span className="bold">Wind Direction:</span>{' '}
          {WindDirectionSymbol(data?.current_weather.winddirection)}
        </p>
      )}
    </>
  );
};

export default WeatherDataWind;
