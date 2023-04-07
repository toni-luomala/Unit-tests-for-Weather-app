import { useDispatch, useSelector } from 'react-redux';
import handleAddToFavorites from 'utils/functions/handleAddToFavorites';
import isInFavorites from 'utils/functions/isInFavorites';

interface FavoritesButtonProps {
  name: string;
  admin1: string;
  latitude: string;
  longitude: string;
}

const FavoritesButton = ({
  name,
  admin1,
  latitude,
  longitude,
}: FavoritesButtonProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.favorites.items);

  const inFavorites = isInFavorites(items, latitude, longitude);

  const handleAddToFavoritesWrapper = () => {
    handleAddToFavorites(dispatch, items, name, admin1, latitude, longitude);
  };

  return (
    <button onClick={handleAddToFavoritesWrapper}>
      {inFavorites ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
};

export default FavoritesButton;
