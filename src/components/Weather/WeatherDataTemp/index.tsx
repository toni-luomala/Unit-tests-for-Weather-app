import styled from '@emotion/styled';

interface WeatherDataTempProps {
  temp: number | undefined;
}

const Temp = styled.p({
  fontSize: '40px',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '15px 0px 0px 0px',
});

const WeatherDataTemp = ({ temp }: WeatherDataTempProps) => {
  return (
    <div>
      <Temp>{temp}°C</Temp>
    </div>
  );
};

export default WeatherDataTemp;
