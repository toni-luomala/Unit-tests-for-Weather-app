import { render, screen } from '@testing-library/react'
import FavoritesListContent from './index'
import { Location } from 'utils/interfaces'
import { MemoryRouter } from 'react-router-dom'

test('Should render specific text when array is empty', () => {
  render(<FavoritesListContent items={[]} />)

  const element = screen.getByText(
    'You have not added any locations to favorites!'
  )

  expect(element).toBeDefined()
})

describe('When city is added to favorites', () => {
  const mockItems: Location[] = [
    {
      admin1: 'Central Finland',
      latitude: '62.24147',
      longitude: '25.72088',
      name: 'Jyväskylä'
    }
  ]

  test('Should not render text when city is added to favorites', () => {
    render(
      <MemoryRouter>
        <FavoritesListContent items={mockItems} />
      </MemoryRouter>
    )

    expect(
      screen.queryByText('You have not added any locations to favorites!')
    ).not.toBeInTheDocument()
  })

  test('Should render city name when added to favorites', async () => {
    render(
      <MemoryRouter>
        <FavoritesListContent items={mockItems} />
      </MemoryRouter>
    )

    expect(await screen.findByText('Jyväskylä, Central Finland')).toBeVisible()
  })
})
