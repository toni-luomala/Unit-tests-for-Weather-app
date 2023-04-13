import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import GeocodingResults from 'utils/interfaces/GeocodingInterface';

const Item = styled.p({
  cursor: 'pointer',
  color: 'black',
});

type Props = {
  result: GeocodingResults;
};

const SearchResultsItem = ({ result }: Props) => {
  return (
    <Link
      to={`/location/${result.latitude}/${result.longitude}${
        result.name ? '/' + result.name : ''
      }${result.admin1 ? '/' + result.admin1 : ''}`}
    >
      <Item>
        <span className="bold">{result.name}</span>

        {result.admin1 ? `, ${result.admin1}` : ''}
        {result.country ? `, ${result.country}` : ''}
      </Item>
    </Link>
  );
};

export default SearchResultsItem;
