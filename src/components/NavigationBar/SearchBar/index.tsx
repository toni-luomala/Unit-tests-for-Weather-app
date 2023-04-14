// Components
import { SearchResultsList } from 'components/NavigationBar';

// Other imports
import styled from '@emotion/styled';
import useSearch from 'hooks/useSearch';
import useSearchBar from 'hooks/useSearchBar';

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
  const { isActive, handleBlur, handleFocus } = useSearchBar();

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
