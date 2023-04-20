import styled from '@emotion/styled';

const ListItem = styled.div({
  backgroundColor: '#c9c9c9',
  padding: '1px 15px 1px 15px',
  marginBottom: '10px',
  borderRadius: '5px',
  color: '#1a1a1a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ':hover': {
    backgroundColor: '#b4b4b4',
  },
});

export default ListItem;
