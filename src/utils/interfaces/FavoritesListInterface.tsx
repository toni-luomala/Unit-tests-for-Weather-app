import Favorite from './FavoriteInterface';

export default interface FavoritesList {
  favorites: {
    items: Favorite[];
  };
}
