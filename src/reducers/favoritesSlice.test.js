import favoritesSlice, { add, remove } from './favoritesSlice'
import deepFreeze from 'deep-freeze'

describe('FavoritesSlice should act presumably', () => {
  const initialState = { items: [] }

  test('FavoritesSlice should have initial state by default', () => {
    expect(favoritesSlice(undefined, { type: undefined })).toEqual(initialState)
  })

  test('Should handle the add action', () => {
    const location = { name: 'Kokkola' }

    deepFreeze(initialState)

    const addLocation = favoritesSlice(initialState, add(location))

    console.log('initialState: ', initialState)
    console.log('addLocation: ', addLocation)

    expect(addLocation).not.toBe(initialState)

    expect(initialState).toEqual({
      items: []
    })

    expect(addLocation).toEqual({
      items: [{ name: 'Kokkola' }]
    })

    expect(initialState).toEqual({
      items: []
    })
  })

  test('Should handle the remove action', () => {
    deepFreeze(initialState)

    const location = { name: 'Kokkola' }

    const addLocation = favoritesSlice(initialState, add(location))

    expect(addLocation).toEqual({
      items: [{ name: 'Kokkola' }]
    })

    const removeLocation = favoritesSlice(addLocation, remove('Kokkola'))

    expect(removeLocation).toEqual(initialState)
  })
})
