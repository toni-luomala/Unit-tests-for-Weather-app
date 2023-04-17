import { Location } from 'utils/interfaces';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface FavoritesListItemProps {
  item: Location;
}

const ListItem = styled.div({
  backgroundColor: '#c9c9c9',
  padding: '1px 15px 1px 15px',
  marginBottom: '10px',
  borderRadius: '5px',
  color: '#1a1a1a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ':hover': {
    backgroundColor: '#b4b4b4',
  },
});

const FavoritesListItem = ({
  item: { name, admin1, latitude, longitude },
}: FavoritesListItemProps) => {
  return (
    <Link
      to={`/location/${latitude}/${longitude}${name ? `/${name}` : ''}${
        admin1 ? `/${admin1}` : ''
      }`}
      rel="nofollow"
    >
      <ListItem>
        <h4>
          {name}
          {admin1 ? `, ${admin1}` : ''}
        </h4>

        <span role="img" aria-label="Go to location page">
          ⮞
        </span>
      </ListItem>
    </Link>
  );
};

export default FavoritesListItem;
