import { TextInput } from './styles';

const SearchInput = ({ searchWord, setSearchWord, blur, focus }: any) => {
  return (
    <TextInput
      type="text"
      placeholder="Search locations..."
      value={searchWord}
      onChange={(e) => setSearchWord(e.target.value)}
      onFocus={focus}
      onBlur={blur}
    />
  );
};

export default SearchInput;
