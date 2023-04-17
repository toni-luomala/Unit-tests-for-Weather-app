import { useSelector } from 'react-redux';

const FavoritesListContainer = ({ render }: any) => {
  const items = useSelector((state: any) => state.favorites.items);

  return render(items);
};

export default FavoritesListContainer;
