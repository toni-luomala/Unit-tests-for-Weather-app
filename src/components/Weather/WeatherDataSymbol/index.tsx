import weatherCodeSymbolReturner from 'utils/WeatherCodeSymbol';
import styled from '@emotion/styled';

interface WeatherDataSymbolProps {
  code: number;
}

const WeatherSymbol = styled.p({
  fontSize: '70px',
  margin: '0px',
});

const WeatherDataSymbol = ({ code }: WeatherDataSymbolProps) => {
  const codeSymbol = weatherCodeSymbolReturner(code);

  return <WeatherSymbol>{codeSymbol}</WeatherSymbol>;
};

export default WeatherDataSymbol;
