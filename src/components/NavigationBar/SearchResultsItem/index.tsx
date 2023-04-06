import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import GeocodingResult from 'utils/interfaces/GeocodingResult';

interface SearchResultsItemProps {
  result: GeocodingResult;
}

const Item = styled.p({
  cursor: 'pointer',
  color: 'black',
});

const Bold = styled.span({
  fontWeight: 'bold',
});

const SearchResultsItem = ({ result }: SearchResultsItemProps) => {
  return (
    <Link
      to={`/location/${result.latitude}/${result.longitude}${
        result.name ? '/' + result.name : ''
      }${result.admin1 ? '/' + result.admin1 : ''}`}
    >
      <Item>
        <Bold>{result.name}</Bold>

        {result.admin1 ? `, ${result.admin1}` : ''}
        {result.country ? `, ${result.country}` : ''}
      </Item>
    </Link>
  );
};

export default SearchResultsItem;
