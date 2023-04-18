import { WeatherObjectFull } from 'utils/interfaces';
import { timeFormatter } from 'utils/functions';

type Props = {
  data: WeatherObjectFull;
};

const WeatherDataSun = ({ data }: Props) => {
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
