// Components
import { FavoritesListContent } from 'components/FavoritesList';
// Other imports
import { useSelector } from 'react-redux';

const FavoritesList = () => {
  const items = useSelector((state: any) => state.favorites.items);

  return (
    <div>
      <h3>Favorite locations:</h3>

      <FavoritesListContent items={items} />
    </div>
  );
};

export default FavoritesList;
