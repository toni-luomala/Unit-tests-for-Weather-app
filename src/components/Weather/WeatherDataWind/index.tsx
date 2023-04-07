import WeatherObject from 'utils/interfaces/WeatherObjectInterface';
import windDirectionSymbolReturner from 'utils/functions/WindDirectionSymbol';

interface WeatherDataInterface {
  data: WeatherObject | null;
}

const WeatherDataWind = ({ data }: WeatherDataInterface) => {
  return (
    <>
      <p>
        <span className="bold">Wind Speed:</span>{' '}
        {data?.current_weather.windspeed} m/s
      </p>

      {data?.current_weather.winddirection && (
        <p>
          <span className="bold">Wind Direction:</span>{' '}
          {windDirectionSymbolReturner(data?.current_weather.winddirection)}
        </p>
      )}
    </>
  );
};

export default WeatherDataWind;
