// Components
import SearchResultsItem from 'components/NavigationBar/SearchResultsItem';
// Other imports
import { Geocoding } from 'utils/interfaces';
import { ResultsContainer, ResultsDiv } from './styles';

type Props = {
  results: Geocoding[];
};

const SearchResultsList = (props: Props) => {
  if (props.results.length < 1) <></>;

  return (
    <ResultsContainer>
      <ResultsDiv>
        {props.results.map((result: Geocoding) => (
          <SearchResultsItem key={result.id} result={result} />
        ))}
      </ResultsDiv>
    </ResultsContainer>
  );
};

export default SearchResultsList;
