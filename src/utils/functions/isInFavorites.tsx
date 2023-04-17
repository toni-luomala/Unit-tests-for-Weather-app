import { Location } from 'utils/interfaces';

const isInFavorites = (
  favorites: Location[],
  latitude: string | undefined,
  longitude: string | undefined
) => {
  return (
    favorites.some(
      (fav: Location) =>
        fav.latitude === latitude && fav.longitude === longitude
    ) ||
    JSON.parse(localStorage.getItem('favorites') || '[]').some(
      (fav: Location) =>
        fav.latitude === latitude && fav.longitude === longitude
    )
  );
};

export default isInFavorites;
