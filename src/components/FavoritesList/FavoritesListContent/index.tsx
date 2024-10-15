// Components
import { FavoritesListItem } from 'components/FavoritesList'
// Other imports
import { Location } from 'utils/interfaces'

const FavoritesListContent = ({ items }: { items: Location[] }) => {
  //console.log('items: ', items)
  if (items.length === 0) {
    return (
      <div>
        <p>You have not added any locations to favorites!</p>

        <p>Add locations to favorites to access their weather pages here.</p>
      </div>
    )
  }

  return (
    <div>
      {items.map((item: Location, index: number) => (
        <FavoritesListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default FavoritesListContent
