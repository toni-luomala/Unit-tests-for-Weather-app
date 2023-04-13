// Components
import { FavoritesListItem } from 'components/HomePage';

// Other imports
import Favorite from 'utils/interfaces/FavoriteInterface';

const FavoritesListContent = ({ items }: { items: Favorite[] }) => {
  if (items.length === 0) {
    return (
      <div>
        <p>You have not added any locations to favorites!</p>

        <p>Add locations to favorites to access their weather pages here.</p>
      </div>
    );
  }

  return (
    <div>
      {items.map((item: Favorite, index: number) => (
        <FavoritesListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FavoritesListContent;
