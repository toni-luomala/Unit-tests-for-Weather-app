import {
  FavoritesListContainer,
  FavoritesListContent,
} from 'components/FavoritesList';
import Favorite from 'utils/interfaces/FavoriteInterface';

const HomePage = () => {
  return (
    <>
      <h3>Favorite locations:</h3>

      <FavoritesListContainer
        render={(items: Favorite[]) => <FavoritesListContent items={items} />}
      />
    </>
  );
};

export default HomePage;
