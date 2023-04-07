// Components
import SearchResultsItem from 'components/NavigationBar/SearchResultsItem';

// Other imports
import styled from '@emotion/styled';
import GeocodingResult from 'utils/interfaces/GeocodingInterface';

interface SearchResultsListProps {
  results: GeocodingResult[];
}

const ResultsContainer = styled.div({
  position: 'absolute',
  width: '100%',
  maxWidth: '277px',
  '@media(max-width: 550px)': {
    maxWidth: '100%',
  },
});

const ResultsDiv = styled.div({
  position: 'relative',
  top: '20px',
  backgroundColor: 'white',
  color: 'black',
  padding: '0px 10px 5px 10px',
  width: '100%',
  boxShadow: '0px 7px 10px 0px rgba(0,0,0,0.5)',
  '@media(max-width: 550px)': {
    position: 'fixed',
    top: '80px',
    left: '0px',
  },
});

const SearchResultsList = (props: SearchResultsListProps) => {
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
