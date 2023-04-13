import WeatherObject from 'utils/interfaces/WeatherObjectInterface';
import timeFormatter from 'utils/functions/timeFormatter';

interface WeatherDataInterface {
  data: WeatherObject;
}

const WeatherDataSun = ({ data }: WeatherDataInterface) => {
  return (
    <>
      {data.daily.sunrise && data.daily.sunset && (
        <>
          <p>
            <span className="bold">Sunrise:</span>{' '}
            {timeFormatter(data?.daily.sunrise[0].toString())}
          </p>

          <p>
            <span className="bold">Sunset:</span>{' '}
            {timeFormatter(data?.daily.sunset[0].toString())}
          </p>
        </>
      )}
    </>
  );
};

export default WeatherDataSun;
