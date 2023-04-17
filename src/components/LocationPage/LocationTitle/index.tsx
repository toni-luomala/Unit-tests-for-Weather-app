import { Location } from 'utils/interfaces';
import LocationName from '../LocationName';
import FavoritesButton from '../FavoritesButton';
import styled from '@emotion/styled';

const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

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
