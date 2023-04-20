// Components
import { SearchResultsList } from 'components/NavigationBar';

// Other imports
import useSearch from 'hooks/useSearch';
import useSearchBar from 'hooks/useSearchBar';
import { SearchForm, SearchInput } from './styles';

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
