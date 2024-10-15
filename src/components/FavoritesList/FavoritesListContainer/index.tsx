import { useSelector } from 'react-redux'
import { FavoritesList, Location } from 'utils/interfaces'

type RenderPropType = (items: Location[]) => JSX.Element | null

interface Props {
  render: RenderPropType
}

const FavoritesListContainer = ({ render }: Props) => {
  const items = useSelector((state: FavoritesList) => state.favorites.items)
  console.log('items: ', items)

  return render(items)
}

export default FavoritesListContainer
