import { SearchInput, SearchResultsList } from 'components/SearchBar';

import useSearchBar from 'hooks/useSearchBar';
import useSearch from 'hooks/useSearch';

const SearchBar = () => {
  const { searchWord, setSearchWord, results } = useSearch();
  const { isActive, handleBlur, handleFocus } = useSearchBar();

  return (
    <>
      <SearchInput
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        blur={handleBlur}
        focus={handleFocus}
      />

      {isActive && results && results.length > 0 && (
        <SearchResultsList results={results} />
      )}
    </>
  );
};

export default SearchBar;
