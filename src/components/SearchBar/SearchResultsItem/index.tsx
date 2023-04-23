import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Geocoding } from 'utils/interfaces';

const Item = styled.p({
  cursor: 'pointer',
  color: 'black',
});

type Props = {
  result: Geocoding;
  setSearchWord: Function;
};

const SearchResultsItem = ({ result, setSearchWord }: Props) => {
  const handleClick = () => {
    setSearchWord('');
  };

  return (
    <Link
      to={`/location/${result.latitude}/${result.longitude}/${result.name}${
        result.admin1 ? '/' + result.admin1 : ''
      }`}
      onClick={handleClick}
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
