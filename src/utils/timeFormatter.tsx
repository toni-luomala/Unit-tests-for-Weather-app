function timeFormatter(dateString: string): string {
  const date = new Date(dateString);
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
  };

  if (dateString.includes('T')) {
    return date.toLocaleTimeString('en-GB', optionsTime);
  } else {
    return (
      date
        .toLocaleDateString('en-GB', optionsDate)
        .replace(',', '')
        .replace('/', '.') + '.'
    );
  }
}

export default timeFormatter;
