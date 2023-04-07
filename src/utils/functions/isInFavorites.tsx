import Favorite from 'utils/interfaces/FavoriteInterface';

const isInFavorites = (
  favorites: Favorite[],
  latitude: string | undefined,
  longitude: string | undefined
) => {
  return (
    favorites.some(
      (fav: Favorite) =>
        fav.latitude === latitude && fav.longitude === longitude
    ) ||
    JSON.parse(localStorage.getItem('favorites') || '[]').some(
      (fav: Favorite) =>
        fav.latitude === latitude && fav.longitude === longitude
    )
  );
};

export default isInFavorites;
