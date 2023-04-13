import styled from '@emotion/styled';

const Temp = styled.p({
  fontSize: '40px',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '15px 0px 0px 0px',
});

type Props = {
  temp: number | undefined;
  unit: string | undefined;
};

const WeatherDataTemp = ({ temp, unit }: Props) => {
  return (
    <div>
      <Temp>
        {temp}
        {unit}
      </Temp>
    </div>
  );
};

export default WeatherDataTemp;
