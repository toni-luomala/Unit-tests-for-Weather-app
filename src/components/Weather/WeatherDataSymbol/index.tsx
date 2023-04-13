import weatherCodeSymbolReturner from 'utils/functions/WeatherCodeSymbol';
import styled from '@emotion/styled';

const WeatherSymbol = styled.p({
  fontSize: '70px',
  margin: '0px',
});

type Props = {
  code: number;
};

const WeatherDataSymbol = ({ code }: Props) => {
  const codeSymbol = weatherCodeSymbolReturner(code);

  return <WeatherSymbol>{codeSymbol}</WeatherSymbol>;
};

export default WeatherDataSymbol;
