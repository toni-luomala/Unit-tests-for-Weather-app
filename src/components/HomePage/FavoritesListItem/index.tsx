import Favorite from 'utils/interfaces/FavoriteInterface';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface FavoritesListItemProps {
  item: Favorite;
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
    backgroundColor: '#d4d4d4',
  },
});

const FavoritesListItem = ({ item }: FavoritesListItemProps) => {
  return (
    <Link
      to={`/location/${item.latitude}/${item.longitude}${
        item.name ? '/' + item.name : ''
      }${item.admin1 ? '/' + item.admin1 : ''}`}
    >
      <ListItem>
        <h4>
          {item.name}
          {item.admin1 ? ', ' + item.admin1 : ''}
        </h4>

        <span>⮞</span>
      </ListItem>
    </Link>
  );
};

export default FavoritesListItem;
