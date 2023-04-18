import { Location } from 'utils/interfaces';
import { Dispatch } from 'redux';
import { add, remove } from 'reducers/favoritesSlice';

const handleAddToFavorites = (
  dispatch: Dispatch,
  favorites: Location[],
  name: string,
  admin1: string | undefined,
  latitude: string,
  longitude: string
) => {
  const isInFavorites = favorites.some(
    (fav) => fav.latitude === latitude && fav.longitude === longitude
  );
  if (isInFavorites) {
    dispatch(remove(name));
    const updatedFavorites = favorites.filter(
      (fav) => fav.latitude !== latitude || fav.longitude !== longitude
    );
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    const newFavorite = { name, admin1, latitude, longitude };
    dispatch(add(newFavorite));
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    localStorage.setItem(
      'favorites',
      JSON.stringify([...storedFavorites, newFavorite])
    );
  }
};

export default handleAddToFavorites;
