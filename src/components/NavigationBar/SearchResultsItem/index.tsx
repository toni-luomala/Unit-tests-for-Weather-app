import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import GeocodingResult from 'utils/GeocodingResult';

interface SearchResultsItemProps {
  result: GeocodingResult;
}

const Item = styled.p({
  cursor: 'pointer',
});

const Bold = styled.span({
  fontWeight: 'bold',
});

const SearchResultsItem = ({ result }: SearchResultsItemProps) => {
  return (
    <Link to={`/location/${result.latitude}/${result.longitude}`}>
      <Item>
        <Bold>{result.name}</Bold>

        {result.admin1 ? `, ${result.admin1}` : ''}
        {result.country ? `, ${result.country}` : ''}
      </Item>
    </Link>
  );
};

export default SearchResultsItem;
