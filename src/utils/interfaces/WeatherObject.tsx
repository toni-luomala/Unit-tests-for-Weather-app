interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

interface HourlyUnits {
  time: string;
  temperature_2m: string;
  rain: string;
  snowfall: string;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
}

export default interface WeatherObject {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}
