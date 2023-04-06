import weatherCodeSymbolReturner from 'utils/WeatherCodeSymbol';

interface WeatherDataSymbolProps {
  code: number;
}

const WeatherDataSymbol = ({ code }: WeatherDataSymbolProps) => {
  const codeSymbol = weatherCodeSymbolReturner(code);

  return <h2>{codeSymbol}</h2>;
};

export default WeatherDataSymbol;
