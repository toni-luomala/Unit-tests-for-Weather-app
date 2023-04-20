// Components
import { FavoritesButton, LocationName } from 'components/LocationPage';

// Other imports
import { Location } from 'utils/interfaces';
import { Row } from './styles';

const LocationTitle = ({ name, admin1, longitude, latitude }: Location) => {
  return (
    <Row>
      <LocationName name={name} admin1={admin1} />

      <FavoritesButton
        name={name}
        admin1={admin1}
        latitude={latitude}
        longitude={longitude}
      />
    </Row>
  );
};

export default LocationTitle;
