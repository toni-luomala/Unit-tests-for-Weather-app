import handleAddToFavorites from 'utils/functions/handleAddToFavorites';
import isInFavorites from 'utils/functions/isInFavorites';
import Location from 'utils/interfaces/FavoriteInterface';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesButton = ({ name, admin1, latitude, longitude }: Location) => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.favorites.items);
  const inFavorites = isInFavorites(items, latitude, longitude);

  return (
    <button
      onClick={() =>
        handleAddToFavorites(dispatch, items, name, admin1, latitude, longitude)
      }
    >
      {inFavorites ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};

export default FavoritesButton;
