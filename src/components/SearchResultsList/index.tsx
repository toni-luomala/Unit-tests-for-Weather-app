import styled from '@emotion/styled';
import SearchResultsItem from 'components/SearchResultsItem';
import GeocodingResult from 'utils/GeocodingResult';

interface SearchResultsListProps {
  results: GeocodingResult[];
}

const ResultsContainer = styled.div({
  position: 'absolute',
  width: '100%',
  maxWidth: '277px',
});

const ResultsDiv = styled.div({
  position: 'relative',
  top: '30px',
  backgroundColor: 'white',
  color: 'black',
  padding: '0px 10px 5px 10px',
  width: '100%',
  border: '1px solid black',
});

const SearchResultsList = (props: SearchResultsListProps) => {
  console.log('results: ', props.results);

  if (props.results.length < 1) <></>;

  return (
    <ResultsContainer>
      <ResultsDiv>
        {props.results.map((result: GeocodingResult) => (
          <SearchResultsItem key={result.id} result={result} />
        ))}
      </ResultsDiv>
    </ResultsContainer>
  );
};

export default SearchResultsList;
