import {
  FavoritesListContainer,
  FavoritesListContent,
} from 'components/FavoritesList';
import { Location } from 'utils/interfaces';

const HomePage = () => {
  return (
    <>
      <h3>Favorite locations:</h3>

      <FavoritesListContainer
        render={(items: Location[]) => <FavoritesListContent items={items} />}
      />
    </>
  );
};

export default HomePage;
