import FavoriteInterface from 'utils/interfaces/FavoriteInterface';

const isInFavorites = (
  favorites: FavoriteInterface[],
  latitude: string | undefined,
  longitude: string | undefined
) => {
  return (
    favorites.some(
      (fav: FavoriteInterface) =>
        fav.latitude === latitude && fav.longitude === longitude
    ) ||
    JSON.parse(localStorage.getItem('favorites') || '[]').some(
      (fav: FavoriteInterface) =>
        fav.latitude === latitude && fav.longitude === longitude
    )
  );
};

export default isInFavorites;
