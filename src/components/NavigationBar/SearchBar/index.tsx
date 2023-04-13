// Components
import { SearchResultsList } from 'components/NavigationBar';

// Other imports
import styled from '@emotion/styled';
import useSearch from 'hooks/useSearch';
import { useState } from 'react';

const SearchForm = styled.form({
  width: '90%',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
});

const SearchInput = styled.input({
  height: '20px',
});

const SearchBar = () => {
  const { searchWord, setSearchWord, results } = useSearch();
  const [isActive, setIsActive] = useState(false);
  const [hideResultsTimeout, setHideResultsTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleBlur = () => {
    // Delay hiding the results for 100ms
    setHideResultsTimeout(
      setTimeout(() => {
        setIsActive(false);
      }, 100)
    );
  };

  const handleFocus = () => {
    // Clear the timeout when the input is focused again
    if (hideResultsTimeout) {
      clearTimeout(hideResultsTimeout);
      setHideResultsTimeout(null);
    }

    setIsActive(true);
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        placeholder="Search locations..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isActive && results && results.length > 0 && (
        <SearchResultsList results={results} />
      )}
    </SearchForm>
  );
};

export default SearchBar;
