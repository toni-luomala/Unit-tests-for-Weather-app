import styled from '@emotion/styled';

const Item = styled.p({
  cursor: 'pointer',
});

const Bold = styled.span({
  fontWeight: 'bold',
});

const SearchResultsItem = (props: any) => {
  console.log(props.result);

  return (
    <>
      <Item>
        <Bold>{props.result.name}</Bold>

        {props.result.admin1 ? `, ${props.result.admin1}` : ''}
      </Item>
    </>
  );
};

export default SearchResultsItem;
