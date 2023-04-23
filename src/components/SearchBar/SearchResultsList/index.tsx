// Components
import { SearchResultsItem } from 'components/SearchBar';
// Other imports
import { Geocoding } from 'utils/interfaces';
import { ResultsContainer, ResultsDiv } from './styles';

type Props = {
  results: Geocoding[];
  setSearchWord: Function;
};

const SearchResultsList = ({ results, setSearchWord }: Props) => {
  if (results.length < 1) <></>;

  return (
    <ResultsContainer>
      <ResultsDiv>
        {results.map((result: Geocoding, index: number) => (
          <div key={result.id}>
            <SearchResultsItem result={result} setSearchWord={setSearchWord} />

            {index < results.length - 1 && <hr />}
          </div>
        ))}
      </ResultsDiv>
    </ResultsContainer>
  );
};

export default SearchResultsList;
