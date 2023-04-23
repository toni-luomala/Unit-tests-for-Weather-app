import { SearchForm, TextInput } from './styles';

const SearchInput = ({ searchWord, setSearchWord, blur, focus }: any) => {
  return (
    <SearchForm>
      <TextInput
        type="text"
        placeholder="Search locations..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onFocus={focus}
        onBlur={blur}
      />
    </SearchForm>
  );
};

export default SearchInput;
