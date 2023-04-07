import { useSelector } from 'react-redux';
import FavoriteInterface from 'utils/interfaces/FavoriteInterface';
import FavoritesListItem from '../FavoritesListItem';

const FavoritesList = () => {
  const items = useSelector((state: any) => state.favorites.items);

  return (
    <div>
      <h3>Favorite locations:</h3>

      {items.length === 0 && (
        <div>
          <p>You have not added any locations to favorites!</p>

          <p>Add locations to favorites to access their weather pages here.</p>
        </div>
      )}

      {items.length !== 0 && (
        <div>
          {items.map((item: FavoriteInterface, index: number) => (
            <FavoritesListItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
