import WeatherObjectInterface from './WeatherObjectInterface';

export default interface FetchInterface {
  loading: boolean;
  error: string | null;
  data: WeatherObjectInterface | null;
}
