const windDirectionSymbolReturner = (direction: number) => {
  switch (true) {
    case direction >= 338 || direction < 23:
      return '⬇️';

    case direction < 68:
      return '↙️';

    case direction < 113:
      return '⬅️';

    case direction < 158:
      return '↖️';

    case direction < 203:
      return '⬆️';

    case direction < 248:
      return '↗️';

    case direction < 293:
      return '➡️';

    case direction < 338:
      return '↘️';

    default:
      break;
  }
};

export default windDirectionSymbolReturner;
