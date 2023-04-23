// Components
import { SearchInput, SearchResultsList } from 'components/SearchBar';

// Other imports
import useSearchBar from 'hooks/useSearchBar';
import useSearch from 'hooks/useSearch';
import Column from './styles';

const SearchBar = () => {
  const { searchWord, setSearchWord, results } = useSearch();
  const { isActive, handleBlur, handleFocus } = useSearchBar();

  return (
    <Column>
      <SearchInput
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        blur={handleBlur}
        focus={handleFocus}
      />

      {isActive && results && results.length > 0 && (
        <SearchResultsList results={results} setSearchWord={setSearchWord} />
      )}
    </Column>
  );
};

export default SearchBar;
