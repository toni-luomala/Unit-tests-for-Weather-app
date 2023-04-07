const weatherCodeSymbolReturner = (code: number) => {
  switch (true) {
    case code === 0:
      return '☀️';

    case code === 1:
      return '🌤️';

    case code === 2:
      return '⛅';

    case code === 3:
      return '☁️';

    case code <= 19:
      return '🌫️';

    case code === 20:
      return '☁️';

    case code === 21:
      return '🌧️';

    case code <= 24:
      return '🌨️';

    case code === 25:
      return '🌧️';

    case code === 26 || code === 27:
      return '🌨️';

    case code === 28:
      return '⛈️';

    case code <= 49:
      return '🌫️';

    case code <= 69:
      return '🌧️';

    case code <= 79:
      return '❄️';

    case code <= 94:
      return '🌧️';

    case code <= 99:
      return '⛈️';

    default:
      break;
  }
};

export default weatherCodeSymbolReturner;
