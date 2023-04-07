import { Link } from 'react-router-dom';
import FavoriteInterface from 'utils/interfaces/FavoriteInterface';

interface FavoritesListItemProps {
  item: FavoriteInterface;
}

const FavoritesListItem = ({ item }: FavoritesListItemProps) => {
  return (
    <Link
      to={`/location/${item.latitude}/${item.longitude}${
        item.name ? '/' + item.name : ''
      }${item.admin1 ? '/' + item.admin1 : ''}`}
    >
      <h4>
        {item.name}
        {item.admin1 ? ', ' + item.admin1 : ''}
      </h4>
    </Link>
  );
};

export default FavoritesListItem;
