import { WeatherCodeSymbol } from 'utils/functions';
import styled from '@emotion/styled';

const WeatherSymbol = styled.p({
  fontSize: '70px',
  margin: '0px',
});

type Props = {
  code: number;
};

const WeatherDataSymbol = ({ code }: Props) => {
  const codeSymbol = WeatherCodeSymbol(code);

  return <WeatherSymbol>{codeSymbol}</WeatherSymbol>;
};

export default WeatherDataSymbol;
