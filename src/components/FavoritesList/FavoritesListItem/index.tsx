import { Location } from 'utils/interfaces';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

interface FavoritesListItemProps {
  item: Location;
}

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
