import WeatherObjectInterface from './WeatherObjectFull';

export default interface FetchInterface {
  loading: boolean;
  error: string | null;
  data: WeatherObjectInterface | null;
}
